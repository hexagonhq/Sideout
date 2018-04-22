'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config.js'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	rimraf: require('rimraf'),
	pump: require('pump'),
	isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development',
	gp: require('gulp-load-plugins')({
		rename: {
			'gulp-uglify': 'uglify',
			'gulp-rename': 'rename'
		}
	})
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'js:processing'
	)
));