var wid=0,hei=0,original_height=620,scale_rate=1,r=225,active_group=0,active_product=0,product_count=0,group_count=0,products_speed=3500,can_swipe=1;
var scale_rates =[];
var OSName = "Unknown";
var BrowserName = "Unknown";
var scroll_lock=0,small_circle_start=9;
var lang;
var abr_color = 'red';

var ua = navigator.userAgent,
        BrowserName = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'Firefox' : /Chrome\W\d/.test(ua) ? 'Chrome' : /Chromium\W\d/.test(ua) ? 'Chrome' : /\bSafari\W\d/.test(ua) ? 'Safari' : /\bOpera\W\d/.test(ua) ? 'Opera' : /\bOPR\W\d/i.test(ua) ? 'Opera' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
        OSName = /Windows NT 10/.test(ua) ? "Windows" : /Windows NT 6\.0/.test(ua) ? "Windows" : /Windows NT 6\.1/.test(ua) ? "Windows" : /Windows NT 6\.\d/.test(ua) ? "Windows" : /Windows NT 5\.1/.test(ua) ? "Windows" : /Windows NT [1-5]\./.test(ua) ? "Windows" : /Mac/.test(ua) ? "Mac/iOS" : /Linux/.test(ua) ? "Linux" : /X11/.test(ua) ? "nix" : "",
        mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
        tablet = /Tablet|iPad/i.test(ua),
        touch = 'ontouchstart' in document.documentElement;
// var ua = navigator.userAgent,
//         browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrome\W\d/.test(ua) ? 'gc' : /Chromium\W\d/.test(ua) ? 'oc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
//         o_s = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
//         mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
//         tablet = /Tablet|iPad/i.test(ua),
//         touch = 'ontouchstart' in document.documentElement;
 if(mobile==0 && tablet==false)//&& !jQuery.support.touch
        {
            $('#mob_video').hide(0);
            $('#video').show(0);
        }
        else
        {
            $('#mob_video').show(0);
            $('#video').hide(0);
        }
$(window).resize(function(){
    // initial_total_products();
        fit_video('#video',700,394);

}); 
    function fit_video(el,wid,hei){
        win_wid=window.innerWidth;
        win_hei=window.innerHeight; 
        if((wid/hei)<(win_wid/win_hei)){
            $('#video').addClass('wid100').removeClass('hei100');
        }
        else{
            $('#video').addClass('hei100').removeClass('wid100');
        }
    }

