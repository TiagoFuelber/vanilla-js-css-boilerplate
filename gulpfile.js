let gulp        = require('gulp');
let cleanCSS    = require('gulp-clean-css');
let rename      = require('gulp-rename');
let sourcemaps  = require('gulp-sourcemaps');
let concat      = require('gulp-concat');
let uglify      = require('gulp-uglify');

gulp.task('minify-css', () => {
    
    return gulp.src(['css/*.css'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({
            processImport: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'));
});

// gulp.task('uglify-js', () => {

//     return gulp.src(['modules/*.js'])
//         .pipe(sourcemaps.init())
//         .pipe(concat('default.js'))
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(uglify().on('error', e => console.log(e)))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('dist'));
// });

gulp.task('watch', function () {
    gulp.watch('css/*.css', ['minify-css']);
})

gulp.task('default', [
    'minify-css',
    // 'uglify-js', 
    'watch'
]);