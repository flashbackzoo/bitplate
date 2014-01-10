# Bitplate

This is a boilerplate for unit testing backbone applications in a continuous integration environment.

## Requirements

You will need [Node.js](http://nodejs.org/) and [Mocha](http://visionmedia.github.io/mocha/) installed on your continuous integration environment.

## Installation

Once you have Node and Mocha installed, clone Bitplate:

```
git clone git@github.com:flashbackzoo/bitplate.git
```

Install the dependencies:
```
npm install
```

Set up the Backbone app:
```
bower install && grunt
```

## Running tests

Run tests from the bitplate/test directory with:
```
make test
```

## Caveats

Here are some things to watch out for.

### Using third party plugins

If you're using third party libraries that depend on jQuery (jQuery plugins) you may have to [convert the plugin to AMD](http://stackoverflow.com/questions/10918063/how-to-make-a-jquery-plugin-loadable-with-requirejs) and pass in jQuery by dependency reference.

For example a plugin might be structured like this:

```javascript
(function (window, $) {
	// Plugin code...
})(this, jQuery);
```

In the above example the plugin passes in `this` (a reference to `window`) and the jQuery object. In Node.js the plugin is loaded inside a closure which means `this` does not refer to `window` (Node.js has no concept of window or DOM anyway) and `jQuery` is undefined.

The solution is:

```javascript
define([jquery], function ($) {
	// Plugin code...
});
```

Now jQuery is loaded by dependency reference. `window` is not required because in the test runner we assign a global jsdom object to `window`.

### Using singletons 

Testing singletons can be problematic. Because Node.js uses a different instance of RequireJS to the front-end application, a different instance of your singleton can be returned.

## TODO

* Make the Backbone and Node.js use the same instance of RequireJS.

## Misc

[Mocha TeamCity Reporter](https://github.com/travisjeffery/mocha-teamcity-reporter)