var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
	weeks: [
		{
			days: [1, 2, 3, 4, 5, 6, 7]
		},
		{
			days: [8, 9, 10, 11, 12, 13, 14]
		},
		{
			days: [15, 16, 17, 18, 19, 20, 21]
		},
		{
			days: [22, 23, 24, 25, 26, 27, 28]
		},
		{
			days: [29, 30, 31]
		}
	],
	month: {
		num: 6,
		name: 'June'
	}
};

var calendarStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListender(CHANGE_EVENT, cb);
	},
	getWeeks: function() {
		return _store.weeks;
	},
	getMonth: function() {
		return _store.month;
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		default:
			return true;
	}
});

module.exports = calendarStore;