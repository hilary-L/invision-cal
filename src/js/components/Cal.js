var React = require('react');
var moment = require('moment');
var Month = require('./Month');
var calendarStore = require('../stores/calendarStore');
var calendarActions = require('../actions/calendarActions');

var Cal = React.createClass({
	getInitialState: function() {
		return {
			month: calendarStore.getMonth(),
			year: calendarStore.getYear()
		}
	},
	componentWillMount: function() {

		var nowMonth = {};

		nowMonth.num = moment().month() + 1;
		nowMonth.name = moment().format('MMMM');

		this.setState({
			month: nowMonth
		})

	},
	componentDidMount: function() {
		calendarStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			month: calendarStore.getMonth()
		})
	},
	render: function() {
		return (
			<div>
				<Month month={this.state.month} year={this.state.year} />
			</div>
		)
	}
});

module.exports = Cal;