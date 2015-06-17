var React = require('react');
var Tasks = require('./Tasks');
var Occasions = require('./Occasions');

var TaskList = React.createClass({
	render: function() {

		console.log(this.props.selectedDay);

		return (
			<div className="task-list">
				<div className="task-list-header">
					<h2>List for {this.props.month} {this.props.selectedDay.num}</h2>
				</div>
				<div className="occasions">
					<h2>Occasions</h2>
					<Occasions occasions={this.props.selectedDay.occasions} />
				</div>
				<div className="tasks">
					<h2>Tasks</h2>
					<span className="legend task">Task Filled</span><span className="legend task help">Help Needed</span>
					<Tasks tasks={this.props.selectedDay.tasks} />
				</div>
			</div>
		)

	}
})

module.exports = TaskList;