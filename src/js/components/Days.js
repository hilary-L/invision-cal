var Days = React.createClass({
	render: function() {
		var days = this.props.days.map(function(day) {
			return (<div className="day">
						<span>{day}</span>
					</div>
			)
		});
		return(
			<div>
				{days}
			</div>
		);
	}
});

module.exports = Days;