"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>This app uses the following tech:</p>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Browserify</li>
					<li>BootStrap</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;