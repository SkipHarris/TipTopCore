'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task("sass", function () {
    return gulp.src('wwwroot/css/sass/TipTopMain.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('watch-sass', function () {
    gulp.watch(paths.scss, ['sass']);
})

gulp.task('minify-css', function () {
    return gulp.src('wwwroot/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('wwwroot/cssmin'));
});

//gulp.watch('wwwroot/css/sass/**/*.scss', ['sass']);


//var gulp = require('gulp');
//var sass = require("gulp-sass");
//var paths = {
//    webroot: "./wwwroot/"
//}
//paths.scss = paths.webroot + "css/**/*.scss";
//gulp.task('sass', function () {
//    gulp.src(paths.scss)
//        .pipe(sass())
//        .pipe(gulp.dest(paths.webroot + "css"));
//});


