import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import { Route, Link } from "react-router-dom";
import BooksContents from './BooksContents'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({books})
    })
  }

  updateShelf = (book,event) => {
    BooksAPI.update(book,event).then(() => {
    book.shelf = event
      const updatedBooks = this.state.books.filter( b => b.id !== book.id)
        updatedBooks.push(book)
        this.setState({
          books: updatedBooks
        })
      }
    )
  }
  render() {
    return (
      <div className="app">
        <div>
          <Route exact path='/'
            render={()=>(
              <div>
                <div className="list-books-title">
                  <div>
                    <h1>MyReads</h1>
                  </div>
                </div>
              <div>
                <BooksContents books={this.state.books} updateShelf={this.updateShelf} />
              </div>
              <Link to="/search" className="open-search"  /> 
            </div>
          )}
        />
      </div>
      <div>
        <Route exact path='/search'
          render={()=>(
            <div>
              <SearchBooks books={this.books} updateShelf={this.updateShelf} />
            </div>
          )}
        />
        
      </div>
      </div>
    )
  }
}

export default BooksApp
