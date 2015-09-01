var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
    var sassOptions = {
        outputStyle: 'compressed'
    }
    gulp.src('static/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch', function() {
    gulp.watch('static/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);
