var React = require('react');

var Month = React.createClass({
	render: function() {
		return (
			<div className="month-header">
				<h2>{this.props.month.name}</h2>
			</div>
		)
	}
});

module.exports = Month;