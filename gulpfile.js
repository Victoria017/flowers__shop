'use strict';
 
var gulp = require('gulp');
//var sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const watchSass = require("gulp-watch-sass");
 
gulp.task("sass:watch", () => watchSass([
    "./scss/**/*.{scss,css}",
    "!./public/libs/**/*"
  ])
    .pipe(sass())
    .pipe(gulp.dest("./css")));

   