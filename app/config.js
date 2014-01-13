// Use this configuration for the client-side application and unit tests.
(function (exports) {
	Config = function (options) {
		// Environment specific options can be passed in.
		// See "/test/runner.js:9" for an example.
		if (typeof options === "object") {
			for (key in options) {
				this[key] = options[key];
			}
		};

		// Base configuration
		this.paths = {
			jquery: "vendor/jquery.min",
		    underscore: "vendor/underscore-min",
		    backbone: "vendor/backbone-min"
		};
		this.shim = {
			backbone: {
				deps: ["underscore", "jquery"],
				exports: "Backbone"
			}
		};
	};

	exports.options = function (options) {
		return new Config(options);
	};

}(typeof exports === "undefined" ? this["requireConfig"] = {} : exports));