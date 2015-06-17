var React = require('react');
var moment = require('moment-holidays');
var Days = require('./Days');
var Calendar = require('node-calendar');

var Month = React.createClass({
	render: function() {

		var calendar = new Calendar.Calendar(Calendar.SUNDAY);

		var days = calendar.itermonthdates(this.props.moment.year, this.props.moment.num).map(function(item) {
			return(
				{
				num: moment(item).format('D'),
				holiday: moment(item).holiday(),
				
				}
			)
		});

		var tasks = days.map(function(day, index) {
			if (index % 2 == 0) {
				return( {
					num: day.num,
					holiday: day.holiday,
					occasions: [],
					tasks: [
						{
							task: 'Ride to hockey',
							help: false
						}
					]
				})
			}
			else if (index % 3 == 0 ) {
				return( {
					num: day.num,
					holiday: day.holiday,
					occasions: [
						{
							occasion: 'Birthday'
						}
					],
					tasks: [
						{
							task: 'Walk the dogs',
							help: false

						},
						{
							task: 'Dinner for tonight',
							help: true
						}
					]
				})

			}
			else {
				return ( {
					num: day.num,
					holiday: day.holiday,
					occasions: [],
					tasks: [
						{
							task: 'Doctor appt',
							help: false
						},
						{
							task: 'Shovel snow',
							help: true
						}
					]

				})
				
			}
		});

		return (
			<div className="month">
				<div className="month-header">
					<span className="left">&#171;</span><h2>{this.props.moment.name} &#183; {this.props.moment.year}</h2><span className="right">&#187;</span>
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
				<Days days={tasks} selectedDay={this.props.selectedDay} />
			</div>
		)
	}
});

module.exports = Month;