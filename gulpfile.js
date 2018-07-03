var gulp =require('gulp'),
sass=require('gulp-sass'),
browserSync = require('browser-sync');

gulp.task('serve', function(){
    browserSync.init({
    	// proxy: 'http://localhost:81',
    	server: {  
            baseDir: "./" 
        }, 
    	files: ['**'],
    	port: 3000,
    	notify: false
    });

    gulp.watch("src/lt-auto/scss/*.scss", ['sass']);
    gulp.watch("./").on('change', browserSync.reload);
});
gulp.task('sass', function() {
	return gulp.src('src/lt-auto/scss/*.scss').pipe(sass()).pipe(gulp.dest("src/lt-auto/css")).pipe(browserSync.stream());
});
gulp.task('default', ['serve']);
