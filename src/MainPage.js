import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';
class MainPage extends Component {
    render() {
        const { books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            section="Currently Reading"
                            shelf="currentlyReading"
                            books={books}
                            moveShelf = {this.props.moveShelf}
                        />
                        <BookShelf
                            section="Want to Read"
                            shelf="wantToRead"
                            books={books}
                            moveShelf = {this.props.moveShelf}
                        />
                        <BookShelf
                            section="Read"
                            shelf="read"
                            books={books}
                            moveShelf = {this.props.moveShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
    <Link className="close-search" to="/search">Add a book</Link>
</div>
            </div>
        )
    }
}

export default MainPage
