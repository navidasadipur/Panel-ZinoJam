var wid, hei, topp;
var svg_box_height1;
var svg_box_height2;
var svg_box2_height1;
var svg_box2_height2;
var footer_img1_height;
var iron_mousedown_flag;
var powder_mousedown_flag;

var isFirefox = typeof InstallTrigger !== 'undefined';
var isEdge = !isIE && !!window.StyleMedia;
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var tp_i_height;


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



  
   
  function initial(resized){
    wid=$("body").prop("clientWidth");
    hei=window.innerHeight; 
    $('.fullpage').css({height:hei});

   if(wid>650){
        $("#menu").removeClass('menu_opened');
        $('#menu_line1').removeClass('res_line1');
        $('#menu_line2').removeClass('res_line2');
        TweenLite.to('#menu_line3',0,{display:'block'});
        TweenLite.to(".res_menu_item",1,{visibility:'hidden'});
    
   }

    svg_box_height1=(1.06*wid)*1588/1864;
    $('.content_svg1').css({height:svg_box_height1});

    res_svg_box_height1=(1.1*wid)*1588/1864;
    $('.res_content_svg1').css({height:res_svg_box_height1});
    res_svg_box2_height1=(1.1*wid)*1588/1864;
    $('.res_content2_svg1').css({height:res_svg_box2_height1});
    $('.res_content3_svg1').css({height:res_svg_box2_height1});

    svg_box_height2=(.92*wid)*1577/1793;
    $('.content_svg2').css({height:svg_box_height2});

    res_svg_box_height2=(1.1*wid)*1577/1793;
    $('.res_content_svg2').css({height:res_svg_box_height2});

     res_svg_box2_height2=(1.2*wid)*800/900;
    $('.res_content2_svg2').css({height:res_svg_box2_height2});
    res_svg_box3_height2=(1.5*wid)*1446/2672
    $('.res_content3_svg2').css({height:res_svg_box3_height2});
    // footer1_empty_div_height=(wid)*.2;
    // ('.res_footer1_empty_div').css({height:footer1_empty_div_height});

    $('.res_video').css({height:wid*.4});

    softner_cir1_wid=$('.softner_cir1_parent').width();
    $('.softner_cir1_parent').css({height:softner_cir1_wid});

    res_softner_cir_1_wid=$('.res_softcir1_parent').width();
    $('.res_softcir1_parent').css({height:res_softner_cir_1_wid});


    softner_cir2_wid=$('.softner_cir2_parent').width();
    $('.softner_cir2_parent').css({height:softner_cir2_wid});

    powder_cir1_wid=$('.powder_cir1_parent').width();
    $('.powder_cir1_parent').css({height:powder_cir1_wid});

     powder_cir2_wid=$('.powder_cir2_parent').width();
    $('.powder_cir2_parent').css({height:powder_cir2_wid});

    liquid_cir1_wid=$('.liquid_cir1_parent').width();
    $('.liquid_cir1_parent').css({height:liquid_cir1_wid});

     liquid_cir2_wid=$('.liquid_cir2_parent').width();
    $('.liquid_cir2_parent').css({height:liquid_cir2_wid});

    liquid_cir3_wid=$('.liquid_circular_box3').width();
    $('liquid_circular_box3').css({height:liquid_cir3_wid});

    


    washing_clothes_circle1_wid=$("#washing_clothes_circle").width();
    $('#washing_clothes_circle').css({height:washing_clothes_circle1_wid});

    washing_clothes_circle_wid=$(".washing_clothes_circle2").width();
    $('.washing_clothes_circle2').css({height:washing_clothes_circle_wid});



    

   


    svg_box2_height1=(1.06*wid)*1588/1864;
    $('.content2_svg1').css({height:svg_box2_height1});

    svg_box3_height1=(1.06*wid)*800/900;
    $('.content3_svg1').css({height:svg_box3_height1});

     svg_box3_height2=(1.5*wid)*1464/2672;
    $('.content3_svg2').css({height:svg_box3_height2});

    svg_box2_height2=(1.5*wid)*1704/2905;
    $('.content2_svg2').css({height:svg_box2_height2});

    footer_img1_height=(wid)*8/16;
    $('#footer1_image').css({height:footer_img1_height});

    footer_img2_height=(wid)*8/16;
    $('.footer2_image').css({height:footer_img2_height});
    footer_img3_height=(wid)*8/16;
    $('.footer3_image').css({height:footer_img3_height});

    footer_svg_height=(1.1*wid)*1700/1900;
    $('#video_svg1').css({height:footer_svg_height});

    footer_svg_height=(1.1*wid)*1700/1900;
    $('#video_svg2').css({height:footer_svg_height});

    footer_svg_height=(1.1*wid)*1700/1900;
    $('#video_svg3').css({height:footer_svg_height});

    drag_end_pt1_height=(.4*wid)*670/809;
    $('#drag_end_pt1').css({height:drag_end_pt1_height});


    iron_height=(.2*wid)*260/389;
    $('#draggable_iron').css({height:iron_height});


    // $('#moving_pic_box').css({height:wid*(.35)});
    $('#powder_middle_div').css({height:wid*(.45)});
    $('#liquid_middle_div').css({height:wid*(.6)});


    $('#res_powder_footer').css({height:hei*(.6)});
    $('#res_liquid_middle_div').css({height:hei*(.6)});

    washing_machine_height=(.22*wid)*(713/504)
    $('#washing_machine').css({height:washing_machine_height});

    res_washing_machine_height=(.5*wid)*(713/504)
    $('#res_washing_machine').css({height:res_washing_machine_height});

    powder_res_circle_wid=$('.res_powder_circular_box3').width();
    $('.res_powder_circular_box3').css({height:powder_res_circle_wid*1.2});


    $('#clothes').css({bottom:footer_img2_height+wid*(.45)-(wid*(.225)-(washing_machine_height)/2)});

    $('#clothes').css*{height:hei*(.3)};
    powder_height=(.1*wid)*(318/240)
    $('#powder').css({height:powder_height});


    res_powder_height=(.1*wid)*(318/240)
    $('#res_powder').css({height:res_powder_height});

    // res_video_svg1_top=$('#res_video_svg1').offset().top;
    // $('#res_video_1').css({top:res_video_svg1_top});
    // alert(res_video_svg1_top);

    if(resized==0){
      TweenLite.to('#content_svg1',0,{x:-wid});
      TweenLite.to('#softner_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#pt1',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#content1_image1',0,{scale:0.001,transformOrigin:"50% 50%"});

      // TweenLite.to('#res_content_svg1',0,{x:-wid*1.2});
      // TweenLite.to('#res_pt1',0,{scale:0.001,transformOrigin:"50% 50%"});
      // TweenLite.to('#res_clipping_image1',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#res_softner_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_powder_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_liquid_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_liquid_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#washing_clothes_circle',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('.washing_clothes_circle2',0,{scale:0,transformOrigin:"50% 50%"});



      



      TweenLite.to('#footer1_image',0,{opacity:0});
      TweenLite.to('#footer2_image',0,{opacity:0});
      TweenLite.to('#footer3_image',0,{opacity:0});

    // TweenLite.to('#tp_img2',0,{bottom:0,scale:.8,opacity:0});



      TweenLite.to('#res_video_1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_video_2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_video_3',0,{scale:0,transformOrigin:"50% 50%"});

      TweenLite.to('#play_btn',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#play_btn2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#play_btn3',0,{scale:0,transformOrigin:"50% 50%"});


      TweenLite.to('#video_svg1',0,{left:'120%'});
      TweenLite.to('#drag_end_pt1',0,{x:-.5*wid});
      TweenLite.to('#draggable_iron',0,{x:.3*wid});

      TweenLite.to('#liquid_basket',0,{x:.7*wid});
      TweenLite.to('#washing_clothes',0,{x:-.5*wid});

      TweenLite.to('#washing_machine',0,{x:.5*wid,y:'-50%'});
      TweenLite.to('#powder',0,{x:-.5*wid,y:'-50%'});

      TweenLite.to('#video_svg2',0,{left:'120%'});
      TweenLite.to('#video_svg3',0,{left:'120%'});

      // TweenLite.to('#clothes',0,{y:-innerHeight,display:'none'});
      TweenLite.to('#content_svg2',0,{x:wid*.18});
      TweenLite.to('#pt1_2',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#softner_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#content1_image2',0,{scale:0.001,transformOrigin:"50% 50%"});

      TweenLite.to('#res_content_svg1',0,{x:-wid*.19});
      TweenLite.to('#res_content2_svg1',0,{x:-wid*.19});
      TweenLite.to('#res_content3_svg1',0,{x:-wid*.19});

      TweenLite.to('#res_content2_svg2',0,{x:-wid*.23});
      TweenLite.to('#res_content3_svg2',0,{x:-wid*.23});



      // TweenLite.to('#res_content_svg2',0,{x:wid*.1});
      // TweenLite.to('#res_pt1_2',0,{scale:0.001,transformOrigin:"50% 50%"});
      // TweenLite.to('#res_clipping_image2',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#res_softner_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_softner_circular_box3',0,{scale:0,transformOrigin:"50% 50%"});

      TweenLite.to('#res_powder_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#res_powder_circular_box3',0,{scale:0,transformOrigin:"50% 50%"});


      TweenLite.to(".clothes_item",0,{display:"none"});
      TweenLite.to(".liquid_clothes_item",0,{display:"none"});


      TweenLite.to('#softner_circular_box3',0,{display:'none',scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#powder_circular_box3',0,{display:'none',scale:0,transformOrigin:"50% 50%"});

      TweenLite.to('#content2_svg1',0,{x:-wid});
      TweenLite.to('#pt2_1',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#powder_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#content2_image1',0,{scale:0.001,transformOrigin:"50% 50%"});

      TweenLite.to('#liquid_circular_box1',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#liquid_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#liquid_circular_box3',0,{scale:0,transformOrigin:"50% 50%"});
      TweenLite.to('#liquid_circular_box4',0,{scale:0,transformOrigin:"50% 50%"});

      // TweenLite.to('#content2_svg2',0,{x:wid*1.3});
      // TweenLite.to('#content2_svg2',0,{x:-wid*.005});

      TweenLite.to('#pt2_2',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#content2_image2',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#powder_circular_box2',0,{scale:0,transformOrigin:"50% 50%"});


      TweenLite.to('#content3_svg1',0,{x:-wid});
      TweenLite.to('#content3_svg2',0,{x:wid*2});


      TweenLite.to('#pt3_2',0,{scale:0.001,transformOrigin:"50% 50%"});
      TweenLite.to('#content3_image2',0,{scale:0.001,transformOrigin:"50% 50%"});
    }

    //khatchin start


      machine_left=wid-parseInt($('#washing_machine').css('right'))-parseInt($('#washing_machine').css('width'));
      powder_right=parseInt($('#powder').css('left'))+parseInt($('#powder').css('width'))-16;
      distance2=machine_left-powder_right;
      old_left=$('#powder').css('left');
          
      $('#khatchin2').css({width:distance2-110,left:powder_right+40});
      $('#khatchin2_ar').css({left:powder_right+50+distance2-100});
      $('#khatchin2_txt').css({left:powder_right+40});
     
      basket_right=parseInt($('#drag_end_pt1').css('left'))+parseInt($('#drag_end_pt1').css('width'));
      iron_left=wid-parseInt($('#draggable_iron').css('right'))-parseInt($('#draggable_iron').css('width'))-16;
      distance=iron_left-basket_right;
      old_right=$('#draggable_iron').css('right');


      $('#khatchin').css({width:distance-50,left:basket_right+30});
      $('#khatchin_ar').css({left:basket_right+30});
      $('#khatchin_txt').css({left:basket_right+30+distance-50});

      TweenLite.to("#khatchin",0,{y:-(.2*wid)*260/389/2,width:distance,left:basket_right+30});
      TweenLite.to("#khatchin_ar",0,{y:-(.2*wid)*260/389/2});
      TweenLite.to("#khatchin_txt",0,{y:-(.2*wid)*260/389/2-10});
    //khatchin end

    // TweenLite.to('#res_tp_svg1',0,{scale:1.25,transformOrigin:"50% 50%"});
    // TweenLite.to('#res_svg1_sh1',0,{scale:1.07,transformOrigin:"50% 50%"});

    tp_svg1_height=hei*.9;
    $('.tp_svg1').css({height:tp_svg1_height});
    tp_svg2_height=hei*.9;
    $('.tp_svg2').css({height:tp_svg2_height});
    tp_svg3_height=hei*.9;
    $('.tp_svg3').css({height:tp_svg3_height});

    tp_img1_height=hei*.88;
    $('.tp_img1').css({height:tp_img1_height});
    tp_img2_height=hei*.88;
    $('.tp_img2').css({height:tp_img2_height});
    tp_img3_height=hei*.88;
    $('.tp_img3').css({height:tp_img3_height});

    res_tp_img_height=(.7*hei);
    $('.res_tp_img').css({height:res_tp_img_height});
    res_tp_img2_height=(.7*hei);
    $('.res_tp_img2').css({height:res_tp_img2_height});
    res_tp_img3_height=(.65*hei);
    $('.res_tp_img3').css({height:res_tp_img3_height});

    

    // } 
  } //end of initial

  
  var tl = new TimelineMax();
  tl.to("#draggable_iron", 1, {marginRight:-20, repeatDelay:0,ease: Power1.easeOut, repeat:-1, yoyo:true})
  tl.play();

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

  var xx;
  var drag_happened1=false;
  $('#draggable_iron').mousedown(function(e){
    if(drag_happened1==false){
      tl.stop();
      setTimeout(function(){
          $('#khatchin_txt').css({opacity:0});
      },300);

      iron_mousedown_flag=true;
      xx=(wid-e.clientX)-parseInt($('#draggable_iron').css('right'));
      TweenLite.to("#draggable_iron",0,{right:(wid-e.clientX)-xx});

    }

      // alert('ddd');

  });
    $('#draggable_iron').mouseout(function(e){
        $(".after_drag").attr("src", "/Content/client/wp-content/themes/uniqo/img/1-1-1.png");
        $(".draggable_iron2").css("display", "none")
    });

  var basket_right=parseInt($('#drag_end_pt1').css('left'))+parseInt($('#drag_end_pt1').css('width'));
  var iron_left=wid-parseInt($('#draggable_iron').css('right'))-parseInt($('#draggable_iron').css('width'))-16;
  var distance=iron_left-basket_right;
  var old_right=$('#draggable_iron').css('right');


  $('#khatchin').css({width:distance-50,left:basket_right+30});
  $('#khatchin_ar').css({left:basket_right+30});
  $('#khatchin_txt').css({left:basket_right+30+distance-50});

  TweenLite.to("#khatchin",0,{y:-(.2*wid)*260/389/2,width:distance,left:basket_right+30});
  TweenLite.to("#khatchin_ar",0,{y:-(.2*wid)*260/389/2});
  TweenLite.to("#khatchin_txt",0,{y:-(.2*wid)*260/389/2-10});
  TweenLite.to('#khatchin',400,{backgroundPosition:"-5000px"});
  TweenLite.to('#khatchin2',400,{backgroundPosition:"5000px"});

  $('body').mousemove(function(e){
    if(iron_mousedown_flag){
        $('#khatchin_txt').css({display:'none'});
      var basket_right=parseInt($('#drag_end_pt1').css('left'))+parseInt($('#drag_end_pt1').css('width'));
      var iron_left=wid-parseInt($('#draggable_iron').css('right'))-parseInt($('#draggable_iron').css('width'))-16;

      console.log(basket_right+','+iron_left+','+iron_mousedown_flag);
      var new_right=(wid-e.clientX)-xx;

      if(basket_right>iron_left+80){
        
        drag_happened();
      }

      if(iron_left-basket_right>distance){
        new_right=old_right;
        iron_mousedown_flag=false;
      }

        TweenLite.to("#draggable_iron",0,{right:new_right});
        TweenLite.to("#khatchin",0,{width:iron_left-basket_right+20});
    }
  });
  function drag_happened(){
    iron_mousedown_flag=false;
      TweenLite.to('#drag_end_pt1',1,{left:'-40%',ease: Power4.easeOut});
      TweenLite.to('#after_drag',1,{left:'14%',ease: Power4.easeOut});
      TweenLite.to('#softner_circular_box3',1.7,{display:'block',scale:0.99,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1, 0.5)});
      TweenLite.to('#draggable_iron',1,{rotation:115,right:'50%'});
      $('#khatchin').css({display:'none'});
      $('#khatchin_ar').css({display:'none'});
      $('#khatchin_txt').css({display:'none'});
      drag_happened1=true;

  }
  $('#draggable_iron').mouseup(function(e){
    var basket_right=parseInt($('#drag_end_pt1').css('left'))+parseInt($('#drag_end_pt1').css('width'));
      var iron_left=wid-parseInt($('#draggable_iron').css('right'))-parseInt($('#draggable_iron').css('width'))-16;

      console.log(basket_right+','+iron_left+','+iron_mousedown_flag);
      var new_right=(wid-e.clientX)-xx;

      if(basket_right>iron_left-wid*.15){
        drag_happened();
      }

    iron_mousedown_flag=false;
  });

  var xpowder;
  $('#powder').mousedown(function(e){
    powder_mousedown_flag=true;
    xpowder=(e.clientX)-parseInt($('#powder').css('left'));
  });

  // var machine_left=wid-(parseInt($('#washing_machine').css('left'))-parseInt($('#washing_machine').css('width')))-parseInt($('#washing_machine').css('width'));

  var machine_left=parseInt($('#washing_machine').css('left'));
  var powder_right=parseInt($('#powder').css('left'))+parseInt($('#powder').css('width'))-16;
  var distance2=machine_left-powder_right;
  var old_left=$('#powder').css('left');
      
  $('#khatchin2').css({width:distance2-110,left:powder_right+40});
  $('#khatchin2_ar').css({left:powder_right+50+distance2-100});
  $('#khatchin2_txt').css({left:powder_right+40});
 

  var stop_mousemove=false;
  $('body').mousemove(function(e){
    if(powder_mousedown_flag){
    $('#khatchin2_txt').css({display:'none'});
  var machine_left=parseInt($('#washing_machine').css('left'));
      
      var powder_right=parseInt($('#powder').css('left'))+parseInt($('#powder').css('width'))-16;
      var new_left=(e.clientX)-xpowder;


      console.log(machine_left+','+powder_right+','+powder_mousedown_flag);

      TweenLite.to("#khatchin2",0,{left:powder_right+40,width:machine_left-powder_right-100});
      if(machine_left-powder_right>distance2){
        TweenLite.to("#khatchin2",0,{left:powder_right+65,width:machine_left-powder_right-120});
        new_left=old_left;
        powder_mousedown_flag=false;
      }

      if(powder_right>machine_left-50){
      // stop_mousemove=true;
        if(!stop_mousemove){
          var washing_tl = new TimelineMax();
          washing_tl.fromTo("#washing_round",.5,{rotation:"0"},{rotation:"360",ease:Linear.easeNone,repeat:-1});
          washing_tl.play();
          stop_mousemove=true;
        }
        TweenLite.to('#powder_circular_box3',1.7,{display:'block',scale:0.99,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1, 0.5)});
        TweenLite.fromTo('#powder',.2,{x:0},{x:300,opacity:0});
        $('#khatchin2_txt').css({display:'none'});
        $('#khatchin2_ar').css({display:'none'});
        $('#khatchin2').css({display:'none'});

      }

      // TweenLite.to("#draggable_iron",0,{right:new_right});
      TweenLite.to("#powder",0,{left:new_left});

    }
  });
 
    var mouse_icon_tl = new TimelineMax();
    mouse_icon_tl.fromTo("#mouse_icon", 1,{bottom:2,ease: Power2.easeOut},{bottom:22,ease: Power2.easeOut,repeat:-1, yoyo:true});
    mouse_icon_tl.play();


    var mouse_button_tl = new TimelineMax();
    mouse_button_tl.fromTo("#mouse_button", 1,{y:180,ease: Power2.easeOut,opacity:0,scale:.1,transformOrigin: "50% 50%"},{y:20,ease: Power2.easeOut,opacity:1,scale:.8, repeat:-1, yoyo:true});
    mouse_button_tl.play();

  
    var scroll_txt_tl = new TimelineMax();
    scroll_txt_tl.fromTo("#scroll_txt", 1,{bottom:8,ease: Power2.easeOut},{bottom:15,ease: Power2.easeOut,repeat:-1, yoyo:true});
    scroll_txt_tl.play();

  $('#powder').mouseup(function(e){
   var machine_left=parseInt($('#washing_machine').css('left'));
      var powder_right=parseInt($('#powder').css('left'))+parseInt($('#powder').css('width'))-16;
  
      console.log(basket_right+','+iron_left+','+iron_mousedown_flag);
      var new_right=(wid-e.clientX)-xx;

      if(powder_right>machine_left-450){
       if(!stop_mousemove){
          var washing_tl = new TimelineMax();
          washing_tl.fromTo("#washing_round",.5,{rotation:"0"},{rotation:"360",ease:Linear.easeNone,repeat:-1});
          washing_tl.play();
          stop_mousemove=true;
        }
        TweenLite.to('#powder_circular_box3',1.7,{display:'block',scale:0.99,transformOrigin:"50% 50%",ease:Elastic.easeOut.config(1, 0.5)});
        TweenLite.fromTo('#powder',.2,{x:0},{x:300,opacity:0});
        $('#khatchin2_txt').css({display:'none'});
        $('#khatchin2_ar').css({display:'none'});
        $('#khatchin2').css({display:'none'});
      }

    powder_mousedown_flag=false;
  });






  $('#play_btn').click(function(){
    $('#video_popup').fadeIn(100);
    $('#close_popup').fadeIn(100);
    $('#ad_video').get(0).play();

  });

  $('#play_btn2').click(function(){
    $('#video_popup2').fadeIn(100);
    $('#close_popup2').fadeIn(100);
    $('#ad_video2').get(0).play();

  });
  $('#play_btn3').click(function(){
    $('#video_popup3').fadeIn(100);
    $('#close_popup3').fadeIn(100);
    $('#ad_video3').get(0).play();
  });

  $('#close_popup').click(function(){
    $('#video_popup').fadeOut(100);
    $('#ad_video').get(0).pause();
    $('#close_popup').fadeOut(100);
  });

    $('#close_popup2').click(function(){
    $('#video_popup2').fadeOut(100);
    $('#ad_video2').get(0).pause();
    $('#close_popup2').fadeOut(100);
  }); 

   $('#close_popup3').click(function(){
    $('#video_popup3').fadeOut(100);
    $('#ad_video3').get(0).pause();
    $('#close_popup3').fadeOut(100);
  });      

  $('#res_play_btn').click(function(){
    $('#video_popup').fadeIn(100);
    $('#close_popup').fadeIn(100);
    $('#ad_video').get(0).play();

  });
  $('#res_play_btn2').click(function(){
    $('#video_popup2').fadeIn(100);
    $('#close_popup2').fadeIn(100);
    $('#ad_video2').get(0).play();

  });
  $('#res_play_btn2').click(function(){
    $('#video_popup2').fadeIn(100);
    $('#close_popup2').fadeIn(100);
    $('#ad_video2').get(0).play();

  });

  $('#res_play_btn3').click(function(){
    $('#video_popup3').fadeIn(100);
    $('#close_popup3').fadeIn(100);
    $('#ad_video3').get(0).play();

  });

  
  var smoothness=true;

  var controller = new ScrollMagic.Controller({}); 

  //timeline e vurude svg tabe aslie 1
  var tp1_in_tl=new TimelineLite({paused:true});
  tp1_in_tl
    .fromTo('#tp1_path1',1.5,{rotation:-180},{morphSVG:'#tp1_path12',rotation:0,ease: Power4.easeOut })
    .fromTo('#tp1_path2',1.5,{rotation:180},{morphSVG:'#tp1_path22',rotation:0,ease: Power4.easeOut },"-=1.5")
    .fromTo('#dot1',1.5,{rotation:0},{morphSVG:'#line1',rotation:0,ease: Power4.easeOut })
    .to('#svg1_rect',1,{display:"block",ease: Power4.easeOut},"-=1")
    .fromTo('#svg1_rect_txt',1,{opacity:0},{opacity:1},"-=1")
    .fromTo('#dot2',1.5,{rotation:0},{morphSVG:'#line2',rotation:0,ease: Power4.easeOut },"-=1.5")
    .fromTo('#tp1_title',1,{opacity:0},{opacity:1},"-=2")
    .fromTo('#tp1_subtitle',1,{opacity:0},{opacity:1},"-=1.5")
    .fromTo('#tp1_subtitle2',1,{opacity:0},{opacity:1},"-=1.5")

    ;
    var welcome_tl=new TimelineLite({paused:true});
      welcome_tl
      
    .fromTo('#softlan_welcome',1,{opacity:1},{opacity:0,ease: Power1.easeOut},"+=.5")
    // .to('#softlan_welcome',.2,{height:'1px',ease: Power1.easeOut})
    // .to('#softlan_welcome',3,{height:0,ease: Power1.easeOut})
    // .to('#menu',1.5,{className:"-=menu2"},"+=1")
    // .to('#softlan_logo',1.5,{className:"-=softlan_logo2",ease: Power1.easeOut},"-=1.5")
    // .to('#mouse_icon',.5,{visibility:"visible",ease: Power1.easeOut},"-=1.5")
    // .to('#scroll_txt',.5,{visibility:"visible",ease: Power1.easeOut},"-=1.5")
    // .to('#cssda-badge',.5,{visibility:"visible",ease: Power1.easeOut},"-=.2")
    // .fromTo('.language_icon',2,{opacity:0},{opacity:1,ease: Power1.easeOut})

    .to('#softlan_welcome',.2,{x:0,onComplete:function(){
      tp1_in_tl.play();
    }},"-=1")
    .to('#softlan_welcome',.2,{height:'0px',ease: Power1.easeOut})
    ;
    if(wid<650){
      TweenLite.to("#mouse_icon",0,{display:"none"});
      TweenLite.to("#scroll_txt",0,{display:"none"});
      TweenLite.to("#cssda-badge",0,{display:"none"});
    }


      welcome_tl.play();




   $(window).mousewheel(function(e, delta) {
        $('body,html').stop();
      
    });
   



  $(window).keydown(function(e){

    if(e.keyCode==27)//Esc
    {
      welcome_tl.seek('-=0',false);
    }
  });  

     


  $('#mouse_icon').click(function(){
      var top_of_svg1_1=parseInt($("#content_svg1").offset().top+290);
      $('body,html').stop().animate({scrollTop:top_of_svg1_1}, 1000, 'easeOutQuad');

  });


   $(window).keydown(function(e){  

      topscroll=$(window).scrollTop(); 
      var top_of_tp_page1=parseInt($("#top_page1").offset().top);
      var top_of_tp_page2=parseInt($("#top_page2").offset().top);
      var top_of_tp_page3=parseInt($("#top_page3").offset().top);

      var top_of_svg1_1=parseInt($("#content_svg1").offset().top+290);
      var top_of_svg1_2=parseInt($("#content_svg2").offset().top+230);
      var top_of_svg2_1=parseInt($("#content2_svg1").offset().top+290);
      var top_of_svg2_2=parseInt($("#content2_svg2").offset().top+230);
      var top_of_svg3_1=parseInt($("#content3_svg1").offset().top+150);
      var top_of_svg3_2=parseInt($("#content3_svg2").offset().top+100);

      var top_of_softner_middle_div=parseInt($("#moving_pic_box").offset().top-150);
      var top_of_powder_middle_div=parseInt($("#powder_middle_div").offset().top-150);
      var top_of_liquid_middle_div=parseInt($("#liquid_middle_div").offset().top-300);
      var top_of_liquid_basket=parseInt($("#liquid_basket").offset().top-200)

      var top_of_footer1=parseInt($("#footer1_image").offset().top-((hei-parseInt($("#footer1_image").css('height')))/2))-30;
      var top_of_footer2=parseInt($("#footer2_image").offset().top-((hei-parseInt($("#footer2_image").css('height')))/2))-30;
      var top_of_footer3=parseInt($("#footer3_image").offset().top-((hei-parseInt($("#footer3_image").css('height')))/2))-30;



      if(e.keyCode==38|| e.keyCode==33)//up
      { 
        if(topscroll>top_of_tp_page1 && topscroll<=top_of_svg1_1){
          $('body,html').stop().animate({scrollTop:top_of_tp_page1}, 1200, 'easeInOutQuad');

        }
        else if(top_of_svg1_1<topscroll && topscroll<=top_of_svg1_2){
          $('body,html').stop().animate({scrollTop:top_of_svg1_1}, 1200, 'easeInOutQuad');

        }else if(top_of_svg1_2<topscroll && topscroll<=top_of_softner_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_svg1_2}, 1200, 'easeInOutQuad');

        
        }else if(top_of_softner_middle_div<topscroll && topscroll<=top_of_footer1){
          $('body,html').stop().animate({scrollTop:top_of_softner_middle_div}, 1200, 'easeInOutQuad');

        }else if(top_of_footer1<topscroll && topscroll<=top_of_tp_page2){
          $('body,html').stop().animate({scrollTop:top_of_footer1}, 1200, 'easeInOutQuad');

        }else if(top_of_tp_page2<topscroll && topscroll<=top_of_svg2_1){
          $('body,html').stop().animate({scrollTop:top_of_tp_page2}, 1200, 'easeInOutQuad');

        }else if(top_of_svg2_1<topscroll && topscroll<=top_of_svg2_2){
          $('body,html').stop().animate({scrollTop:top_of_svg2_1}, 1200, 'easeInOutQuad');

        }else if(top_of_svg2_2<topscroll && topscroll<=top_of_powder_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_svg2_2}, 1200, 'easeInOutQuad');

        }else if(top_of_powder_middle_div<topscroll && topscroll<=top_of_footer2){
          $('body,html').stop().animate({scrollTop:top_of_powder_middle_div}, 1200, 'easeInOutQuad');

        }else if(top_of_footer2<topscroll && topscroll<=top_of_tp_page3){
          $('body,html').stop().animate({scrollTop:top_of_footer2}, 1200, 'easeInOutQuad');

        }else if(top_of_tp_page3<topscroll && topscroll<=top_of_svg3_1){
          $('body,html').stop().animate({scrollTop:top_of_tp_page3}, 1200, 'easeInOutQuad');

        }else if(top_of_svg3_1<topscroll && topscroll<=top_of_svg3_2){
          $('body,html').stop().animate({scrollTop:top_of_svg3_1}, 1200, 'easeInOutQuad');

        }else if(top_of_svg3_2<topscroll && topscroll<=top_of_liquid_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_svg3_2}, 1200, 'easeInOutQuad');

        }else if(top_of_liquid_middle_div<topscroll && topscroll<=top_of_liquid_basket){
          $('body,html').stop().animate({scrollTop:top_of_liquid_middle_div}, 1200, 'easeInOutQuad');

        }else if(top_of_liquid_basket<topscroll && topscroll<=top_of_footer3){
          $('body,html').stop().animate({scrollTop:top_of_liquid_basket}, 1200, 'easeInOutQuad');

        }
        else if(topscroll>top_of_footer3){
          $('body,html').stop().animate({scrollTop:top_of_liquid_basket}, 1200, 'easeInOutQuad');

        }
            
        e.preventDefault();
      }
      else if(e.keyCode==40|| e.keyCode==34)//down
      {     
        console.log(top_of_svg1_1,topscroll);
        if(topscroll<top_of_svg1_1){
          $('body,html').stop().animate({scrollTop:top_of_svg1_1}, 1200, 'easeInOutQuad');

        }
        else if(top_of_svg1_1<=topscroll && topscroll<top_of_svg1_2){

          $('body,html').stop().animate({scrollTop:top_of_svg1_2}, 1200, 'easeInOutQuad');

        }else if(top_of_svg1_2<=topscroll && topscroll<top_of_softner_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_softner_middle_div}, 1200, 'easeInOutQuad');

        
        }else if(top_of_softner_middle_div<=topscroll && topscroll<top_of_footer1){
          $('body,html').stop().animate({scrollTop:top_of_footer1}, 1200, 'easeInOutQuad');

        }else if(top_of_footer1<=topscroll && topscroll<top_of_tp_page2){
          $('body,html').stop().animate({scrollTop:top_of_tp_page2}, 1200, 'easeInOutQuad');

        }else if(top_of_tp_page2<=topscroll && topscroll<top_of_svg2_1){
          $('body,html').stop().animate({scrollTop:top_of_svg2_1}, 1200, 'easeInOutQuad');

        }else if(top_of_svg2_1<=topscroll && topscroll<top_of_svg2_2){
          $('body,html').stop().animate({scrollTop:top_of_svg2_2}, 1200, 'easeInOutQuad');

        }else if(top_of_svg2_2<=topscroll && topscroll<top_of_powder_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_powder_middle_div}, 1200, 'easeInOutQuad');

        }else if(top_of_powder_middle_div<=topscroll && topscroll<top_of_footer2){
          $('body,html').stop().animate({scrollTop:top_of_footer2}, 1200, 'easeInOutQuad');

        }else if(top_of_footer2<=topscroll && topscroll<top_of_tp_page3){
          $('body,html').stop().animate({scrollTop:top_of_tp_page3}, 1200, 'easeInOutQuad');

        }else if(top_of_tp_page3<=topscroll && topscroll<top_of_svg3_1){
          $('body,html').stop().animate({scrollTop:top_of_svg3_1}, 1200, 'easeInOutQuad');

        }else if(top_of_svg3_1<=topscroll && topscroll<top_of_svg3_2){
          $('body,html').stop().animate({scrollTop:top_of_svg3_2}, 1200, 'easeInOutQuad');

        }else if(top_of_svg3_2<=topscroll && topscroll<top_of_liquid_middle_div){
          $('body,html').stop().animate({scrollTop:top_of_liquid_middle_div}, 1200, 'easeInOutQuad');

        }else if(top_of_liquid_middle_div<=topscroll && topscroll<top_of_liquid_basket){
          $('body,html').stop().animate({scrollTop:top_of_liquid_basket}, 1200, 'easeInOutQuad');

        }else if(top_of_liquid_basket<=topscroll && topscroll<top_of_footer3){
          $('body,html').stop().animate({scrollTop:top_of_footer3}, 1200, 'easeInOutQuad');

        }
        e.preventDefault();
      }

  });  




  // scene for second top page
  var btn_in2_scene=new ScrollMagic.Scene({triggerElement:"#top_page2",duration:'27%',triggerHook:.3})
  .addTo(controller)
  // .addIndicators() // add indicators (requires plugin)
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      tp2_tl.timeScale(1).play();

      // tp2_in();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      tp2_tl.timeScale(4).reverse();
    }  
  });  

  // scene for third top page
  var btn_in3_scene=new ScrollMagic.Scene({triggerElement:"#top_page3",duration:'27%',triggerHook:.1})
  .addTo(controller)
  // .addIndicators() // add indicators (requires plugin)
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      tp3_tl.timeScale(1).play();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      tp3_tl.timeScale(4).reverse();
    }  
  }); 

  // ✓ sahneye vurude svg 1 sectione 1
  var container1_svg1_in=new TimelineLite({paused:true});
  var container1_svg1_out=new TimelineLite({paused:true});
  var container1_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#content_svg1",duration:'5%',offset:hei*.22,triggerHook:0})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(!isFirefox){
        container1_svg1_in
          .to('#content_svg1',.05,{x:-wid*.23})
          .fromTo('#pt1',1,{scale:0.001,rotation:-100,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
          .fromTo('#content1_image1',0,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
          .fromTo('#clipping_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
          .to('#softner_circular_box1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
          ;
      }else{
      container1_svg1_in
        .to('#content_svg1',.05,{x:-wid*.23})
        .fromTo('#pt1',1,{scale:0.001,rotation:-90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content1_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .to('#softner_circular_box1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }

      container1_svg1_out.seek( '-=0', false );
      container1_svg1_in.play();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container1_svg1_out
        .to('#softner_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#clipping_image1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.1")
        .fromTo('#content1_image1',0,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#pt1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.1")
        .to('#content_svg1',0,{x:-wid*1.2})
        ;
      }else{
      container1_svg1_out
        .to('#softner_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#content1_image1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.1")
        .fromTo('#pt1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.1")
        .to('#content_svg1',0,{x:-wid*1.2})
        ;
      }

      container1_svg1_in.seek( '-=0', false );
      container1_svg1_out.play();
    }  
  });  
  if(!isFirefox && !isEdge && !isIE){
    var parala1_1 =new TimelineLite({paused:true});
    parala1_1
    .fromTo('#content1_image1',1,{y:-250},{y:250})
    .fromTo('#clipping_image1',1,{y:250},{y:-250},"=-1")
    ;
    var parala1_1_scene=new ScrollMagic.Scene({triggerElement:"#content_svg1",duration:'150%',offset:hei*.22,triggerHook:0})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala1_1)
    .on("enter",function(event){
      parala1_1.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }



  // responsive sahneye vurude svg 1 sectione 1
  var res_container1_svg1_in=new TimelineLite({paused:true});
  var res_svg1_1_flag=true;
  
  var res_container1_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content_svg1",duration:'5%',offset:hei*.22,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
      if(event.scrollDirection==='FORWARD'){
        if(res_svg1_1_flag){
        res_container1_svg1_in
          .to('#res_softner_circular_box1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5),onComplete:function(){
          }
        });
        res_container1_svg1_in.play();
        res_svg1_1_flag=false;
      }
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
    }
  }); 



  
  // ✓ sahneye vurude svg 1 sectione 2
  var container1_svg2_in=new TimelineLite({paused:true});
  var container1_svg2_out=new TimelineLite({paused:true});
  var container1_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#content_svg2",duration:'5%',offset:hei*.18,triggerHook:0.3})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(!isFirefox){
        container1_svg2_in
        .fromTo('#pt1_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content1_image2',0,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#clipping_image2',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#softner_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }else{
        container1_svg2_in
        .fromTo('#pt1_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content1_image2',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#softner_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }
      container1_svg2_out.seek('-=0',false);
      container1_svg2_in.play();
      
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container1_svg2_out
        .to('#softner_circular_box2',.3,{scale:.001,transformOrigin:"50% 50%"}) 
        .fromTo('#clipping_image2',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.2")
        .fromTo('#content1_image2',0,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut})
        .fromTo('#pt1_2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        ;
      }else{
        container1_svg2_out
        .to('#softner_circular_box2',.3,{scale:.001,transformOrigin:"50% 50%"}) 
        .fromTo('#content1_image2',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.2")
        .fromTo('#pt1_2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        ;
      }
      container1_svg2_in.seek('-=0',false);
      container1_svg2_out.play();
    }
  });


  if(!isFirefox && !isEdge && !isIE){
    var parala1_2 =new TimelineLite({paused:true});
    parala1_2
    .fromTo('#content1_image2',1,{y:-100},{y:300})
    .fromTo('#clipping_image2',1,{y:100},{y:-300},"=-1")
    ;
    var parala1_2_scene=new ScrollMagic.Scene({triggerElement:"#content_svg2",duration:'150%',offset:hei*.18,triggerHook:0.3})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala1_2)
    .on("enter",function(event){
      parala1_2.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }

  // responsive sahneye vurude svg 1 sectione 2
  var res_container1_svg2_in=new TimelineLite({paused:true});
  var res_svg1_2_flag=true;
  var res_container1_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content_svg2",duration:'1%',offset:hei*.18,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(wid<650){

          TweenLite.to("#res_tp_img",0,{display:"none"});
          TweenLite.to("#res_tp_svg1",0,{display:"none"});
      }
      if (res_svg1_2_flag) {
        res_container1_svg2_in
        .to('#res_softner_circular_box2',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        ;
        res_container1_svg2_in.play();
        res_svg1_2_flag=false;
      
      }
    }
    }).on("leave",function(event){
      if(event.scrollDirection==='REVERSE'){
        if(wid<650){

          TweenLite.to("#res_tp_img",0,{display:"block"});
          TweenLite.to("#res_tp_svg1",0,{display:"block"});
        }
        res_container1_svg2_in.stop();
      }
  });


  var iron_flag=0;
  var iron_in_scene=new ScrollMagic.Scene({triggerElement:"#moving_pic_box",duration:'10%',triggerHook:.6})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      if(!iron_flag){
        var iron_in=new TimelineLite({paused:true});
        iron_in
        .to('#drag_end_pt1',1,{x:0,ease: Power4.easeOut})
        .to('#draggable_iron',1,{x:0,ease: Power4.easeOut},"-=1")
        .to('#khatchin',1,{opacity:1,ease: Power4.easeOut},"-=.5")
        .to('#khatchin_ar',1,{opacity:1,ease: Power4.easeOut},'-=1')
        .to('#khatchin_txt',1,{opacity:1,ease: Power4.easeOut},'-=1')
        ;

        iron_in.play();
        iron_flag=1;
      }
      
    }
  }).on("leave",function(event){


  });


  var clothes_circle =new TimelineLite({paused:true});
        clothes_circle
        
          
          .fromTo("#washing_clothes",1,{rotation:"0"},{rotation:"360",ease:Linear.easeNone,repeat:-1},"-=3")

        ;
        clothes_circle.play();
  var liquid_basket_in =new TimelineLite({paused:true});
        liquid_basket_in
        .fromTo('.liquid_clothes_item',0.1,{display:'none'},{display:'block'})
        .to('#washing_clothes',.5,{x:0,ease: Power4.easeOut})
        .to('#liquid_circular_box3',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        .to('#liquid_basket',.8,{x:0,ease: Power4.easeOut})
        .to('#liquid_clothes_2',1.4,{top:"190%",rotation:120,right:'5%',ease: Power1.easeOut},"-=1.2")
        .to('#liquid_clothes_1',1.4,{top:"190%",rotation:-120,right:'5%',ease: Power1.easeOut},"-=1.2")
        .to('#liquid_clothes_5',1.4,{top:"190%",rotation:180,ease: Power1.easeOut},"-=1.2")
        .to('#liquid_clothes_3',1.4,{top:"190%",rotation:190,ease: Power1.easeOut},"-=1.2")
        .to('#liquid_clothes_6',1.4,{top:"190%",rotation:-100,right:'30%',ease: Power1.easeOut},"-=1.2")
        .to('#liquid_clothes_4',1.4,{top:"180%",rotation:120,right:'15%',ease: Power1.easeOut},"-=1.2")
        .to('#liquid_circular_box4',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=2.2")
          
          // .fromTo("#washing_clothes",1,{rotation:"0"},{rotation:"360",ease:Linear.easeNone,repeat:-1},"-=3")

        ;
  var liquid_basket_flag=0;
  var liquid_basket_in_scene=new ScrollMagic.Scene({triggerElement:"#liquid_middle_div",duration:'90%',triggerHook:.7,tweenChanges: smoothness})
  .addTo(controller)
  // .addIndicators()
  .setTween(liquid_basket_in)
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      // TweenLite.to('.liquid_clothes_item',0,{display:'block'});

 
        liquid_basket_in.play();
      
    }
  }).on("leave",function(event){

  });

  var powder_flag=0;
  var powder=new TimelineLite({paused:true});
         powder
          .to('#washing_machine',1,{x:0,y:'-50%',ease: Power4.easeOut})
          .to('#powder',1,{x:0,y:'-50%',ease: Power4.easeOut},"-=1")
          .to('#clothes_2',1.4,{top:"120%",rotation:120,right:'5%',ease: Power1.easeOut},"-=1.2")
          .to('#clothes_1',1.4,{top:"120%",rotation:120,right:'5%',ease: Power1.easeOut},"-=1.2")
          .to('#clothes_5',1.4,{top:"120%",rotation:-120,ease: Power1.easeOut},"-=1.2")
          .to('#clothes_3',1.4,{top:"120%",rotation:-100,ease: Power1.easeOut},"-=1.2")
          .to('#clothes_4',1.4,{top:"120%",rotation:30,right:'40%',ease: Power1.easeOut},"-=1.2")
          .fromTo('#khatchin2',1,{opacity:0},{opacity:1,ease: Power4.easeOut},"-=1")
          .fromTo('#khatchin2_ar',1,{opacity:0},{opacity:1,ease: Power4.easeOut},"-=1")
          .fromTo('#khatchin2_txt',1,{opacity:0},{opacity:1,ease: Power4.easeOut},"-=.5")
          ;
  var powder_in_scene=new ScrollMagic.Scene({triggerElement:"#powder_middle_div",duration:'70%',triggerHook:.8,tweenChanges: smoothness})
  .addTo(controller)
  // .addIndicators()
  .setTween(powder)
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      // if(!powder_flag){
        
          powder.play();
      //     powder_flag=1;
      //   }
      
    }
  }).on("leave",function(event){

  });
  var clothes_flag=0
  var clothes_in_scene=new ScrollMagic.Scene({triggerElement:"#powder_middle_div",duration:'10%',triggerHook:.8})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      if(!powder_flag){
        var clothes=new TimelineLite({paused:true});
        clothes
          
          // .to('#clothes',1,{y:0})
          
          ;
          
        clothes.play();
        clothes_flag=1;
      }
    }
  }).on("leave",function(event){

  });
  var res_iron_in_scene=new ScrollMagic.Scene({triggerElement:"#moving_pic_box",duration:'10%',triggerHook:.4})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      var res_iron_in=new TimelineLite({paused:true});
      res_iron_in
      .to('#res_softner_circular_box3',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
      ;
      res_iron_in.play();
    }
  }).on("leave",function(event){

  });
  TweenLite.to("#footer1_txt1",0,{opacity:0,y:-15});
  TweenLite.to("#footer1_txt2",0,{opacity:0,y:-15});
  TweenLite.to("#footer1_txt3",0,{opacity:0,y:-15});
  setTimeout(function(){


var video_svg1_scene=new ScrollMagic.Scene({triggerElement:"#footer1_image",duration:'10%',triggerHook:.4})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      var video_svg1_in=new TimelineLite({paused:true});

      video_svg1_in
      .to('#footer1_image',1,{opacity:1,ease :Power4.easeOut})
        .to('#video_svg1',1,{left:'20%',ease :Power4.easeOut})
        .to("#play_btn",1,{scale:.995,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        .to('#footer1_txt1',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.7")
        .to('#footer1_txt2',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        .to('#footer1_txt3',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        ;
      video_svg1_in.play();

    }
  }).on("leave",function(event){


  });



  },0);
  
  // var footer1_scene=new ScrollMagic.Scene({triggerElement:"#footer1_image",duration:'10%',triggerHook:.5})
  // .addTo(controller)
  // // .addIndicators()
  //   .on("enter",function(event){
  //   if(event.scrollDirection==='FORWARD'){
  //     var footer1_in=new TimelineLite({paused:true});
  //     footer1_in
  //       .fromTo('#footer1_image',1,{opacity:0},{opacity:1,ease :Power4.easeOut})
        
  //       ;
  //     footer1_in.play();
  //   }
  // }).on("leave",function(event){

  // });
  // var footer2_scene=new ScrollMagic.Scene({triggerElement:"#footer2_image",duration:'10%',triggerHook:.5})
  // .addTo(controller)
  // // .addIndicators()
  //   .on("enter",function(event){
  //   if(event.scrollDirection==='FORWARD'){
  //     var footer2_in=new TimelineLite({paused:true});
  //     footer2_in
  //       .fromTo('#footer2_image',1,{opacity:0},{opacity:1,ease :Power4.easeOut})
        
  //       ;
  //     footer2_in.play();
  //   }
  // }).on("leave",function(event){

  // });var footer3_scene=new ScrollMagic.Scene({triggerElement:"#footer3_image",duration:'10%',triggerHook:.5})
  // .addTo(controller)
  // // .addIndicators()
  //   .on("enter",function(event){
  //   if(event.scrollDirection==='FORWARD'){
  //     var footer3_in=new TimelineLite({paused:true});
  //     footer3_in
  //       .fromTo('#footer3_image',1,{opacity:0},{opacity:1,ease :Power4.easeOut})
        
  //       ;
  //     footer3_in.play();
  //   }
  // }).on("leave",function(event){

  // });

  TweenLite.to("#footer2_txt1",0,{opacity:0,y:-15});
  TweenLite.to("#footer2_txt2",0,{opacity:0,y:-15});
  TweenLite.to("#footer2_txt3",0,{opacity:0,y:-15});

  var video_svg2_scene=new ScrollMagic.Scene({triggerElement:"#footer2_image",duration:'10%',triggerHook:.4})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      var video_svg2_in=new TimelineLite({paused:true});
      video_svg2_in
        .to('#footer2_image',1,{opacity:1,ease :Power4.easeOut})

        .to('#video_svg2',1,{left:'20%',ease :Power4.easeOut})
        .to("#play_btn2",1,{scale:.995,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        .to('#footer2_txt1',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.7")
        .to('#footer2_txt2',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        .to('#footer2_txt3',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        ;
      video_svg2_in.play();
    }
  }).on("leave",function(event){

  });


  TweenLite.to("#footer3_txt1",0,{opacity:0,y:-15});
  TweenLite.to("#footer3_txt2",0,{opacity:0,y:-15});
  TweenLite.to("#footer3_txt3",0,{opacity:0,y:-15});
  var video_svg3_scene=new ScrollMagic.Scene({triggerElement:"#footer3_image",duration:'10%',triggerHook:.5})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      var video_svg3_in=new TimelineLite({paused:true});
      video_svg3_in
        .to('#footer3_image',1,{opacity:1,ease :Power4.easeOut})
        .to('#video_svg3',1,{left:'20%',ease :Power4.easeOut})
        .to("#play_btn3",1,{scale:.995,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        .to('#footer3_txt1',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.7")
        .to('#footer3_txt2',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        .to('#footer3_txt3',1,{opacity:1,ease :Power4.easeOut,y:0},"-=.85")
        ;
      video_svg3_in.play();
      
    }
  }).on("leave",function(event){

  });

  var res_video_svg1_scene=new ScrollMagic.Scene({triggerElement:"#res_video_svg1",duration:'10%',triggerHook:.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      var res_video_svg1_in=new TimelineLite({paused:true});
      res_video_svg1_in
      .to('#res_video_1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
        ;
      res_video_svg1_in.play();
    }
  }).on("leave",function(event){
 

  });

  var res_video_svg2_scene=new ScrollMagic.Scene({triggerElement:"#res_video_svg2",duration:'10%',triggerHook:.5})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      var res_video_svg2_in=new TimelineLite({paused:true});
      res_video_svg2_in

      .to('#res_video_2',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)});
      res_video_svg2_in.play();
      
    }
  }).on("leave",function(event){

  });

  var res_video_svg3_scene=new ScrollMagic.Scene({triggerElement:"#res_video_svg3",duration:'10%',triggerHook:.5})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      var res_video_svg3_in=new TimelineLite({paused:true});
      res_video_svg3_in
      .to('#res_video_3',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)});
      res_video_svg3_in.play();
    }
  }).on("leave",function(event){

  });

