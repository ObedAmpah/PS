$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage2');
var About = require('./components/aboutPage');
var Header = require('./components/header');

var App = React.createClass({
	render: function() {
		return (

			<div>
				<Header />
				<Home />
			</div>

		);
	}
});

React.render( <App />, document.getElementById('app') );