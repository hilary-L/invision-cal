var React = require('react');
var moment = require('moment');
var Days = require('./Days');
var Calendar = require('node-calendar');

var Month = React.createClass({
	render: function() {

		var calendar = new Calendar.Calendar(Calendar.SUNDAY);

		var days = calendar.itermonthdates(this.props.year, this.props.month.num).map(function(item) {
			return(moment(item).format('D'))
		});

		console.log(days);

		return (
			<div>
				<div className="month-header">
					<h2>{this.props.month.name}</h2>
				</div>
				<div id="days-header">
						<ul>
							<li>Sunday</li>
							<li>Monday</li>
							<li>Tuesday</li>
							<li>Wednesday</li>
							<li>Thursday</li>
							<li>Friday</li>
							<li>Saturday</li>
						</ul>
				</div>
				<Days days={days} />
			</div>
		)
	}
});

module.exports = Month;