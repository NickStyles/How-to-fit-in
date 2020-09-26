(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };
$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img-6').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-474.jpg' : 'images/logo-white-316.jpg') : 'images/logo-white-158.jpg');
$('.img-7').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/main-image-783.jpg' : 'images/main-image-522.jpg') : 'images/main-image-261-2.jpg');
$('.img-8').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/head-image-effect-780.jpg' : 'images/head-image-effect-520.jpg') : 'images/head-image-effect-260.jpg');
$('.img-9').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/beach-unsplash-bigger-head-840.jpg' : 'images/beach-unsplash-bigger-head-560.jpg') : 'images/beach-unsplash-bigger-head-280.jpg');
} else {
$('.img-6').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-159.jpg' : 'images/logo-white-106.jpg') : 'images/logo-white-53.jpg');
$('.img-7').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/main-image-261.jpg' : 'images/main-image-174.jpg') : 'images/main-image-87.jpg');
$('.img-8').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/head-image-effect-261.jpg' : 'images/head-image-effect-174.jpg') : 'images/head-image-effect-87.jpg');
$('.img-9').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/beach-unsplash-bigger-head-279.jpg' : 'images/beach-unsplash-bigger-head-186.jpg') : 'images/beach-unsplash-bigger-head-93.jpg');
}
};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel|Jura|EB+Garamond&amp;subset=all'></link>"));
}initMenu($('#menu-1'));

});