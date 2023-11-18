/**
 * Created by qhao on 2015/4/27.
 */
var JumpUrl = "";
var appId = "";
var mid = "0801";//当前页面编号
var dir = "../../advertisement/data/";
var logintype = "";
$(function () {
    /*var userInfo = getQueryString("userInfo");
    if(userInfo){
        console.log(userInfo+"info func");
        userInfo = phoneDecryption(userInfo);
        $('#otherInfoTab a:last').tab('show');//初始化显示哪个tab
        logintype = 'facebook';

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        getJumpurl();//获取跳转网址

        getFacebookAppId(userInfo);//获取facebook appid
    }
    else{
        $('#otherInfoTab a:first').tab('show');//初始化显示哪个tab
        logintype = 'surf';
        getJumpurl();//获取跳转网址
        login();//直接上网

        getJumpurl();//获取跳转网址
        login();//直接上网
    }
    */
    /*加载页面数据*/
    $('#otherInfoTab a:first').tab('show');
    logintype = 'surf';
    getJumpurl();//获取跳转网址
    login();//直接上网

    $(".container").attr("id", mid);

    $('#otherInfoTab a').click(function (e) {
        e.preventDefault();//阻止a链接的跳转行为
        $(this).tab('show');//显示当前选中的链接及关联的content
        /*if($(this).attr('id') == 'facebook'){
            logintype = 'facebook';
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            getJumpurl();//获取跳转网址
            getFacebookAppId(userInfo);//获取facebook appid
        }
        else{*//*
            logintype = 'surf';
            getJumpurl();//获取跳转网址
            login();//直接上网
        }*/
        logintype = 'surf';
        getJumpurl();//获取跳转网址
        login();//直接上网
        console.group("acciones de debug");
        console.log("Este es la accion de click en el botón? other ino tab");
        console.groupEnd();
    })

    /**选择框的显示位置 style if button is checked**/
    var agreeBoxWidth = $(".agree_img").width() + $(".agree").width();
    $("#agreeCheckBox").width(agreeBoxWidth);
    /*选择框事件*/
    $("#agreeCheckBox").click(function () {
        var checkValue = $("#agreeCheckBox").attr("checkValue");
        if (checkValue == "1") {
            $("#agreeCheckBox img").attr("src", "../images/checkBox_icon.png");
            $("#agreeCheckBox").attr("checkValue", "0");
            $("#LoginBtn").removeClass("register_cntr");
            $("#LoginBtn").addClass("disable_register_cntr");
        } else {
            $("#agreeCheckBox img").attr("src", "../images/checkBox_choice.png");
            $("#agreeCheckBox").attr("checkValue", "1");
            $("#LoginBtn").removeClass("disable_register_cntr");
            $("#LoginBtn").addClass("register_cntr");
        }
    });

    //页面曝光上报

    pageViewUploadData();

    /*跳转到主页*/
    $(".menu-btn").click(function () {
        var resId = "02";
        var resName = "HomePage";
        var resType = resId;
        $.hongdian.uploadData({
            resId: resId,
            resName: resName,
            resType: resType,
            click: 1,
            flag: 1//资源类型为菜单（0：普通资源，1：菜单，2：广告）
        }, function () {
            if (userInfo) {
                window.location.href = "../../homePage/web/homePage.html?userInfo=" + userInfo;
            } else {
                window.location.href = "../../homePage/web/homePage.html";
            }
        });
    });
});
/**
 * getFacebookAppId() 获取facebook appid
 * 参数说明：
 */
/*
function getFacebookAppId(userInfo) {
    var request = $.ajax({
        url: "../data/facebook_appId",
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000
    });

    request.success(function (data) {
        appId = data.appId;
        if (!appId) {
            return false;
        }

        window.fbAsyncInit = function () {
            FB.init({
                appId: appId,
                xfbml: true,
                version: 'v2.2'
            });
            function facebookLogin() {
                FB.login(function (response) {
                    if (response.authResponse) {
                        FB.api('/me', function (response) {
                            console.dir(response);
                            //console.dir(response);
                            //调用auth接口登录入库
                            //账户
                            var accId = response.email;
                            //用户名
                            var uesrName = response.name;
                            //邮箱
                            var email = response.email;
                            //城市
                            //var city = response.location.name;
                            var city = "";
                            //国家
                            var country = response.locale;
                            //年龄
                            var age = "";
                            //登录类型
                            var loginType = "register";
                            authLogin(loginType, accId, uesrName, email, city, country, age);
                        });
                    } else {
                        $('.error_detail').text('User cancelled login or did not fully authorize.！');
                    }
                }, { scope: 'email,user_location' });
            }

            //facebook登陆上网
            $("#registerBtn").click(function () {
                $(".login_container").showLoading();
                console.log("facebook认证");
                if (userInfo) {
                    //登录类型
                    var loginType = "login";
                    authLogin(loginType, userInfo)
                } else {
                    facebookLogin();
                }
            })
        }
    });

    request.error(function () {
        console.dir("无法获取资源");
    });
};
*/

