module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		clean: ["app/vendor/"],

		copy: {
			default: {
				files: [
					{ src: "bower_components/backbone/backbone-min.js", dest: "app/vendor/backbone-min.js" },
					{ src: "bower_components/backbone/backbone-min.map", dest: "app/vendor/backbone-min.map" },
					{ src: "bower_components/jquery/jquery.min.js", dest: "app/vendor/jquery.min.js" },
					{ src: "bower_components/jquery/jquery.min.map", dest: "app/vendor/jquery.min.map" },
					{ src: "bower_components/underscore/underscore-min.js", dest: "app/vendor/underscore-min.js" },
					{ src: "bower_components/underscore/underscore-min.map", dest: "app/vendor/underscore-min.map" },
					{ src: "bower_components/requirejs/require.js", dest: "app/vendor/require.js" }
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["clean", "copy"]);
};