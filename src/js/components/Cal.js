var React = require('react');
var moment = require('moment');
var Month = require('./Month');
var TaskList = require('./TaskList');
var calendarStore = require('../stores/calendarStore');
var calendarActions = require('../actions/calendarActions');

var Cal = React.createClass({
	getInitialState: function() {
		return ({
			moment: calendarStore.getMoment(),
			selectedDay: calendarStore.getSelected()
		})
	},
	componentWillMount: function() {

		var nowMoment = {};

		nowMoment.moment = moment();
		nowMoment.num = moment().month() + 1;
		nowMoment.name = moment().format('MMMM');
		nowMoment.year = moment().format('YYYY');

		this.setState({
			moment: nowMoment,
			selectedDay: {
				index: moment().date(),
				num: moment().date(),
				tasks: [],
				occasions: []
			}
		})

	},
	componentDidMount: function() {
		calendarStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			moment: calendarStore.getMoment(),
			selectedDay: calendarStore.getSelected()
		})
	},
	render: function() {
		return (
			<div>
				<Month moment={this.state.moment} selectedDay={this.state.selectedDay} />
				<TaskList month={this.state.moment.name} selectedDay={this.state.selectedDay}/>
			</div>
		)
	}
});

module.exports = Cal;