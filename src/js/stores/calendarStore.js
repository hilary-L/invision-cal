var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
	month: {
		num: 6,
		name: 'June'
	},
	year: 2015
};

var updateMonth = function(month) {
	_store.month.num = month.num;
	_store.month.name = month.name;
};

var calendarStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListender(CHANGE_EVENT, cb);
	},
	getMonth: function() {
		return _store.month;
	},
	getYear: function() {
		return _store.year;
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.UPDATE_MONTH:
			updateMonth(action.data);
			calendarStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = calendarStore;