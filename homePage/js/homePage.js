<<<<<<< HEAD
/**
 * Created by qhao on 2015/4/22.
 */


$(function(){
    var phoneUser = obtenerCookie("phone");
    $(".container").attr("id",mid);
    //Determine whether the user has been authenticated
    var userInfo = getQueryString("userInfo");
    if(userInfo)
    {
        userInfo = phoneDecryption(userInfo);
        userInfo = phoneEncrypt(userInfo);
    }

    /*request if the user is still authenticated*/
    /*Home menu*/
    
    Generate_home_Menu(userInfo);
    //Page Exposure Report
    pageViewHomeUploadData();
    /*Jump to the homepage*/
    $(".menu-btn").click(function(){
        var resId = "02";
        var resName = "home";
        var resType = resId;
        $.hongdian.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            phoneUser: phoneUser,
            flag:1//The resource type is menu (0: common resource, 1: menu, 2: advertisement)
        }, function() {
            window.location.href = "../../homePage/web/homePage.html"+"?id="+Math.random()+"&phone="+obtenerCookie();
        });

    });
});

function MenuClick(userInfo){
    var phoneUser = obtenerCookie("phone");
    $(".main-menu-link").click(function(){
        var resId = $(this).attr("resId");
        var resName = $(this).attr("resName");
        var resType = resId;
        var href = $(this).attr("href");
        $.hongdian.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            phoneUser: phoneUser,
            flag:1//The resource type is menu (0: common resource, 1: menu, 2: advertisement)
        ,success: function() {
            if(userInfo){
                window.location.href = href+userInfo+"?id="+Math.random()+"&phone="+obtenerCookie();
            }else{
                window.location.href = href+"?id="+Math.random()+"&phone="+obtenerCookie();
            }
        }, 
        timeout: 3000,
        error: function () {
            window.location.href = href+"?id="+Math.random()+"&phone="+obtenerCookie();
        }}
        );
    });

};
var width = window.innerWidth;
var orientation = window.orientation;

function changeOrientation() {
    location.reload();
}
window.addEventListener("orientationchange", changeOrientation, false);
document.addEventListener("onresize", changeOrientation, false);
    
/**
 *  Generate_home_Menu Home menu
 */

