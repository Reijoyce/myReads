import React, { Component } from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types'

export class SearchBooks extends Component {
    static propTypes = {
        showingBooks: PropTypes.array,
        allBooks: PropTypes.string
      }
      
    state = {
        allBooks: '',
        showingBooks: []
    }

    listBooks(allBookList) {
        if (!(allBookList instanceof Array)) {
            this.setState({ showingBooks: []});
            return;
        }

        if (this.props.books) {
            allBookList.forEach( allBooksBook => {
                allBooksBook.shelf = 'none'
                this.props.books.map( (bookInLibrary) => {
                if (bookInLibrary.id === allBooksBook.id) {
                    allBooksBook.shelf = bookInLibrary.shelf
                }
                return allBooksBook
                })
            })
        }
            
        this.setState({ showingBooks: allBookList})
    }
 
    updateSearch = (allBooks) => {
        this.setState({ allBooks })
        if (this.state.allBooks) {
            BooksAPI.search(allBooks)
            .then((allBookList) => {
                this.listBooks(allBookList)
            })
        } else {
            this.setState({ showingBooks: []})
        }
    }

    render() {
        const { allBooks, showingBooks } = this.state
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        
                        <Link className="close-search" to="/">
                            Close
                        </Link>                     
                        <div className="search-books-input-wrapper">
            
                            <input type="text" placeholder="Search by title or author"
                                type="text"
                                placeholder="Search by title or author"
                                value={allBooks}
                                onChange={(event) => this.updateSearch(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {allBooks && showingBooks.map( (book) => (
                                (book.imageLinks) ?
                                <Book book={book} shelf={book.shelf} title={book.title} author={book.authors} img={book.imageLinks.thumbnail} key={book.id} books={this.props.books}  updateShelf={this.props.updateShelf}/>:
                                <Book book={book} shelf={book.shelf} title={book.title} author={book.authors} key={book.id} books={this.props.books} updateShelf={this.props.updateShelf}/>
                            ))}
                        </ol>
                        {allBooks.length > 1 && showingBooks.length === 0 && (
                            <div className="search-error">
                                <p>Sorry, no book matches your search. <br />
                                Please, try another category.</p>
                            </div>
                        )}
                    </div>                      
                </div>
               
            </div>
        )
    }
}

 

export default SearchBooks

