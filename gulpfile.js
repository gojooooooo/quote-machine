var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var base= "./"; // Display directory into browser


gulp.task('BrowserSyncOn',['sass'], function(){
    browserSync.init({
        server: {
            baseDir: base,
        directory:true
        }
        });
        gulp.watch(base + "*.scss", ['sass']);
        gulp.watch(base + "*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(base + "*.scss")
        .pipe(sass())
        .pipe(gulp.dest(base))
        .pipe(browserSync.stream());
});

gulp.task('default', ['BrowserSyncOn']);
