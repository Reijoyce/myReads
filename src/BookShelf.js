import React, { Component } from 'react'
import Book from './Book.js';

export class BookShelf extends Component {
    
    render() {
console.log(this.props.category)
        return (
            <div>
                <div>
                    <div className="bookshelf" >
                    
                        <h2 className="bookshelf-title">{this.props.heading}</h2>
                        <div className="bookshelf-books"></div>
                        <ol className="books-grid">
                            {this.props.books.filter
                            ( book => book.shelf === this.props.category)
                            .map( book => (
                                <Book book={book} 
                                shelf={book.shelf}
                                title={book.title}
                                author={book.authors} 
                                img={book.imageLinks.thumbnail}
                                key={book.id} updateShelf={this.props.updateShelf}/>
                            ))}
                        </ol>

                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf
