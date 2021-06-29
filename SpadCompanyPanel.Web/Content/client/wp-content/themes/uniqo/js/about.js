$(function(){ 
  wid=window.innerWidth;
  hei=window.innerHeight; 

  var ua = navigator.userAgent,
  BrowserName = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'Firefox' : /Chrome\W\d/.test(ua) ? 'Chrome' : /Chromium\W\d/.test(ua) ? 'Chrome' : /\bSafari\W\d/.test(ua) ? 'Safari' : /\bOpera\W\d/.test(ua) ? 'Opera' : /\bOPR\W\d/i.test(ua) ? 'Opera' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
  OSName = /Windows NT 10/.test(ua) ? "Windows" : /Windows NT 6\.0/.test(ua) ? "Windows" : /Windows NT 6\.1/.test(ua) ? "Windows" : /Windows NT 6\.\d/.test(ua) ? "Windows" : /Windows NT 5\.1/.test(ua) ? "Windows" : /Windows NT [1-5]\./.test(ua) ? "Windows" : /Mac/.test(ua) ? "Mac/iOS" : /Linux/.test(ua) ? "Linux" : /X11/.test(ua) ? "nix" : "",
  mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
  tablet = /Tablet|iPad/i.test(ua),
  touch = 'ontouchstart' in document.documentElement;

  $(window).resize(function(){
      initial(1);
  });   
  $(document).ready(function() {
      initial(0);
  }); 


  $('#menu_btn').click(function(){
    if(wid<650){
      if($('#menu').hasClass('menu_opened')){
        $("#menu").removeClass('menu_opened');
        $('#menu_line1').removeClass('res_line1');
        $('#menu_line2').removeClass('res_line2');
        TweenLite.to('#menu_line3',0,{display:'block'});
        TweenLite.to(".res_menu_item",1,{visibility:'hidden'});


      }else{
        $("#menu").addClass('menu_opened');
        $('#menu_responsive').removeClass('menu_open');
        $('#menu_line1').addClass('res_line1');
        $('#menu_line2').addClass('res_line2');
        TweenLite.to('#menu_line3',0,{display:'none'});

        setTimeout(function(){
        TweenLite.fromTo(".res_menu_item",1,{opacity:0},{visibility:'visible',opacity:1});
      },500);
      }
    }
   
  });
  function res_menu_out(){
    setTimeout(function(){
      $('.softlan_logo').addClass('vcenter');
      $('.softlan_logo').removeClass('softlan_logo_fixed');
      TweenLite.to('.menu',0,{height:55});
      $('#menu_line1').removeClass('res_line1');
      $('#menu_line2').removeClass('res_line2');
      TweenLite.to('#menu_line3',0,{display:'block'});
    },300);
    TweenLite.to('.res_menu_about_softlan',.2,{display:'none'});
    TweenLite.to('.res_menu_products',.2,{display:'none'});
    TweenLite.to('.res_menu_contact_us',.2,{display:'none'});
    TweenLite.to('.res_menu_blog',.2,{display:'none'});

    $('#menu_responsive').removeClass('open_menu_responsive');
    $('#menu_responsive').addClass('menu_open');
    TweenLite.to('.softlan_logo',1,{position:''});

  }
  
   
  function initial(resized){
    wid=$("body").prop("clientWidth");
    hei=window.innerHeight; 
    $('.fullpage').css({height:hei});

    $('#about_svg').css({marginTop:.4*hei});
    svg_height=parseInt($('#about_svg').css("height"));
    var content_height=hei-(.4*hei+svg_height+150); // 140px for padding-top & padding-bottom of about_content_box
    $(".content_container").css({minHeight:content_height+100});
    $("#about_cir_parent").css({bottom:content_height+130});

   }
 });