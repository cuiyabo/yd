$(function() {
    $("img.lazy").lazyload();
});
$("img.lazy").lazyload({
    threshold : 200
});
$("img.lazy").lazyload({
    event : "click"
});