//sahneye vurude svg 2 sectione 1
  var container2_svg1_in=new TimelineLite({paused:true});
  var container2_svg1_out=new TimelineLite({paused:true});
 
  var container2_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#content2_1",duration:'20%',offset:hei*.4,triggerHook:.7})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      TweenLite.to('#content2_svg1',0,{x:-wid*.23});
      if(!isFirefox){
        container2_svg1_in
        .fromTo('#pt2_1',1,{scale:0.001,rotation:-90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content2_image1',0,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#clipping2_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#powder_circular_box1',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }else{
        container2_svg1_in
        .fromTo('#pt2_1',1,{scale:0.001,rotation:-90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content2_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#powder_circular_box1',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }
      container2_svg1_out.seek('-=0',false);
      container2_svg1_in.play();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container2_svg1_out
        .to('#powder_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#clipping2_image1',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.3")
        .fromTo('#content2_image1',0,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#pt2_1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.2")
        // .to('#clothes',0,{display:'none'})
        .to('#content2_svg1',0,{x:-wid})
        ;
      }else{
        container2_svg1_out
        .to('#powder_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#content2_image1',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.3")
        .fromTo('#pt2_1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.2")
        // .to('#clothes',0,{display:'none'})
        .to('#content2_svg1',0,{x:-wid})
        ;

      }
      container2_svg1_in.seek('-=0',false);
      container2_svg1_out.play();
    }   
  });  
 
  if(!isFirefox && !isEdge && !isIE){
    var parala2_1 =new TimelineLite({paused:true});
    parala2_1
    .fromTo('#content2_image1',1,{y:-50},{y:250})
    .fromTo('#clipping2_image1',1,{y:50},{y:-250},"=-1")
    ;
    var parala2_1_scene=new ScrollMagic.Scene({triggerElement:"#content2_1",duration:'150%',offset:hei*.4,triggerHook:.7})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala2_1)
    .on("enter",function(event){
      parala2_1.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }

  var res_container2_svg1_in=new TimelineLite({paused:true});
  var res_svg2_1_flag=true;
  var res_container2_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content2_svg1",duration:'1%',offset:hei*.18,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if (res_svg2_1_flag) {


      res_container2_svg1_in
        .to('#res_powder_circular_box1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5),onComplete:function(){
          if(wid<650){
            TweenLite.to('#res_tp_img2',0,{display:'none'});
            TweenLite.to('#res_tp_svg2',0,{display:'none'});
          }
        }});

        ;
      res_container2_svg1_in.play();
      res_svg2_1_flag=false;

      
    }
  }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
          if(wid<650){
            TweenLite.to('#res_tp_img2',0,{display:'block'});
            TweenLite.to('#res_tp_svg2',0,{display:'block'});
        }
    }
  });

  // sahneye vurude svg 2 sectione 2
  var container2_svg2_in=new TimelineLite({paused:true});
  var container2_svg2_out=new TimelineLite({paused:true});
  var container2_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#content2_2",duration:'30%',offset:hei*.3,triggerHook:0.7})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(!isFirefox){
        container2_svg2_in
        .fromTo('#pt2_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content2_image2',0,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#clipping2_image2',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('.clothes_item',0,{display:'none'},{display:'block'})
        .fromTo('#powder_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }else{
        container2_svg2_in
        .fromTo('#pt2_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content2_image2',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('.clothes_item',0,{display:'none'},{display:'block'})
        .fromTo('#powder_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;

      }
      container2_svg2_out.seek('-=0',false);
      container2_svg2_in.play();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container2_svg2_out
        .fromTo('.clothes_item',0,{display:'block'},{display:'none'})
        .fromTo('#clipping2_image2',.4,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut})
        .fromTo('#content2_image2',0,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut})
        .fromTo('#pt2_2',.4,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        .to('#powder_circular_box2',.4,{scale:.001,transformOrigin:"50% 50%"},"-=.3")
        ;
      }else{
        container2_svg2_out
        .fromTo('.clothes_item',0,{display:'block'},{display:'none'})
        .fromTo('#content2_image2',.4,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%",ease: Power1.easeOut})
        .fromTo('#pt2_2',.4,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        .to('#powder_circular_box2',.4,{scale:.001,transformOrigin:"50% 50%"},"-=.3")
        ;

      }
      container2_svg2_in.seek('-=0',false);
      container2_svg2_out.play();
    }
  });


  if(!isFirefox && !isEdge && !isIE){
    var parala2_2 =new TimelineLite({paused:true});
    parala2_2
    .fromTo('#content2_image2',1,{y:-50},{y:250})
    .fromTo('#clipping2_image2',1,{y:50},{y:-250},"=-1")
    ;
    var parala2_2_scene=new ScrollMagic.Scene({triggerElement:"#content2_2",duration:'150%',offset:hei*.3,triggerHook:0.7})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala2_2)
    .on("enter",function(event){
      parala2_2.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }


  var res_container2_svg2_in=new TimelineLite({paused:true});
  var res_svg2_2_flag=true;
  var res_container2_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content2_svg2",duration:'1%',offset:hei*.18,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(wid<650){
          TweenLite.to("#res_tp_img2",0,{display:"none"});
          TweenLite.to("#res_tp_svg2",0,{display:"none"});
      }
      if (res_svg2_2_flag) {
        res_container2_svg2_in
          .to('#res_powder_circular_box2',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
          ;
        res_container2_svg2_in.play();
        res_svg2_2_flag=false;
      }
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(wid<650){
        TweenLite.to("#res_tp_img2",0,{display:"block"});
        TweenLite.to("#res_tp_svg2",0,{display:"block"});
      }
      res_container2_svg2_in.stop();
    }

  });

  var res_container3_svg1_in=new TimelineLite({paused:true});
  var res_svg3_1_flag=true;
  var res_container3_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content3_svg1",duration:'1%',offset:hei*.18,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if (res_svg3_1_flag) {
        res_container3_svg1_in
          .to('#res_liquid_circular_box1',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
          ;
        res_container3_svg1_in.play();
        res_svg3_1_flag=false;
      }
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      res_container3_svg1_in.stop();
    }
  });



  var res_powder_circle_in_scene=new ScrollMagic.Scene({triggerElement:"#res_washing_machine",duration:'10%',triggerHook:.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){

      var res_powder_circle_in=new TimelineLite({paused:true});
      res_powder_circle_in
      .to('#res_powder_circular_box3',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
      ;
      res_powder_circle_in.play();
    }
  }).on("leave",function(event){

  });

