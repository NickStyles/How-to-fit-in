(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };
$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img-12').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-474.jpg' : 'images/logo-white-316.jpg') : 'images/logo-white-158.jpg');
$('.img-13').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/head-image-effect-2328.jpg' : 'images/head-image-effect-1552.jpg') : 'images/head-image-effect-776.jpg');
$('.img-14').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/unsplash-tablet-690032_1280-1173.jpg' : 'images/unsplash-tablet-690032_1280-782.jpg') : 'images/unsplash-tablet-690032_1280-391.jpg');
$('.img-15').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pezibear-person-818448_1280-687.jpg' : 'images/pezibear-person-818448_1280-458.jpg') : 'images/pezibear-person-818448_1280-229.jpg');
$('.img-16').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/andi_graf-woman-169286_1920-1275.jpg' : 'images/andi_graf-woman-169286_1920-850.jpg') : 'images/andi_graf-woman-169286_1920-425.jpg');
$('.img-17').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/roman2557-handbags-507822_1920-807.jpg' : 'images/roman2557-handbags-507822_1920-538.jpg') : 'images/roman2557-handbags-507822_1920-269.jpg');
} else {
$('.img-12').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-white-159.jpg' : 'images/logo-white-106.jpg') : 'images/logo-white-53.jpg');
$('.img-13').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/head-image-effect-774.jpg' : 'images/head-image-effect-516.jpg') : 'images/head-image-effect-258.jpg');
$('.img-14').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/unsplash-tablet-690032_1280-393.jpg' : 'images/unsplash-tablet-690032_1280-262.jpg') : 'images/unsplash-tablet-690032_1280-131.jpg');
$('.img-15').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pezibear-person-818448_1280-228.jpg' : 'images/pezibear-person-818448_1280-152.jpg') : 'images/pezibear-person-818448_1280-76.jpg');
$('.img-16').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/andi_graf-woman-169286_1920-423.jpg' : 'images/andi_graf-woman-169286_1920-282.jpg') : 'images/andi_graf-woman-169286_1920-141.jpg');
$('.img-17').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/roman2557-handbags-507822_1920-270.jpg' : 'images/roman2557-handbags-507822_1920-180.jpg') : 'images/roman2557-handbags-507822_1920-90.jpg');
}
};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel|Jura|EB+Garamond&amp;subset=all'></link>"));
}initMenu($('#menu-1'));

});