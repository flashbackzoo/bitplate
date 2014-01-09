define(["backbone"], function (Backbone) {
	"use strict";

	var UserModel = Backbone.Model.extend({
		defaults: {
			forename: null,
			surname: null
		},
		getFullName: function () {
			var fullName = null;

			if (this.get("forename") !== null && this.get("surname") !== null) {
				fullName = this.get("forename").toString();
				fullName += " " + this.get("surname").toString();
			}

			return fullName;
		}
	});

	return UserModel;
});