var width = window.innerWidth;
var orientation = window.orientation;

function changeOrientation() {
    if (document.fullscreenElement)
    {
        var child = document.getElementById("slide-ad");
        var parent = document.getElementById("plot");
        parent.removeChild(child);
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } 
    else
    {
        console.log('Leaving full-screen mode.');
        $(".plot").html('<div id="slide-ad" class="slide-ad"> '+
        '<div id="VideoAdSlide1" class="swiper-container">' +
            '<div class="news-wrapper swiper-wrapper">' +
                '<script type="text/javascript">' +
                    "getAd('VideoAdSlide1');" +
                '</script>' +
            '</div>' +
        '</div>' +
        '<div class="pagination-news"></div>' +
        '</div>');
    }
}
window.addEventListener("orientationchange", changeOrientation, false);
document.addEventListener("onresize", changeOrientation, false);