import React, { Component } from 'react'
import Book from './Book'
class BookShelf extends Component {
    render() {
        const { section, shelf, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{section}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter(book => book.shelf === shelf)
                            .map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        moveShelf = {this.props.moveShelf}
                                        shelf= {book.shelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
