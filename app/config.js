require.config({
	paths: {
		jquery: "vendor/jquery.min",
        underscore: "vendor/underscore-min",
        backbone: "vendor/backbone-min"
	},

	shim: {
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});