jQuery(document).ready(function($){

        fit_video('#video',700,394);

     function initial(resized) {

          wid=window.innerWidth;
          hei=window.innerHeight;
      
     }
    // $('#video_overally').removeClass().addClass('grad_'+$('.group:eq('+group_num+')').attr('group_name'));

       setTimeout(function(){

         $('.pro_img').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          fade: false,
          asNavFor: '.pro_img_nav'
        });
        $('.pro_img_nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.pro_img',
          dots: true,
          centerMode: false,
          infinite:false,
          focusOnSelect: true
        });

         $('.other_pro').slick({
          dots: true,
        // infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
        });
       },1000);
       
      initial(0);
      // $('.pro_img').slick({
      //   dots: true,
      //   infinite: true,
      //   speed: 500,
      //   fade: true,
      //   cssEase: 'linear'
      // }); 



     $(window).resize(function(){
     // TweenMax.to("#z",0.1,{scale:"+=0.2" , transformOrigin:"50% 50%"});
          initial(1);
     }); 
      

     // $(document).on('click', '.other_images_btn', function() {
     //      $(this).siblings().css('background','transparent');
     //      $(this).css('background',abr_color);
     //      var my_url=($(this).attr('path')).split('\\').join('\\\\');
     //           $('#product_img').fadeOut(function() {
     //           $('#product_img').fadeIn();
     //          // var img_url_tmp=$('.path:eq(0)').text();
     //          // if(img_url_tmp){
     //          //      var img_url=img_url_tmp.split('\\').join('\\\\');
     //          // }
     //          $('#product_img_tag').attr('src',my_url);
     //           // $('#product_img').css('background-image','url('+my_url+')');
     //     });
     // });
     // $(document).on('click', '.product_circle', function() {

     //      active_product=$(".product_circle").index($(this));
     //      TweenMax.to($('#product_img'),.5,{x:30,opacity:0,ease:Power0.easeOut,onComplete:function(){
     //          TweenMax.to($('#product_img'),0,{x:-50,opacity:0});
     //          goto_product();
     //      }});
     //    // TweenMax.to($('#total_product_img_box'),0,{x:50,opacity:0,ease:Power4.easeOut});
     //    // TweenMax.to($('#total_product_img_box'),(products_speed/5000),{x:0,opacity:1,ease:Power2.easeOut});
     // });
     // $('#popupclose').click(function(){
     //      $('#popup').addClass('popup_hide').delay(1000).hide(0);
     // });
     $(document).on('click', '#product_more_desc_btn', function(e) {
      // alert('sdsd');
        // $('body,html').stop().animate({scrollTop: hei},600);
        $('body,html').stop().animate({scrollTop: $('#products_more_box').offset().top-120 },500,'linear');
        e.preventDefault();
          
          // $('#popup').show(0).removeClass('popup_hide');
          // var popupcontent= '<p id="popup_product_desc" class="popup_product_desc">'+$('#product_desc').text()+'</p>'+$('.group:eq('+active_group+') > .product:eq('+active_product+') > .table:eq(0)').html();
          // if (popupcontent===undefined) {
          //      popupcontent="";
          // }
          // // $('#popupcontent').html(popupcontent);
          // $('.popuptitle').text($('#product_title').text());
          // if($('#popupcontent').hasClass('mCustomScrollbar')){
          //      $('#popupcontent').mCustomScrollbar("destroy");
          // }
          // $("#popupcontent").mCustomScrollbar({mouseWheel:true,advanced:{
          // updateOnBrowserResize:true, 
          //                         autoHideScrollbar:true,
          //                         /*scrollInertia:5000,*/
          // updateOnContentResize:true}}); 
          // $("#popupcontent .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar").attr('style', 'background: #e3092b !important');

     });


     
    $('#thumbnail_top_left').click(function(){
        $('#products_bg').removeClass('white_bg');
        $('#total_product_thumbnail_btn_pac').removeClass('center_absolute');
        $('#total_product_thumbnail_pac').fadeOut();
        $('#total_product_pac').fadeIn();
        $('#total_product_groups_pac').removeClass('hide_me');
        $('#total_product_counter').fadeIn();
        group_num=0;
        goto_product();
    });
    $('#thumbnail_bottom_left').click(function(){
        $('#products_bg').removeClass('white_bg');
        $('#total_product_thumbnail_btn_pac').removeClass('center_absolute');
        $('#total_product_thumbnail_pac').fadeOut();
        $('#total_product_pac').fadeIn();
        $('#total_product_groups_pac').removeClass('hide_me');
        $('#total_product_counter').fadeIn();
        group_num=1;
        goto_product();
    });
    $('#thumbnail_top_right').click(function(){
        $('#products_bg').removeClass('white_bg');
        $('#total_product_thumbnail_btn_pac').removeClass('center_absolute');
        $('#total_product_thumbnail_pac').fadeOut();
        $('#total_product_pac').fadeIn();
        $('#total_product_groups_pac').removeClass('hide_me');
        $('#total_product_counter').fadeIn();
        group_num=2;
        goto_product();
    });
    $('#thumbnail_bottom_right').click(function(){
        $('#products_bg').removeClass('white_bg');
        $('#total_product_thumbnail_btn_pac').removeClass('center_absolute');
        $('#total_product_thumbnail_pac').fadeOut();
        $('#total_product_pac').fadeIn();
        $('#total_product_groups_pac').removeClass('hide_me');
        $('#total_product_counter').fadeIn();
        group_num=3;
        goto_product();
    });
    $('#menu_button_cover').hover(function(){
        $('.open .line1').css('top','-7px');
        $('.open .line3').css('top','13px');
        $('.close').css('opacity','1');
        $('.open').css('opacity','1');
    },function(){
    // do this when mouse out from element with 'SOMEELEMENT' id
        $('.open .line1').css('top','-5px');
        $('.open .line2').css('top','3px');
        $('.open .line3').css('top','11px');
        $('.close').css('opacity','0.9');
        $('.open').css('opacity','1');
    });
    $('#thumbnail_bottom_left').hover(function(){
            $('#thumbnail_bottom_left_hover').fadeIn();
        },function(){
        // do this when mouse out from element with 'SOMEELEMENT' id
            $('#thumbnail_bottom_left_hover').fadeOut();
    });
    $('#thumbnail_bottom_right').hover(function(){
            $('#thumbnail_bottom_right_hover').fadeIn();
        },function(){
        // do this when mouse out from element with 'SOMEELEMENT' id
            $('#thumbnail_bottom_right_hover').fadeOut();
    });
    $('#thumbnail_top_left').hover(function(){
            $('#thumbnail_top_left_hover').fadeIn();
        },function(){
        // do this when mouse out from element with 'SOMEELEMENT' id
            $('#thumbnail_top_left_hover').fadeOut();
    });
    $('#thumbnail_top_right').hover(function(){
            $('#thumbnail_top_right_hover').fadeIn();
        },function(){
        // do this when mouse out from element with 'SOMEELEMENT' id
            $('#thumbnail_top_right_hover').fadeOut();
    });

      
     $(window).keydown(function(e){
          active_product=$('#product_index').text();
          active_product=$('#product_index').text();

          if(e.keyCode==49 )//1   
          {  
          }

          else if(e.keyCode==50 )//2
          {  
          }
          else if(e.keyCode==51 )//3
          { 
          }
          else if(e.keyCode==52 )//4
          { 
            
          }
          else if(e.keyCode==53 )//5
          { 

          }
          else if(e.keyCode==54 )//5
          { 
            
          }
          else if(e.keyCode==81)//q
          {

          }
          else if(e.keyCode==13)//enter
          {
             
          }
                
          else if(e.keyCode==38|| e.keyCode==33)//up
          { 
            if (active_group!=0){
              active_group--;
              active_product=0;
              goto_product_link();
            }
            else{
              active_group=group_count-1;
              active_product=0;
              goto_product_link();
            }
          }
          else if(e.keyCode==40|| e.keyCode==34)//down
          {
            if (active_group<group_count-1){
              active_group++;
              active_product=0;
              goto_product_link();
            }else{
              active_group=0;
              active_product=0;
              goto_product_link();
            }
          }
          else if(e.keyCode==39)//right
          { 
            if (active_product<product_count-1){
              active_product++;
              goto_product_link();
            }
            else{
              active_product=0;
              goto_product_link();
            }
          }
          else if(e.keyCode==37)//left
          {
            if (active_product!=0){
              active_product--;
              goto_product_link();
            }
            else{
              active_product=product_count-1;
              goto_product_link();
            }
          }
          else if(e.keyCode==36)//home
          { 
               e.preventDefault();
          }
          else if(e.keyCode==35)//end
          { 
               e.preventDefault();
          }
          else if(e.keyCode==27)//Esc
          {
               $('#popupclose').click();
               
          }
     });  

    //  (function() {
    //     hammertime=new Hammer( $('body')[0], {
    //       domEvents: true,
    //       inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
    //       drag_vertical: false
    //     } ); 
    //     hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    //     // $('body').on( "swipedown", function( e ) {
    //     //   active_product=$('#product_index').text();
    //     //   active_product=$('#product_index').text();

    //     //     e.preventDefault();
    //     //     if (active_group<group_count-1){
    //     //       active_group++;
    //     //       active_product=0;
    //     //       goto_product_link();
    //     //     }else{
    //     //       active_group=0;
    //     //       active_product=0;
    //     //       goto_product_link();
    //     //     }
    //     // } );
    //     // $('body').on( "swipeup", function( e ) {
    //     //   active_product=$('#product_index').text();
    //     //   active_product=$('#product_index').text();

    //     //     e.preventDefault();
    //     //     if (active_group!=0){
    //     //       active_group--;
    //     //       active_product=0;
    //     //       goto_product_link();
    //     //     }
    //     //     else{
    //     //       active_group=group_count-1;
    //     //       active_product=0;
    //     //       goto_product_link();
    //     //     }
    //     // } );
    //     $('body').on( "swiperight", function( e ) {
    //       active_product=$('#product_index').text();
    //       active_product=$('#product_index').text();

    //         e.preventDefault();
    //         if (active_product<product_count-1){
    //           active_product++;
    //           goto_product_link();
    //         }else{
    //           active_product=0;
    //           goto_product_link();
    //         }
    //     } );
    //     $('body').on( "swipeleft", function( e ) {
    //       active_product=$('#product_index').text();
    //       active_product=$('#product_index').text();

    //          e.preventDefault();
    //         if (active_product!=0){
    //           active_product--;
    //           goto_product_link();
    //         }
    //         else{
    //           active_product=product_count-1;
    //           goto_product_link();
    //         }  
    //     } );
    // } )();

}); 
