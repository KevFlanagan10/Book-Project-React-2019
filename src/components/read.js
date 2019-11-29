import React from 'react'
import Books from '../components/books';
import axios from 'axios';


class Read extends React.Component {

    constructor() {
        super();
        this.ReloadPage = this.ReloadPage.bind(this);
    }

    state = {
        books: []
    };
    //opens in the read page after it reloads
    ReloadPage() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //takes info from mongo to display
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>My Top Stephen King books</h1>
                <p>Below are some of my favorite books</p>

                <Books myBooks={this.state.books} ReloadPage={this.ReloadPage}></Books>
                <br></br>
            </div>
        );
    }
}
export default Read;