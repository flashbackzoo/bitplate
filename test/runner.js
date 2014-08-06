// Module dependencies
var requirejs = require("requirejs"),
	path = require("path"),
	async = require("async"),
	requireConfig = require("../app/config.js"),
	Window = require("./lib/window");

// Configue RequireJS
requirejs.config(requireConfig.options({
	baseUrl: __dirname + "/../app/",
	suppress: {
		nodeShim: true
	}
}));

// Create a Window object
global.window = new Window();

global.baseUrl = path.resolve("../app/js");

// The entry point of our test suite
describe("Boilerplate test suite", function () {
	it("Boilerplate test runner", function (done) {
		// Each function will execute one after the other. Callback is a reference
		// to the next function in the series. When all tests pass or an error is thrown,
		// the final callback is executed and the test suite returns.
		async.series({
			userModel: function (callback) {
				require("./specs/userModel");
				callback();
			}
		}, function (err, results) {
			done();
		});
	});
});
