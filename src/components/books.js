import React from 'react';
import BookItem from './bookItem';

class Books extends React.Component {

    render() {
        return this.props.myBooks.map((book) => {
            //console.log({book});
            return <BookItem key={book._id} book={book} ReloadPage={this.props.ReloadPage}></BookItem>
        });
    }
}
export default Books;