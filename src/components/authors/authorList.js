"use strict";

// This is our dumb component that accepts props

var React = require('react');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	render: function() {

		// We create a new row with the author data after iterating

		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}> // Key allows React to keep proper state, no thrashing
					<td><a href={"/#authors/" + author.id}>{author.id}</a></td>// We used a unique key from the DB: id
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (

			<div>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>

			</div>

		);
	}
});

module.exports = AuthorList;