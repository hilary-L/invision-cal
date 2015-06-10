var React = require('react');
var Calendar = require('./components/Calendar');

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<Calendar />
				</div>
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));