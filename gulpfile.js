const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')

gulp.task('default', ['watch'])

gulp.task('pug', () => {
  return gulp.src('pug/**/*.pug')
  .pipe(plumber())
  .pipe(pug({}))
  .pipe(gulp.dest('/'))
})

gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest('/css'))
})

gulp.task('watch', () => {
  gulp.watch('pug/**/*.pug', ['pug'])
  gulp.watch('scss/**/*.scss', ['sass'])
})
