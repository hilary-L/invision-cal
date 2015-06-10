var React = require('react');
var Days = require('./Days');

var Weeks = React.createClass({
	render: function() {
		var weeks = this.props.weeks.map(function(week) {
			return (
					<div className="week-container">
						<Days days={week.days}/>
					</div>
			);
		});
		return (
			<div>
				{weeks}
			</div>
		);

	}
});

module.exports = Weeks;