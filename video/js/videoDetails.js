
/**
 * Created by qhao on 2015/4/22.
 */
var idVideo;
var publ;
$(function(){
    videoDetails(); /*Cargar datos de página*/
});

/**
 * videoDetails() 
Mostrar detalles de noticias
 */
function videoDetails(){
    var url = window.location.href;
    var ids = url.split("?")[1].split("&");

    //alert(ids);
    if(ids.length < 3)
    {
        alert("La página de noticias no se pudo mostrar correctamente y los parámetros de solicitud eran incorrectos.");
    }
    else
    {
            //alert(ids);
    var mid = ids[0].split("=")[1];
        var itemId = ids[1].split("=")[1];
        var docid = ids[2].split("=")[1];
        loadVideo(mid,itemId,docid);
    }

    //REdirigir al home
    $(".back_btn").click(function(){
        window.location.href = "../../homePage/web/homePage.html"+"?id="+Math.random()+"&?phone="+obtenerCookie()
    })
    
}


/**
 * loadVideo(itemId,docid) 加载视频
 * 参数说明: itemId 是新闻上级菜单编号 ，docid 新闻编号
 */
function loadVideo(mid,itemId,docid,pub){
    var request = $.ajax({
        url: "../data/" + mid,
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000
    });

    request.success(function(data) {//得到新闻数据
        if(data[itemId]){
            $.each(data[itemId], function(index,video){
                if(video.id == docid ){
                    //视频信息属性
                    var title = video.title;///视频标题
                    var id = video.id;//视频id
                    var source = video.src;//该视频来源
                    var plot = video.plot;//正文内容
                    var publ = video.pub;//variable publicidad

                    $(".plot").html(plot + '<div id="slide-ad" class="slide-ad"> '+
                    '<div id="VideoAdSlide1" class="swiper-container">' +
                        '<div class="news-wrapper swiper-wrapper">' +
                            '<script type="text/javascript">' +
                                "getAd('VideoAdSlide1');" +
                            '</script>' +
                        '</div>' +
                    '</div>' +
                    '<div class="pagination-news"></div>' +
                '</div>');
                    var VideoTitle = '<div class="video">' + title + '</div>';

                    var VideoShow = '<video id="'+id +'"> class="video_title" src="' + source
                        + '"  controls controlsList="nodownload" width="100%" muted autoplay></video>';

                    $(".header-center").append(VideoTitle);
                    $(".video_show").append(VideoShow);


                    $('video').bind('contextmenu',function() { return false; });

                    videoUploadData(docid,title,itemId);
                    return false;
                }
            });
        }
        else{
            $.each(data, function(index,video){
                if(video.id == docid ){
                    //视频信息属性

	            //console.log('video:', video);
                    var title = video.title;///视频标题
                    var id = video.id;//视频id
                    var source = video.src;//该视频来源
                    var plot = video.plot;//正文内容
                    idVideo = id;
                    publ = video.pub;

					console.log('publ', publ);
                    $(".plot").html(plot +'<div id="slide-ad" class="slide-ad"> '+
                    '<div id="VideoAdSlide1" class="swiper-container">' +
                        '<div class="news-wrapper swiper-wrapper">' +
                            '<script type="text/javascript">' +
                                "getAd('VideoAdSlide1');" +
                            '</script>' +
                        '</div>' +
                    '</div>' +
                    '<div class="pagination-news"></div>' +
                '</div>');
                    var VideoTitle = '<div class="video">' + title + '</div>';

                    var VideoShow = '<video id="'+id +'" class="video_title" src="' + source
                        + '"  controls controlsList="nodownload" width="100%" muted autoplay></video>';

                    $(".header-center").append(VideoTitle);
                    $(".video_show").append(VideoShow);


                    $('video').bind('contextmenu',function() { return false; });

                    videoUploadData(docid,title,itemId);
                    return false;
                }
            });
        }

    });

    request.complete(function(){
    loadPreroll();
    
    });

    request.error(function(){
        console.dir("Unable to obtain resources");
    });

};

    

function videoUploadData(id,title,resType){
    //视频上报
    $.hongdian.uploadData({
        resId:id,
        resName:title,
        resType:resType,
        view:1,
        click:1,
        flag:0
    }, function() {

    });

};

function loadPreroll(){
	//console.log("publ_2:", publ);
    var adManager = function () {
    //console.log("publ_3:", publ);
    var vid = document.getElementById(idVideo);
    var adSrc = publ;
    var src;

    console.log(vid);
    console.log(adSrc);
    
    var adEnded = function () {
        vid.removeEventListener("ended", adEnded, false);
        if(  $("#"+idVideo).prop("controls", true))
        {
            $("#"+idVideo).prop("controls", true)
        }
        vid.src = src;
        vid.load();
        vid.play();
        vid.muted = false;
        $(vid).get(0).play()
        $('<style>video::-webkit-media-controls-play-button{display:block}</style>').appendTo('head');
        $('<style>video::-webkit-media-controls-current-time-display{margin-left:0px}</style>').appendTo('head');
        $('<style>video::-webkit-media-controls-mute-button{display:block}</style>').appendTo('head');
        $('<style>video::-webkit-media-controls-volume-slider{display:block}</style>').appendTo('head');
        $('<style>video::-webkit-media-controls-mute-button{display:block}</style>').appendTo('head');
        $(window).keypress(function(e) {
            var video = document.getElementById("id");
            if (e.which == 32) {
            if (video.paused == true)
                video.play();
            else
                video.pause();
            }
        });
        $("#"+idVideo).click(function(){this.paused?this.play():this.pause();});
    }
    return {
        init: function () {
            src = vid.src;
            vid.src = adSrc;
            vid.load();
            vid.addEventListener("ended", adEnded, false);
            $('<style>video::-webkit-media-controls-play-button{display:none}</style>').appendTo('head');
            $('<style>video::-webkit-media-controls-mute-button{display:none}</style>').appendTo('head');
            $('<style>video::-webkit-media-controls-current-time-display{margin-left:20px}</style>').appendTo('head');
            $('<style>video::-webkit-media-controls-volume-slider{display:none}</style>').appendTo('head');
            $('<style>video::-webkit-media-controls-mute-button{display:none}</style>').appendTo('head');
            if($("#"+idVideo).prop("controls", true))
            {
                $("#"+idVideo).prop("controls", true)
            }
        }
    }
    }().init();
}
// Pause and play control
$("#"+idVideo).click(function() {
    if( this.paused)
    {
        this.play();
        this.muted();
    }
    else
    {
        this.pause();
        this.muted();
    }
});
//Auto play for others browsers
var video1 = document.getElementById("video_play");
var videoPlay = function(){
    video1.autoplay = true;
	video1.load();
	video1.play();
}
