var gulp          = require('gulp'),
    browserify    = require('browserify'),
    source        = require('vinyl-source-stream'),
    less          = require('gulp-less'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('browserify', function() {
  var bundler = browserify('./js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function() {
  return gulp.src('images/**.*')
    .pipe(gulp.dest('build/img'));
})

gulp.task('css', function() {
  return gulp.src('css/**.css')
    .pipe(gulp.dest('build'));
});

gulp.task('less', ['css'], function() {
  return gulp.src('./css/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', function(error) {
        console.log(error.message);
    })
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('./css/**/*.less', ['less']);
  gulp.watch('./js/**/*.js', ['browserify']);
});

gulp.task('build', ['browserify', 'less', 'images'], function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['build']);
