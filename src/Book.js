import React, { Component } from 'react'
import ShelfChange from './ShelfChange'
export class Book extends Component {
  render() {
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.img})` }}></div>
              <ShelfChange book={this.props.book} shelf={this.props.shelf} updateShelf={this.props.updateShelf}/>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author ? this.props.author.join(', ') : ""}</div>
          </div>
        </li>
      </div>
    )
  }
}

export default Book
