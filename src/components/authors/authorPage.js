"use strict";

// This is our smart component that deos the lifting; A controller view
// Not that it uses the LifeCycle Methods of getInitialState and componentDidMount

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({

	// Get initial state with a returned empty array
	getInitialState: function() {
		return {

			authors: []

		};
	},

	// This gets data from the API
	componentDidMount: function() {

			if (this.isMounted()) {
				this.setState({ authors: AuthorApi.getAllAuthors() }); //AuthorApi object has the getAllAuthors method in authorAPI.js
			}
	},

	render: function() {

		return (

			<div>
				<h1>Authors</h1>
				<AuthorList authors={this.state.authors} />

			</div>

		);
	}
});

module.exports = AuthorPage;