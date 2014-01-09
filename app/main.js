require(["config"], function () {
	require(["app",	"router"], function (app, Router) {
		app.router = new Router();
		Backbone.history.start({ pushState: true });
	});
});