(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = window.jQuery;  // hack, couldn't get browserify to work with a global:jquery and then require('jquery')

// stupid variable height footer. The best solution is to have margin-bottom on body the same as the height of
// the footer. And then periodically check if the window has resized (debounced of course) and resize.
var setFooterSize = function() {
    var footer = $('.footer');
    $('body').css('margin-bottom', footer.height() + 5);
    footer.prev().children().last().css('margin-bottom', '10px');
};

window.didResize = false;
setFooterSize();

$(window).resize(function() {
    window.didResize = true;
});

setInterval(function() {
    if (window.didResize) {
        window.didResize = false;
        setFooterSize();
    }
}, 400);

},{}]},{},[1]);
