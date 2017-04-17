var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

// compile sass
gulp.task('style', function () {
    log('Compiling SASS to CSS...');

    return gulp
        .src('./src/sass/**/*.scss')
        .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']}))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src'));
});

// watch the changes
gulp.task('watch', function () {
    log('Gulp is watching for changes');

    gulp.watch('./src/sass/**/*.scss', ['style']);
});

// helpers
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
