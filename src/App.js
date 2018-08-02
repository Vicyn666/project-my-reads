import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

	state = {
		books: []
	}

	componentDidMount(){
		BooksAPI.getAll().then((books) => {
				this.setState( { books } )
		  })
	}

  render() {
    return (
      <div className="app">
	<Route path = "/search" component = {() => (
          <SearchBooks/>)}/>
        <Route exact path = '/' component = {() => (
          <ListBooks/>
	)}/>
      </div>
    )
  }
}

export default BooksApp;
