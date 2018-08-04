import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css'

class BooksApp extends Component {
    state = {
        myBooks: [],
    }


    componentDidMount() {
      this.refresh()
    }


    refresh() {
        BooksAPI.getAll().then((books) => {
            this.setState({ myBooks: books })
        })
    }


    moveShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(()=> this.refresh())
    }

    render() {
        const { myBooks } = this.state;

        return (
            <div className="app">
                <div className="list-books-title">
                    <h1><a href="http://localhost:3000/">MyReads</a></h1>
                </div>
                <Route exact path="/" render={() => (
                    <MainPage
                        books={myBooks}
                        moveShelf ={this.moveShelf}
                    />
                )} />
                <Route path="/search" render={() => (
                    <SearchPage
                        books={myBooks}
                        moveShelf ={this.moveShelf}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp
