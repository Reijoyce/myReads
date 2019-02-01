  import React, { Component } from 'react'
  
  export class ShelfChange extends Component {
    onChange = (event) => {
      this.props.updateShelf(this.props.book, event.target.value)
    }
    render() {
      return (
        <div>
          <div className="book-shelf-changer">
            <select value={this.props.shelf} onChange={this.onChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div> 
        </div>
      )
    }
  }
  
  export default ShelfChange
  