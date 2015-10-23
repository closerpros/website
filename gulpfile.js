/*eslint-disable */
// jscs:disable
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var clean = require('del');
var notify = require('gulp-notify');
var browserify = require('browserify');
var uglifyify = require('uglifyify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var harp = require('harp');
var ghpages = require('gulp-gh-pages');

var paths = require('./gulp-paths.js');

gulp.task('default', ['build-js', 'serve'], function() {
    livereload.listen();
    // gulp.watch(paths.assetFiles(paths.source), ['build-assets']);
    // gulp.watch(config.clientConfigPath, ['build-config']);
    gulp.watch(paths.jsFiles, ['build-js']);

    gulp.watch(paths.source + '/**/*', function(event) {
        livereload.changed(event);
    });
});

gulp.task('clean', function(cb) {
    clean([paths.dist, paths.build], cb);
});

function buildBundle(b) {
    return b.bundle()
            .on('error', notify.onError(function(error) {
                return 'JS Bundling Error: ' + error.message;
            }))
            .on('error', function() {this.emit('end'); })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(paths.source + paths.jsDir))
            .pipe(notify('JS Bundled Successfully!'));
}

gulp.task('build-js', function() {
    var b = browserify(); //{debug: true, cache: {}, packageCache: {}});
    // b.transform(browserifyShim);
    b = watchify(b);
    b.add(paths.jsEntryPoints);
    // FIXME
    if (false) b.transform({global: true}, uglifyify);
    b.on('update', function() {
        return buildBundle(b);
    });

    return buildBundle(b);
});

/**
 * Serve the Harp Site
 */
gulp.task('serve', function(done) {
    harp.server(paths.source + '/', {
        port: 9000
    }, done);
});

/**
 * Build the Harp Site
 */
gulp.task('harp-compile', function(done) {
    harp.compile(paths.source, '../' + paths.dist, done);
});

/**
* Push the site to GH Pages
*/
gulp.task('deploy', function(done) {
    return gulp.src(paths.dist + '/**/*').pipe(ghpages(done));
});
