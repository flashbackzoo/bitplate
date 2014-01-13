require(["config"], function () {
	require.config(window.requireConfig.options());

	require(["app",	"router"], function (app, Router) {
		app.router = new Router();
		Backbone.history.start({ pushState: true });
	});
});