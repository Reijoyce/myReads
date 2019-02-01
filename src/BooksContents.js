import React, { Component } from 'react'
import BookShelf from './BookShelf'

export class BooksContents extends Component {
 
  render() { 
      return (
        <div>
          <div className="list-books-content">
            <div>
              <BookShelf books={this.props.books} updateShelf={this.props.updateShelf} category="currentlyReading" heading="Currently Reading" />
              <BookShelf books={this.props.books} updateShelf={this.props.updateShelf} category="wantToRead" heading="Want to Read" />
              <BookShelf books={this.props.books} updateShelf={this.props.updateShelf} category="read" heading="Read" />             
            </div>
          </div>
        </div>
      )
  }
}
export default BooksContents
