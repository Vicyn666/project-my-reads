import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
class SearchPage extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    checkShelf = (book) => {
      const shelf = this.props.books.find((books) => books.id === book.id)
      book.shelf = shelf ? shelf.shelf : book.shelf = 'none'
      return book
    }

    makeSearchBooks = (query) => {
      if (query === "")
        {
          this.setState({searchedBooks: []})
        }
        else
        {
        BooksAPI.search(query.trim()).then((searchedBooks) => {

          if (Array.isArray(searchedBooks)) {

            searchedBooks = searchedBooks.map ((book) => {
              return this.checkShelf(book)
            }
          )
            this.setState({ searchedBooks: searchedBooks })
            }


            else {
              this.setState({searchedBooks:[]})
            }

        })
    }
  }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.makeSearchBooks(query)
    }

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                          {
                            this.state.searchedBooks.map(searchedBook => {
                              return (
                              <li key={searchedBook.id}>
                              <Book
                               book={searchedBook}
                               moveShelf = {this.props.moveShelf}
                               />
                              </li>
                            )
                            }
                          )
                          }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
