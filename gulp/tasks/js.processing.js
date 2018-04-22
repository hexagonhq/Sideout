'use strict';

module.exports = function() {
	$.gulp.task('js:processing', function() {
			return $.gulp.src($.path.app)
			.pipe($.gp.uglify())
			.pipe($.gp.rename({
				suffix: '.min'
			}))
			.pipe($.gulp.dest($.config.root));
	});
};