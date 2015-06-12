var React = require('react');
var Cal = require('./components/Cal');

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<Cal />
				</div>
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));