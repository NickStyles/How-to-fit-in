(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };
$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img-18').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-474.jpg' : 'images/logo-white-316.jpg') : 'images/logo-white-158.jpg');
$('.img-19').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/beach-unsplash-bigger-head-2349.jpg' : 'images/beach-unsplash-bigger-head-1566.jpg') : 'images/beach-unsplash-bigger-head-783-2.jpg');
} else {
$('.img-18').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-159.jpg' : 'images/logo-white-106.jpg') : 'images/logo-white-53.jpg');
$('.img-19').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/beach-unsplash-bigger-head-783.jpg' : 'images/beach-unsplash-bigger-head-522.jpg') : 'images/beach-unsplash-bigger-head-261.jpg');
}
};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel|Jura&amp;subset=all'></link>"));
}initMenu($('#menu-1'));

});