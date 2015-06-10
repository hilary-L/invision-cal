var React = require('react');
var Weeks = require('./Weeks');
var Month = require('./Month');
var calendarStore = require('../stores/calendarStore');
var calendarActions = require('../actions/calendarActions');

var Calendar = React.createClass({
	getInitialState: function() {
		return {
			weeks: calendarStore.getWeeks(),
			month: calendarStore.getMonth()
		}
	},
	componentDidMount: function() {
		calendarStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			weeks: calendarStore.getWeeks()
		})
	},
	render: function() {
		return (
			<div>
				<Month month={this.state.month} />
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
				<Weeks weeks={this.state.weeks} />
			</div>
		)
	}
});

module.exports = Calendar;