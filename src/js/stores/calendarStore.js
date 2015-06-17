var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');

var CHANGE_EVENT = 'change';

var _store = {
	moment: {
		moment: '',
		num: 6,
		name: 'June',
		year: '2015'
	},
	selectedDay: {
		num: null,
		index: null,
		tasks: [],
		occasions: []
	}
};

var selectDay = function(data) {
	_store.selectedDay = {
		num: data.num,
		index: data.index,
		tasks: data.tasks,
		occasions: data.occasions
	}
};

var updateMonth = function(month) {

	var newNum = _store.moment.num + month;

	month -= 1;
	var newTime = _store.moment.num + month;

	_store.moment.num = newNum;
	_store.moment.name = moment(_store.moment.moment).month(newTime).format('MMMM');
	_store.moment.year = moment(_store.moment.moment).month(newTime).format('YYYY');

	_store.moment.moment = moment(
									{
										y: _store.moment.year,
										M: _store.moment.num

									});

};

var calendarStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListender(CHANGE_EVENT, cb);
	},
	getMoment: function() {
		return _store.moment;
	},
	getSelected: function() {
		return _store.selectedDay;
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.UPDATE_MONTH:
			updateMonth(action.data);
			calendarStore.emit(CHANGE_EVENT);
			break;
		case appConstants.SELECT_DAY:
			selectDay(action.data);
			calendarStore.emit(CHANGE_EVENT);
		default:
			return true;
	}
});

module.exports = calendarStore;