//authLogin("register","venlley@126.com","weyli","venlley@126.com","shenzhen","CN","");
//调用auth接口登录入库
/*
function authLogin(loginType, accId, uesrName, email, city, country, age) {
    //确认上网
    var behavior = "2";//1、注册；2、登录；3、获取验证码
    var respStatus = "";//0、成功；-1、失败；-2、流量已用完；-3、网络未响应
    var respMsg = "";

    //登录类型
    var loginType = loginType;
    //账户
    var accId = accId;
    if (loginType == "register") {
        //用户名
        var uesrName = uesrName;
        //邮箱
        var email = email;
        //城市
        var city = city;
        //国家
        var country = country;
        //年龄
        var age = age;
    } else {
        //用户名
        var uesrName = "";
        //邮箱
        var email = "";
        //城市
        var city = "";
        //国家
        var country = "";
        //年龄
        var age = "";
    }

    $(".container").showLoading();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../common/api/facebook_login_api.php",
        data: 'type=1&accId=' + accId + '&uesrName=' + uesrName + '&email=' + email + '&city=' + city + '&country=' + country + '&age=' + age + '&regType=facebook',
        success: function (data) {
            // console.dir(data);
            if (data) {
                if (data['code'] == '0') {
                    //认证行为上报
                    respStatus = "0";
                    userAuthBehavior(behavior, respStatus, respMsg, accId);

                    var expireNetFlow = 0;//外网流量
                    expireNetFlow = data.surplusFlow;//剩余流量,data.totalFlow(总流量),data.consumeFlow(消费流量)，
                    $.ajax({
                        method: 'post',
                        url: "../../common/api/acc_auth.php",
                        data: 'type=1&expireNetFlow=' + expireNetFlow,
                        dataType: 'json',
                        success: function (data) {
                            if (data['code'] != 'ok') {
                                $('.error_detail').text('网络无法连接');
                            } else {
                                //window.location.href = 'http://www.hao123.com';
                                setTimeout(function () {
                                    jumpHref(accId);
                                }, 3000);

                            }
                        },
                        complete: function () {
                            setTimeout(function () {
                                $(".login_container").hideLoading();
                            }, 3000);
                        }
                    });
                } else if (data['code'] == '-2') {
                    $('.error_detail').text('您好，给你分配初始的流量已用完！');
                    //认证行为上报
                    respStatus = "-2";
                    userAuthBehavior(behavior, respStatus, respMsg, accId);
                } else {
                    $('.error_detail').text('登录失败');
                    //认证行为上报
                    respStatus = "-1";
                    userAuthBehavior(behavior, respStatus, respMsg, accId);
                }
            } else {
                $('.error_detail').text('上网失败！');
                $(".container").hideLoading();
                //认证行为上报
                respStatus = "-3";
                userAuthBehavior(behavior, respStatus, respMsg, accId);
            }


        },
        complete: function (XMLHttpRequest, status) {
            if (status != "success") {
                $('.error_detail').text('服务器连接失败！');
                //认证行为上报
                respStatus = "-3";
                userAuthBehavior(behavior, respStatus, respMsg, accId);
            }
            $(".login_container").hideLoading();
        }
    })
};
*/
/**
 * setSwiperHeight() 设置swiper的高度
 *  参数说明：  adSlide  adSlide是slide的div的id
 */
function setSwiperHeight() {
    /*设置swiper的高度*/
    var swiperWidth = $(".swiper-slide").width();
    var swiperHeight = 0;
    if (swiperWidth < 640) {
        swiperHeight = swiperWidth * (220 / 640);
    } else {
        swiperHeight = 220;
    }
    $("#TravelAdSlide .swiper-slide ").height(swiperHeight);
    $("#TravelAdSlide .swiper-slide img").height(swiperHeight);
};


/**
 * getJumpurl() obtains the ulr wich will be used to redirect the user to the next web
 */
function getJumpurl() {
    var url;
    var request = $.ajax({
        url: "../../common/data/jump_url",
        type: "GET",
        dataType: 'json',  //类型
        timeout: 3000
    });

    request.success(function (data) {
        JumpUrl = data.jump_url;
    });

    request.error(function () {
        console.dir("无法获取资源");
    });
};

/**
 * login() 直接上网
 * 参数说明:
 */
function login() {
    $("#LoginBtn").click(function () {
        console.log("直接上网");
        var checkValue = $("#agreeCheckBox").attr("checkValue");
        if (checkValue == 0) {
            return;
        }
        $('.error_detail').text("");

        $(".container").showLoading();
        var expireNetFlow = 1000;//外网流量

        var behavior = "2";//1、注册；2、登录；3、获取验证码
        var respStatus = "";//0、成功；-1、失败；-2、流量已用完；-3、网络未响应
        var respMsg = "";
        var mobile = "";

        $(".login_container").showLoading();

        $.ajax({
            method: 'post',
            url: "../../common/api/acc_auth.php",
            data: 'type=1&expireNetFlow=' + expireNetFlow,
            dataType: 'json',
            success: function (data) {
                if (data['code'] != 'ok') {
                    $('.error_detail').text('Network Connect Error');
                    //认证行为上报
                    respStatus = "-3";
                    userAuthBehavior(behavior, respStatus, respMsg, mobile);
                } else {
                    // window.location.href = 'http://www.hao123.com';

                    setTimeout(function () {
                        jumpHref(mobile);
                    }, 3000);
                    //认证行为上报
                    respStatus = "0";
                    userAuthBehavior(behavior, respStatus, respMsg, mobile);
                }
                //jumpHref(mobile);
            },
            complete: function (XMLHttpRequest, status) {
                setTimeout(function () {
                    $(".login_container").hideLoading();
                }, 3000);
            }
        });
    });
};

/**
 * jumpHref(mobile,jumpUrl) 跳转链接地址s
 * 参数说明:mobile 手机号, jumpUrl 链接地址
 */
function jumpHref(mobile) {
    if (mobile) {
        mobile = phoneEncrypt(mobile);
        window.location.href = JumpUrl + "?userInfo=" + mobile;
    }
    else {
        window.location.href = JumpUrl;
    }
};


/**
     *  pageViewUploadData() 注册页面曝光上报
     *  参数说明：
     */
function pageViewUploadData() {
    var resId = "08";//一级菜单id
    var resName = "Internet";
    var resType = resId;
    $.hongdian.uploadData({
        resId: resId,
        resName: resName,
        resType: resType,
        view: 1,
        click: 0,
        flag: 0
    }, function () {
    });
};