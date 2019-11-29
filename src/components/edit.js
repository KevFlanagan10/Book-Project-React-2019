import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: '',
      PublishDate: '',
      CoverImage: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
    this.handleBookPublishDateChange = this.handleBookPublishDateChange.bind(this);
    this.handleBookCoverImageChange = this.handleBookCoverImageChange.bind(this);

  }
  //Called once the component is mounted to the DOM
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Title: response.data.title,
          PublishDate: response.data.publishDate,
          CoverImage: response.data.coverImage
        })
      })
      .catch();
  }
  handleBookTitleChange(e) {
    this.setState({ Title: e.target.value });
  }

  handleBookPublishDateChange(e) {
    this.setState({ PublishDate: e.target.value });
  }

  handleBookCoverImageChange(e) {
    this.setState({ CoverImage: e.target.value });
  }

  handleSubmit(e) {//when you click the button this gets fired
    alert(this.state.Title + "      " + this.state.PublishDate
      + "       " + this.state.CoverImage);
    e.preventDefault();

    const newBook = {
      title: this.state.Title,
      publishDate: this.state.PublishDate,
      coverImage: this.state.CoverImage
    };

    //updates the page after editing
    axios.put('http://localhost:4000/api/books/' + this.state._id, newBook)
      .then(window.location = '/read/')
      .catch();

    this.setState({
      Title: '',
      PublishDate: '',
      CoverImage: ''
    });

  }

  render() {
    return (
      <div>
        <h1>Edit Book</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Book Title</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.handleBookTitleChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Book Publish Date</label>
            <input
              type='text'
              className='form-control'
              value={this.state.PublishDate}
              onChange={this.handleBookPublishDateChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Book Cover + Image Url</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.CoverImage}
              onChange={this.handleBookCoverImageChange}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Edit Book">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;