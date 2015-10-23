// jscs:disable
module.exports = {
    //src dirs
    source: '_www',
    get build() { return this.source + this.jsDir; },
    dist: 'www',

    //assets
    // assetDir: ['/static', '/images', '/fonts', '/icon-fonts'],
    // assetGlob: '/**',
    // assetFiles: function assetFiles(baseRoot){ return this.assetDir.map(function(dirRoot){ return baseRoot + dirRoot + this.assetGlob;}, this); },

    //sass
    // sassDir: '/scss',
    // sassGlob: '/**/*.scss',
    // get sassFiles() { return this.sassDir  + this.sassGlob; },

    //css
    // cssDir: '/css',
    // cssGlob: '/**/*.css',
    // get cssFiles() { return this.cssDir + this.cssGlob; },

    //js
    jsDir: '/js',
    jsSource: '/_js',
    jsGlob: '/**/*.js',
    get jsFiles() { return this.source + this.jsSource + this.jsGlob; },

    //misc
    get jsEntryPoints() { return this.source + this.jsSource + '/main.js'; },
    cssPath: '/css/'
};
