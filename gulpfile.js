var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');

gulp.task('styles', function() {
    var sassOptions = {
        outputStyle: 'compressed'
    }
    return gulp.src('static/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css/'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js', 'static/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watch', function() {
    gulp.watch('static/scss/**/*.scss', ['styles']);
    gulp.watch(['src/**/*.js', 'static/**/*.js'], ['scripts']);
});

gulp.task('default', ['watch']);
