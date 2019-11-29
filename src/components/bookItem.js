import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
class BookItem extends React.Component {

  constructor() {
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }

  DeleteBook(e) {
    e.preventDefault();
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
      .then(() => {
        this.props.ReloadPage();
      })
      .catch();

  }

  // rendering components into DOM
  render() {
    return (
      <div style={{margin:20}}  align='middle'>
        {/* <h4>{this.props.book.Title}</h4>
                <p>{this.props.book.publishDate}</p>
                <img src={this.props.book.coverImage}></img>
                
                justifyContent={{center:'30rem'}}
                align='middle'
                style={{width:'30rem'}}*/}


        <Card border="secondary" className="text Center" style={{width:'30rem'}} >
          <Card.Header>{this.props.book.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.book.coverImage}></img>
              <footer>
                {this.props.book.publishDate}
              </footer>
            </blockquote>
          </Card.Body>
          <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
          <Link to={"/edit/" + this.props.book._id} className="btn btn-secondary">Edit</Link>
        </Card>
      </div>
    )
  }
}
export default BookItem;