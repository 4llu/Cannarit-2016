var gulp = require("gulp");
var sass = require("gulp-sass");
var neat = require("node-neat");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");

var rootdir = "resources";

// Default
gulp.task("default", ["watch"]);

// Sass and autoprefixer
gulp.task("style", function () {
    return gulp.src(rootdir + "/styles/sass/master.scss")
        // Sass
        .pipe(sass({
            includePaths: require("node-neat").includePaths,
            style: "compressed"
        }).on("error", sass.logError))
        // Prefixes
        .pipe(autoprefixer({
            browsers: ["> 1%"],
            cascade: false
        }))
        .pipe(gulp.dest(rootdir + "/styles"));
});

// Production
gulp.task("production", ["style"], function() {
    return gulp.src(rootdir + "/styles/master.css")
    // Minify
        .pipe(cleanCSS({
            compatibility: "ie8"
        }))
        .pipe(gulp.dest(rootdir + "/styles"));
});

// watch
gulp.task("watch", function() {
    gulp.watch(rootdir + "/styles/sass/**/*.scss", ["production"]);
});
