<<<<<<< HEAD

function login () {
    console.log('Ejecuta login para mutear el video')
    //Autoplay
    $('#video_play').get(0).play()
    //Hide video controls
}
// Pause and play control
$("#video_play").click(function() {
    if( this.paused)
    {
        this.play();
    }
    else
    {
        this.pause();
    }
});

setTimeout(function(){
    login ();
}, 1000);

//Auto play for others browsers
var video1 = document.getElementById("video_play");
var videoPlay = function(){
    video1.autoplay = true;
	video1.load();
	video1.play();
}

$(document).ready(function(){
	var v = document.getElementsByTagName("video")[0];
	v.play();
	$("video").on('ended', function(){
		window.location.href = 'homePage.html';
	});
=======

function login () {
    console.log('Ejecuta login para mutear el video')
    //Autoplay
    $('#video_play').get(0).play()
    //Hide video controls
}
// Pause and play control
$("#video_play").click(function() {
    if( this.paused)
    {
        this.play();
    }
    else
    {
        this.pause();
    }
});

setTimeout(function(){
    login ();
}, 1000);

//Auto play for others browsers
var video1 = document.getElementById("video_play");
var videoPlay = function(){
    video1.autoplay = true;
	video1.load();
	video1.play();
}

$(document).ready(function(){
	var v = document.getElementsByTagName("video")[0];
	v.play();
	$("video").on('ended', function(){
		window.location.href = 'homePage.html';
	});
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
});