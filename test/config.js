module.exports = {
    suppress: {
		nodeShim: true
	},

	baseUrl: __dirname + "/../app/",

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
};