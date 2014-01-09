define([
	"underscore",
	"jquery",
	"backbone"
],
function (
	_,
	$,
	Backbone
) {
	"use strict";

	var Router = Backbone.Router.extend({
		routes: {
			"*actions": "index"
		},

		index: function () {
			// Load some view
		}
	});

	return Router;
});