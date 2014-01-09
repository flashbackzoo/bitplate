/**
 *	Returns a Window constructor
 *
 *	@param markup
 *	@param level
 *	@param options
 *
 *	For info on params see https://github.com/tmpvar/jsdom#for-the-hardcore
**/

var jsdom = require("jsdom").jsdom;

function Window(markup, level, options) {
	var markup = markup || "<html><body></body></html>",
		level = level || null, // Will default to level3
		options = options || {};

	var doc = jsdom(markup, level, options);

	return doc.parentWindow;
}

module.exports = Window;