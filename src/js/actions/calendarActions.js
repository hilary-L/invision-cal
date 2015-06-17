var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var calendarActions = {
	updateMonth: function(update) {
		AppDispatcher.handleAction({
			actionType: appConstants.UPDATE_MONTH,
			data: update
		});
	},
	selectDay: function(index, day) {
		console.log(day);
		AppDispatcher.handleAction({
			actionType: appConstants.SELECT_DAY,
			data: {
				num: day.num,
				index: index,
				tasks: day.tasks,
				occasions: day.occasions
			}
		});
	}
};

module.exports = calendarActions;