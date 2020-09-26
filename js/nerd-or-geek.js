(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };
$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img-10').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-474.jpg' : 'images/logo-white-316.jpg') : 'images/logo-white-158.jpg');
$('.img-11').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/main-image-2097.jpg' : 'images/main-image-1398.jpg') : 'images/main-image-699-2.jpg');
} else {
$('.img-10').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-159.jpg' : 'images/logo-white-106.jpg') : 'images/logo-white-53.jpg');
$('.img-11').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/main-image-699.jpg' : 'images/main-image-466.jpg') : 'images/main-image-233.jpg');
}
};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel&amp;subset=all'></link>"));
}initMenu($('#menu-1'));

});