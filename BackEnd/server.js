const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');//npm install cors

const mongoose = require('mongoose');//npm install mongoose
// mongoDB is where the collections are saved
const mongoDB = 'mongodb+srv://admin:admin@cluster0-dapzk.mongodb.net/KevsBooks?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true })

//added in at the end when finished with server and ready to run in build...(2)lines
//app.use(express.static(path.join(__dirname, '../build')));
//app.use('/static', express.static(path.join(__dirname, 'build//static')));


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded({ extended: false }));//to use body parser
app.use(bodyParser.json());

//Schema for the database
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    publishDate: String,
    coverImage: String
})

const BookModel = mongoose.model('books', bookSchema);

//KevsBooks is what you call on website = local:4000/KevsBooks
app.get('/KevsBooks', (req, res) => {
    res.sendFile(path.join(__dirname + '/Index.html'))
})

//listening to the get method!!
app.get('/api/books', (req, res) => {
    BookModel.find((error, data) => {
        res.json(data);
    })
})

//these four lines will go off and get info from the database
app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    BookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})
//update a book
app.put('/api/books/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    BookModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

//creates a book
app.post('/api/books', (req, res) => {
    console.log('Post Request Host sucessful');
    console.log(req.body.title);
    console.log(req.body.publishDate);
    console.log(req.body.coverImage);

    BookModel.create({
        title: req.body.title,
        publishDate: req.body.publishDate,
        coverImage: req.body.coverImage
    })

        .then(() => {
            res.json('post received!');
        })

        .catch(() => {
            req.json('post failed!')
        });
})
//deletes selected book
app.delete('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    BookModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})

//added in at the end when finished with server and ready to run in build... (3)lines
//app.get('*', (req,res) =>{
//res.sendFile(path.join(__dirname+'/../build/index.html'));
//});

app.listen(port, () => console.log(`Book app listening on port ${port}!`))