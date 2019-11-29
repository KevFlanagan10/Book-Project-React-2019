import React from 'react';
//import { newExpression } from '@babel/types';
import axios from 'axios';

class Submit extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  PublishDate:'',
                CoverImage:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
    this.handlePublishDateChange = this.handlePublishDateChange.bind(this);
    this.handleCoverImageChange = this.handleCoverImageChange.bind(this);
  }
  //handles the book title
  handleBookTitleChange(e){
    this.setState({Title: e.target.value});
  }
  //handles the publish date
  handlePublishDateChange(e){
    this.setState({PublishDate: e.target.value});
  }
  //the cover of the book
  handleCoverImageChange(e){
    this.setState({CoverImage: e.target.value});
  }

  handleSubmit(e){//when you click the button this gets fired
    alert(this.state.Title+ "      " + this.state.PublishDate 
    +"       "+ this.state.CoverImage);
    e.preventDefault();

    const newBook = {
      title:this.state.Title,
      publishDate:this.state.PublishDate,
      coverImage:this.state.CoverImage
    };

    //sets the url in the clients side 
    axios.post('http://localhost:4000/api/books',newBook)
        .then(window.location = '/read/')
        .catch();

    this.setState({Title:'',
                  PublishDate:'',
                  CoverImage:''
                });              
  }
// rendering components into DOM
  render() {
    return (
      <div style={{margin:20}} align='middle'>
        <h1>Submit Book on this page</h1>
        <form onSubmit={this.handleSubmit}>
        <div style={{width:'30rem'}} className='form-group'>
          <label>Book Title</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleBookTitleChange}
          ></input>
        </div>
        <div style={{width:'30rem'}} className='form-group'>
          <label>Date Book was Published</label>
          <input
          type='text'
          className='form-control'
          value={this.state.PublishDate}
          onChange={this.handlePublishDateChange}
          ></input>
        </div>
        <div style={{width:'30rem'}} className='form-group'>
          <label>Book Cover Image Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.CoverImage}
          onChange={this.handleCoverImageChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Add Book">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Submit;