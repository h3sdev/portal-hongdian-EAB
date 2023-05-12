<?php

    $id_page = $_POST['id_page'];

    $default_html = [
        "HOME_BANNER" => "<div id='showAdDiv' class='col-xs-5 modul-padding-right'>
        <div id='showAdSlide' class='swiper-container'>
        <div class='smallslide swiper-wrapper'></div>
            <script type='text/javascript'>
            getAd02();
            </script>
        </div>
        <div class='pagination-show'></div>
    </div>",
        "VIDEO_BANNER" => "<div id='VideoAdSlide1' class='swiper-container'>
            <div class='news-wrapper swiper-wrapper'>
                <script type='text/javascript'>
                    getAd('VideoAdSlide1');//获取01号广告位
                </script>
            </div>
        </div>
        <div class='pagination-news'></div>",
        "NEWS_BANNER" => "<div id='showAdDiv' class='swiper-container'>
        <div class='news-wrapper swiper-wrapper'>
            <script type='text/javascript'>
                getAd();//获取01号广告位
                //setSwiperHeight();/*设置swiper的高度*/
            </script>
        </div>
    </div>
    <div class='pagination-news'></div>"
    ];
    $vendor_banners = [
        "BRASILIA_BUS_1_BANNER_1" => "<div id='gpt-passback'>
        <script>
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
          googletag.defineSlot('/22061829665/BANNER_1_STS770_BRASILIA', [320, 100], 'gpt-passback').addService(googletag.pubads());
          googletag.enableServices();
          googletag.display('gpt-passback');
          });
        </script>
      </div>
        "
    ];

    $result = shell_exec("ping -c1 8.8.8.8");

    if (isset($result))
    {
        if (strpos($result, 'PING 8.8.8.8') == 'PING 8.8.8.8')
        {
            echo $vendor_banners['BRASILIA_BUS_1_BANNER_1'];
        }
        else
        {
            if ($id_page == '0201')
            {
                echo $default_html['HOME_BANNER'];
            }
            elseif ($id_page == '0301')
            {
                echo $default_html['NEWS_BANNER'];
            }
            elseif ($id_page == '0401' || $id_page == '0402' || $id_page == '0403' || $id_page == '0404')
            {
                echo $default_html['VIDEO_BANNER'];
            }
            elseif ($id_page == '0202')
            {
                echo $default_html['HOME_BANNER'];
            }
            elseif ($id_page == '0203')
            {
                echo $default_html['HOME_BANNER'];
            }
        }
    }
    else
    {
        if ($id_page == '0201')
        {
            echo $default_html['HOME_BANNER'];
        }
        elseif ($id_page == '0401' || $id_page == '0402' || $id_page == '0403' || $id_page == '0404')
        {
            echo $default_html['VIDEO_BANNER'];
        }
        elseif ($id_page == '0202')
        {
            echo $default_html['HOME_BANNER'];
        }
    }
?>