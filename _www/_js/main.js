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