//   var res_powder_circle_in_scene=new ScrollMagic.Scene({triggerElement:"#res_washing_machine",duration:'10%',triggerHook:.5})
//   .addTo(controller)
//   // .addIndicators()
//   .on("enter",function(event){
//     if(event.scrollDirection==='FORWARD'){

//    var res_powder_circle_in=new TimelineLite({paused:true});
//      res_powder_circle_in
//     .to('#res_powder_circular_box3',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
// ;
      
//       res_powder_circle_in.play();
      
//     }
//   }).on("leave",function(event){

// });

  var res_container3_svg2_in=new TimelineLite({paused:true});
  var res_svg3_2_flag=true;
  var res_container3_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#res_content3_svg2",duration:'1%',offset:hei*.18,triggerHook:0.5})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      if(wid<650){
        TweenLite.to("#res_tp_img3",0,{display:"none"});
        TweenLite.to("#res_tp_svg3",0,{display:"none"});

      }
      if (res_svg3_2_flag) {
      res_container3_svg2_in
        .to('#res_liquid_circular_box2',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})
      .to('#washing_clothes_circle',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)})

      .to('.washing_clothes_circle2',1,{scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=1")

        ;
      res_container3_svg2_in.play();
      res_svg3_2_flag=false;
      }
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(wid<650){
          TweenLite.to("#res_tp_img3",0,{display:"block"});
          TweenLite.to("#res_tp_svg3",0,{display:"block"});
          res_svg3_2
        }
        res_container3_svg2_in.stop();
    }
  });


  var container3_svg1_out=new TimelineLite({paused:true});
  var container3_svg1_in=new TimelineLite({paused:true});
  var container3_svg1_in_scene=new ScrollMagic.Scene({triggerElement:"#content3_1",duration:'1%',offset:hei*.1,triggerHook:.7})
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      TweenLite.to('#content3_svg1',0,{x:0});
      if(!isFirefox){
        container3_svg1_in
        .fromTo('#pt3_1',1,{scale:0.001,rotation:-90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content3_image1',0,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#clipping3_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#liquid_circular_box1',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }else{
        container3_svg1_in
        .fromTo('#pt3_1',1,{scale:0.001,rotation:-90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content3_image1',1,{scale:0.001,transformOrigin:"50% 50%"},{scale:1,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#liquid_circular_box1',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;

      }

      container3_svg1_out.seek('-=0',false);
      container3_svg1_in.play();
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container3_svg1_out
        .to('#liquid_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#clipping3_image1',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.2")
        .fromTo('#content3_image1',0,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#pt3_1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.2")
        .to('#content3_svg1',0,{x:-wid})
        ;
      }else{
        container3_svg1_out
        .to('#liquid_circular_box1',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#content3_image1',.3,{scale:1,transformOrigin:"50% 50%"},{scale:.001,transformOrigin:"50% 50%"},"-=.2")
        .fromTo('#pt3_1',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:-90,ease: Power1.easeOut},"-=.2")
        .to('#content3_svg1',0,{x:-wid})
        ;
      }
      container3_svg1_in.seek('-=0',false);
      container3_svg1_out.play();
    }   
  });  



  if(!isFirefox && !isEdge && !isIE){
    var parala3_1 =new TimelineLite({paused:true});
    parala3_1
    .fromTo('#content3_image1',1,{y:-50},{y:250})
    .fromTo('#clipping3_image1',1,{y:50},{y:-250},"=-1")
    ;
    var parala3_1_scene=new ScrollMagic.Scene({triggerElement:"#content3_1",duration:'150%',offset:hei*.1,triggerHook:.7})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala3_1)
    .on("enter",function(event){
      parala3_1.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }


  var container3_svg2_out=new TimelineLite({paused:true});
  var container3_svg2_in=new TimelineLite({paused:true});
  var container3_svg2_in_scene=new ScrollMagic.Scene({triggerElement:"#content3_2",duration:'1%',offset:hei*.18,triggerHook:0.7})
  .addTo(controller)
  // .addIndicators()
    .on("enter",function(event){
    if(event.scrollDirection==='FORWARD'){
      TweenLite.to('#content3_svg2',0,{x:0});
      if(!isFirefox){
        container3_svg2_in
        .fromTo('#pt3_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content3_image2',0,{scale:0.001,rotation:20,transformOrigin:"50% 50%"},{scale:1,rotation:0,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#clipping3_image2',1,{scale:0.001,rotation:20,transformOrigin:"50% 50%"},{scale:1,rotation:0,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#liquid_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;
      }else{
        container3_svg2_in
        .fromTo('#pt3_2',1,{scale:0.001,rotation:90,transformOrigin:"50% 50%"},{scale:.995,rotation:0,ease: Power1.easeOut})
        .fromTo('#content3_image2',1,{scale:0.001,rotation:20,transformOrigin:"50% 50%"},{scale:1,rotation:0,transformOrigin:"50% 50%",ease: Power1.easeOut},"-=.6")
        .fromTo('#liquid_circular_box2',1,{opacity:0},{opacity:1,scale:1,transformOrigin:"50% 50%",ease: Elastic.easeOut.config(1, 0.5)},"-=.5")
        ;

      }
      container3_svg2_out.seek('-=0',false);
      container3_svg2_in.play();
      
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      if(!isFirefox){
        container3_svg2_out
        .to('#liquid_circular_box2',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#clipping3_image2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:20,transformOrigin:"50% 50%"},"-=.1")
        .fromTo('#content3_image2',0,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:20,transformOrigin:"50% 50%"})
        .fromTo('#pt3_2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        ;
      }else{
        container3_svg2_out
        .to('#liquid_circular_box2',.3,{scale:.001,transformOrigin:"50% 50%"})
        .fromTo('#content3_image2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:20,transformOrigin:"50% 50%"},"-=.1")
        .fromTo('#pt3_2',.3,{scale:1,rotation:0,transformOrigin:"50% 50%"},{scale:.001,rotation:90,ease: Power1.easeOut},"-=.2")
        ;
      }
      container3_svg2_in.seek('-=0',false);
      container3_svg2_out.play();
    }
  });



  if(!isFirefox && !isEdge && !isIE){
    var parala3_2 =new TimelineLite({paused:true});
    parala3_2
    .fromTo('#content3_image2',1,{y:-50},{y:250})
    .fromTo('#clipping3_image2',1,{y:50},{y:-250},"=-1")
    ;
    var parala3_2_scene=new ScrollMagic.Scene({triggerElement:"#content3_2",duration:'150%',offset:hei*.18,triggerHook:0.7})
    .addTo(controller)
    // .addIndicators()
    .setTween(parala3_2)
    .on("enter",function(event){
      parala3_2.play();
      if(event.scrollDirection==='FORWARD'){
      }
    }).on("leave",function(event){
    });
  }

  
//time line khoroje svg tabe asli 1
  var tp1_out=new TimelineLite({paused:true});
  tp1_out

  // .fromTo('#tp_img1',1,{opacity:1,scale:1},{scale:.8,opacity:0})
  .fromTo('#tp_img1',1,{opacity:1,scale:1},{scale:.8,opacity:0})
  .fromTo('#dot2',.01,{rotation:0},{morphSVG:'#dot2_tmp',rotation:0,opacity:0},"-=1")
  .fromTo('#dot1',1,{rotation:0},{morphSVG:'#dot1_tmp',rotation:0,opacity:0},"-=1")
  .fromTo('#svg1_rect_txt',.3,{opacity:1},{opacity:0},"-=1")
  .to('#svg1_rect',.3,{opacity:0},"-=.9")
  .fromTo('#tp1_subtitle2',.3,{opacity:1},{opacity:0},"-=.85")
  .fromTo('#tp1_subtitle',.3,{opacity:1},{opacity:0},"-=.8")
  .fromTo('#tp1_title',.3,{opacity:1},{opacity:0},"-=.75")
  .fromTo('#tp1_path1',1,{rotation:0},{morphSVG:'#tp1_path1_tmp',rotation:-180,opacity:0 },"-=.7")
  .fromTo('#tp1_path2',1,{rotation:0},{morphSVG:'#tp1_path2_tmp',rotation:-180,opacity:0 },"-=1")
  ;
  var tp1_out_scene=new ScrollMagic.Scene({offset:20,duration:'70%',triggerHook:.1,tweenChanges: smoothness})
  .setTween(tp1_out) 
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    // jump to end of the starting timeline animation 
      // TweenLite.to('#content_svg1',0,{x:-wid*.23});
    tp1_in_tl.seek( '-=0', false );

    tp1_out.play();
    if(event.scrollDirection==='FORWARD'){
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='REVERSE'){
      // TweenLite.to('#content_svg1',0,{x:-wid});

    }  
  }); 

//time line khoroje svg tabe asli 2

  var tp2_out=new TimelineLite({paused:true});
  tp2_out
  .fromTo('#tp_img2',1,{bottom:0,scale:1},{bottom:0,scale:.8,opacity:0})
  .fromTo('#tp2_dot2',.01,{rotation:0},{morphSVG:'#tp2_dot2_tmp',rotation:0,ease: Power4.easeOut,opacity:0},"-=1")
  .fromTo('#tp2_dot1',1,{rotation:0},{morphSVG:'#tp2_dot1_tmp',rotation:0,ease: Power4.easeOut,opacity:0},"-=1")
  .fromTo('#svg2_rect_txt',1,{opacity:1},{opacity:0},"-=1")
  .to('#svg2_rect',1,{display:"none",ease: Power4.easeOut},"-=.9")
  .fromTo('#tp2_subtitle2',1,{opacity:1},{opacity:0},"-=.85")
  .fromTo('#tp2_subtitle',1,{opacity:1},{opacity:0},"-=.8")
  .fromTo('#tp2_title',1,{opacity:1},{opacity:0},"-=.75")
  .fromTo('#tp2_path1',1,{rotation:0},{morphSVG:'#tp2_path1_tmp',rotation:-180,ease: Power4.easeOut,opacity:0 },"-=1")
  .fromTo('#tp2_path2',1,{rotation:0},{morphSVG:'#tp2_path2_tmp',rotation:-180,ease: Power4.easeOut,opacity:0 },"-=1")
  ;
  var tp2_out_scene=new ScrollMagic.Scene({triggerElement:"#top_page2",offset:hei*.6,duration:'70%',triggerHook:.5,tweenChanges: smoothness})
  .setTween(tp2_out) 
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    tp2_tl.seek( '-=0', false );
    tp2_out.play();

    if(event.scrollDirection==='FORWARD'){
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='FORWARD'){
    }  
  });  
//time line khoroje svg tabe asli 3

  var tp3_out=new TimelineLite({paused:true});
  tp3_out
  .fromTo('#tp_img3',1,{bottom:0,scale:1},{bottom:0,scale:.8,opacity:0})
  .fromTo('#tp3_dot2',.01,{rotation:0},{morphSVG:'#tp3_dot2_tmp',rotation:0,ease: Power4.easeOut,opacity:0},"-=1")
  .fromTo('#tp3_dot1',1,{rotation:0},{morphSVG:'#tp3_dot1_tmp',rotation:0,ease: Power4.easeOut,opacity:0},"-=1")
  .fromTo('#svg3_rect_txt',1,{opacity:1},{opacity:0},"-=1")
  .to('#svg3_rect',1,{display:"none",ease: Power4.easeOut},"-=.9")
  .fromTo('#tp3_subtitle2',1,{opacity:1},{opacity:0},"-=.85")
  .fromTo('#tp3_subtitle',1,{opacity:1},{opacity:0},"-=.8")
  .fromTo('#tp3_title',1,{opacity:1},{opacity:0},"-=.75")
  .fromTo('#tp3_path1',1,{rotation:0},{morphSVG:'#tp3_path1_tmp',rotation:-180,ease: Power4.easeOut,opacity:0 },"-=1")
  .fromTo('#tp3_path2',1,{rotation:0},{morphSVG:'#tp3_path2_tmp',rotation:-180,ease: Power4.easeOut,opacity:0 },"-=1")
  ;
  var tp3_out_scene=new ScrollMagic.Scene({triggerElement:"#top_page3",offset:hei*.6,duration:'70%',triggerHook:.5,tweenChanges: smoothness})
  .setTween(tp3_out) 
  .addTo(controller)
  // .addIndicators()
  .on("enter",function(event){
    tp3_tl.seek( '-=0', false );
    tp3_out.play();

    if(event.scrollDirection==='FORWARD'){
    }
  }).on("leave",function(event){
    if(event.scrollDirection==='FORWARD'){
    }  
  });

 

//   $(window).mousemove(function(e) {
//     //e.clientY
// // .fromTo('#content1_image1',1,{scale:1},{scale:1.2})
//     TweenLite.to('#content1_image1',0.05,{x:e.clientX/20,y:e.clientY/20,ease: Power1.easeOut});
//     TweenLite.to('#clipping_image1',0.05,{x:-e.clientX/20,y:-e.clientY/20,ease: Power1.easeOut});
//     TweenLite.to('#content1_image2',0.05,{x:-e.clientX/20,y:-e.clientY/20,ease: Power1.easeOut});
//     TweenLite.to('#clipping_image2',0.05,{x:e.clientX/20,y:e.clientY/20,ease: Power1.easeOut});


//           // my = e.clientY;
//           // mx = e.clientX;
//   }); 
  

  var tp2_tl=new TimelineLite({paused:true});

  tp2_tl
    // .to('#tp_img2',1,{bottom:0,scale:1,opacity:1})
    .fromTo('#tp2_path1',1.5,{rotation:-180},{morphSVG:'#tp2_path12',rotation:0,ease: Power4.easeOut })
    .fromTo('#tp2_path2',1.5,{rotation:180},{morphSVG:'#tp2_path22',rotation:0,ease: Power4.easeOut },"-=1.5")
    .fromTo('#tp2_dot1',1.5,{rotation:0},{morphSVG:'#tp2_line1',rotation:0,ease: Power4.easeOut })
    .fromTo('#tp2_dot2',1.5,{rotation:0},{morphSVG:'#tp2_line2',rotation:0,ease: Power4.easeOut },"-=1.5")
    .to('#svg2_rect',1,{display:"block",ease: Power4.easeOut},"-=1")
    .fromTo('#svg1_rect_txt',1,{opacity:0},{opacity:1},"-=1")
    .fromTo('#tp2_title',1,{opacity:0},{opacity:1},"-=2")
    .fromTo('#tp2_subtitle',1,{opacity:0},{opacity:1},"-=1.5")
    .fromTo('#tp2_subtitle2',1,{opacity:0},{opacity:1},"-=1.5")
  ;

  var tp3_tl=new TimelineLite({paused:true});
    tp3_tl
      .fromTo('#tp3_path1',1.5,{rotation:-180},{morphSVG:'#tp3_path12',rotation:0,ease: Power4.easeOut })
      .fromTo('#tp3_path2',1.5,{rotation:180},{morphSVG:'#tp3_path22',rotation:0,ease: Power4.easeOut },"-=1.5")
      .fromTo('#tp3_dot1',1.5,{rotation:0},{morphSVG:'#tp3_line1',rotation:0,ease: Power4.easeOut })
      .fromTo('#tp3_dot2',1.5,{rotation:0},{morphSVG:'#tp3_line2',rotation:0,ease: Power4.easeOut },"-=1.5")
      .to('#svg3_rect',1,{display:"block",ease: Power4.easeOut},"-=1")
      .fromTo('#svg3_rect_txt',1,{opacity:0},{opacity:1},"-=1")
      .fromTo('#tp3_title',1,{opacity:0},{opacity:1},"-=2")
      .fromTo('#tp3_subtitle',1,{opacity:0},{opacity:1},"-=1.5")
      .fromTo('#tp3_subtitle2',1,{opacity:0},{opacity:1},"-=1.5")
    ;

  $('#top_icon').click(function(){
    window.scrollTo(0, 0); 
  });

  $(document).ready(function(){
  });
  MorphSVGPlugin.convertToPath("polygon","line");

  $('#svg1_rect').hover(function(){
    TweenLite.to('#svg1_c1',1,{morphSVG: '#top_r_side1',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c2',1,{morphSVG: '#bottom_r_side1',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c3',1,{morphSVG: '#bottom_l_side1',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c4',1,{morphSVG: '#top_l_side1',rotation:0,ease: Power4.easeOut,opacity:1});
  },function(){
    TweenLite.to('#svg1_c1',1,{morphSVG: '#svg1_c1_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c2',1,{morphSVG: '#svg1_c2_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c3',1,{morphSVG: '#svg1_c3_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg1_c4',1,{morphSVG: '#svg1_c4_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
  });
  $('#svg2_rect').hover(function(){
    TweenLite.to('#svg2_c1',1,{morphSVG: '#top_r_side2',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c2',1,{morphSVG: '#bottom_r_side2',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c3',1,{morphSVG: '#bottom_l_side2',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c4',1,{morphSVG: '#top_l_side2',rotation:0,ease: Power4.easeOut,opacity:1});
  },function(){
    TweenLite.to('#svg2_c1',1,{morphSVG: '#svg2_c1_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c2',1,{morphSVG: '#svg2_c2_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c3',1,{morphSVG: '#svg2_c3_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg2_c4',1,{morphSVG: '#svg2_c4_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
  });
  $('#svg3_rect').hover(function(){
    TweenLite.to('#svg3_c1',1,{morphSVG: '#top_r_side3',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c2',1,{morphSVG: '#bottom_r_side3',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c3',1,{morphSVG: '#bottom_l_side3',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c4',1,{morphSVG: '#top_l_side3',rotation:0,ease: Power4.easeOut,opacity:1});
  },function(){
    TweenLite.to('#svg3_c1',1,{morphSVG: '#svg3_c1_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c2',1,{morphSVG: '#svg3_c2_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c3',1,{morphSVG: '#svg3_c3_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
    TweenLite.to('#svg3_c4',1,{morphSVG: '#svg3_c4_tmp',rotation:0,ease: Power4.easeOut,opacity:1});
  });

  $('.gr_cir').each(function(index,element) {
    $(this).click(function(){ 
      var ot = $('.top_page:eq('+index+')').offset().top ;
      $('body,html').stop().animate({scrollTop:ot}, 1000, 'easeOutQuad');
    }); 
  });

  if(wid<650){
      $('.gr_cir').each(function(index,element) {
    $(this).click(function(){ 
      var ot = $('.res_tp_img:eq('+index+')').offset().top ;
      $('body,html').stop().animate({scrollTop:ot}, 1000, 'easeOutQuad');
    }); 
  });

  }


  $(window).scroll(function(){
      topscroll=$(window).scrollTop();
      bottom_of_win=topscroll+hei;
      top_of_tp_page2=$("#top_page2").offset().top;
      top_of_tp_page3=$("#top_page3").offset().top;
      top_of_tp_page3=$("#top_page3").offset().top;

      if(topscroll>50){
        TweenLite.to("#mouse_icon",.5,{visibility:"hidden"});
        TweenLite.to("#scroll_txt",.5,{visibility:"hidden"});
        TweenLite.to("#top_icon",.5,{visibility:"visible"})
        $('#cssda-badge').fadeOut(100);

        // TweenLite.to("#cssda-badge",.5,{visibility:"hidden"});
      }else{
        TweenLite.to("#mouse_icon",.5,{visibility:"visible"});
        TweenLite.to("#scroll_txt",.5,{visibility:"visible"});
        TweenLite.to("#top_icon",.5,{visibility:"hidden"})

        $('#cssda-badge').fadeIn(100);
        // TweenLite.to("#cssda-badge",.5,{visibility:"visible"});
      }

      if(topscroll<$('.top_page:eq(1)').offset().top-10){
        $( ".gr_cir" ).not( ":eq(0)" ).removeClass('gr_circle_active');
        $( ".gr_cir:eq(0)" ).addClass( "gr_circle_active" );
        
        
      }
      else if(topscroll<$('.top_page:eq(2)').offset().top-1){
        $( ".gr_cir" ).not( ":eq(1)" ).removeClass('gr_circle_active');
        $( ".gr_cir:eq(1)" ).addClass( "gr_circle_active" );


      }else{
        $( ".gr_cir" ).not( ":eq(2)" ).removeClass('gr_circle_active');
        $( ".gr_cir:eq(2)" ).addClass( "gr_circle_active" );

        

      }

      if(topscroll>top_of_tp_page2){

        $("#tp_img2").addClass('fixed_class');
        $("#tp_svg2").addClass('fixed_class');
        // $("#res_tp_img2").addClass('fixed_class');
        // $("#res_tp_svg2").addClass('fixed_class');

      }
      else{
        $("#tp_img2").removeClass('fixed_class');
        $("#tp_svg2").removeClass('fixed_class');
      //   $("#res_tp_img2").removeClass('fixed_class');
      //   $("#res_tp_svg2").removeClass('fixed_class');

      }



      if(topscroll>top_of_tp_page3){
        $("#tp_img3").addClass('fixed_class');
        $("#tp_svg3").addClass('fixed_class');
      //   $("#res_tp_img3").addClass('fixed_class');
      //   $("#res_tp_svg3").addClass('fixed_class');

      }
      else{
        $("#tp_img3").removeClass('fixed_class');
        $("#tp_svg3").removeClass('fixed_class');
      //   $("#res_tp_img3").removeClass('fixed_class');
      //   $("#res_tp_svg3").removeClass('fixed_class');

      }

  });


  $('#search_text').focus(function(){
    $('#hp-search-form').addClass('hp-search-form-stick');
  });
  $('#search_text').blur(function(){
    $('#hp-search-form').removeClass('hp-search-form-stick');
  });
  });