function Generate_home_Menu(userInfo){
    var request = $.ajax({
        url: "../../common/data/menu" ,
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000,
        beforeSend: function(xhr){
            xhr.overrideMimeType("text/json; charset=x-user-defined");
        }
    });

    request.success(function(data) {
        if(data.length == 0){
            return;
        }
        console.log(data);

        var contentR = "";
        var contentB = '';
        var contentC = '';

        $.each(data, function(idx,menu){
            console.log(width);
            console.log(idx)
            if(idx <= 2 && width <= 640)
            {
                contentR += '<div href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link" id="home-' + menu.id + 'col-xs-6 modul modul-padding-left">' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if(idx <= 5 && width <= 640)
            {
                contentB += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left" > ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if(idx <= 8 && width <= 640)
            {
                contentC += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left"> ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if (idx <= 4 && width >= 641)
            {
                contentR += '<div href="' + menu.href + '" ' +
                'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link" id="home-' + menu.id + 'col-xs-6 modul modul-padding-left">' +
                '<img class="img-responsive" src="' + menu.img + '"/> ' +
                '</div>';
            }
            else if(idx <= 9 && width >= 641)
            {
                contentB += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left"> ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
        });

        $("#contentRight").append(contentR);
        $("#contentBottom").append(contentB);
        $("#contentC").append(contentC);

        /*Home menu click event*/
        MenuClick(userInfo);

    });

    request.error(function(){
        console.dir("Unable to obtain resources");
        return;
    });
};

/**
 *  pageViewHomeUploadData() Home page exposure report
 *  Parameter Description:
 */
function pageViewHomeUploadData(){
    var resId = "02";//First level menu id
    var resName = "home_page";
    var resType = resId;
    var phoneUser = obtenerCookie("phone");

    $.hongdian.uploadData({
        resId:resId,
        resName:resName,
        resType:resType,
        view:1,
        click:0,
        phoneUser: phoneUser,
        flag:1
    }, function() {
    });
}
/**
 * Created by qhao on 2015/4/22.
 */


$(function(){
    var phoneUser = obtenerCookie("phone");
    $(".container").attr("id",mid);
    //Determine whether the user has been authenticated
    var userInfo = getQueryString("userInfo");
    if(userInfo)
    {
        userInfo = phoneDecryption(userInfo);
        userInfo = phoneEncrypt(userInfo);
    }

    /*request if the user is still authenticated*/
    /*Home menu*/
    
    Generate_home_Menu(userInfo);
    //Page Exposure Report
    pageViewHomeUploadData();
    /*Jump to the homepage*/
    $(".menu-btn").click(function(){
        var resId = "02";
        var resName = "home";
        var resType = resId;
        $.hongdian.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            phoneUser: phoneUser,
            flag:1//The resource type is menu (0: common resource, 1: menu, 2: advertisement)
        }, function() {
            window.location.href = "../../homePage/web/homePage.html"+"?id="+Math.random()+"&phone="+obtenerCookie();
        });

    });
});

function MenuClick(userInfo){
    var phoneUser = obtenerCookie("phone");
    $(".main-menu-link").click(function(){
        var resId = $(this).attr("resId");
        var resName = $(this).attr("resName");
        var resType = resId;
        var href = $(this).attr("href");
        $.hongdian.uploadData({
            resId:resId,
            resName:resName,
            resType:resType,
            click:1,
            phoneUser: phoneUser,
            flag:1//The resource type is menu (0: common resource, 1: menu, 2: advertisement)
        ,success: function() {
            if(userInfo){
                window.location.href = href+userInfo+"?id="+Math.random()+"&phone="+obtenerCookie();
            }else{
                window.location.href = href+"?id="+Math.random()+"&phone="+obtenerCookie();
            }
        }, 
        timeout: 3000,
        error: function () {
            window.location.href = href+"?id="+Math.random()+"&phone="+obtenerCookie();
        }}
        );
    });

};
var width = window.innerWidth;
var orientation = window.orientation;

function changeOrientation() {
    location.reload();
}
window.addEventListener("orientationchange", changeOrientation, false);
document.addEventListener("onresize", changeOrientation, false);
    
/**
 *  Generate_home_Menu Home menu
 */

function Generate_home_Menu(userInfo){
    var request = $.ajax({
        url: "../../common/data/menu" ,
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000,
        beforeSend: function(xhr){
            xhr.overrideMimeType("text/json; charset=x-user-defined");
        }
    });

    request.success(function(data) {
        if(data.length == 0){
            return;
        }
        console.log(data);

        var contentR = "";
        var contentB = '';
        var contentC = '';

        $.each(data, function(idx,menu){
            console.log(width);
            console.log(idx)
            if(idx <= 2 && width <= 640)
            {
                contentR += '<div href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link" id="home-' + menu.id + 'col-xs-6 modul modul-padding-left">' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if(idx <= 5 && width <= 640)
            {
                contentB += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left" > ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if(idx <= 8 && width <= 640)
            {
                contentC += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left"> ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
            else if (idx <= 4 && width >= 641)
            {
                contentR += '<div href="' + menu.href + '" ' +
                'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link" id="home-' + menu.id + 'col-xs-6 modul modul-padding-left">' +
                '<img class="img-responsive" src="' + menu.img + '"/> ' +
                '</div>';
            }
            else if(idx <= 9 && width >= 641)
            {
                contentB += '<div id="home-' + menu.id + '" href="' + menu.href + '" ' +
                    'resId="' + menu.id + '" resName="' + menu.title + '" class="main-menu-link col-xs-6 modul-padding-left"> ' +
                    '<img class="img-responsive" src="' + menu.img + '"/> ' +
                    '</div>';
            }
        });

        $("#contentRight").append(contentR);
        $("#contentBottom").append(contentB);
        $("#contentC").append(contentC);

        /*Home menu click event*/
        MenuClick(userInfo);

    });

    request.error(function(){
        console.dir("Unable to obtain resources");
        return;
    });
};

/**
 *  pageViewHomeUploadData() Home page exposure report
 *  Parameter Description:
 */
function pageViewHomeUploadData(){
    var resId = "02";//First level menu id
    var resName = "home_page";
    var resType = resId;
    var phoneUser = obtenerCookie("phone");

    $.hongdian.uploadData({
        resId:resId,
        resName:resName,
        resType:resType,
        view:1,
        click:0,
        phoneUser: phoneUser,
        flag:1
    }, function() {
    });
}
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
