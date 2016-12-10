import $ from 'jquery';

// Parallax factor (lower = more intense, higher = less intense).
const parallaxFactor = 20;

$(window).on('scroll', function() {
    $('.hero').css('background-position', 'left ' + (-1 * (parseInt($(window).scrollTop()) / parallaxFactor)) + 'px');
});
