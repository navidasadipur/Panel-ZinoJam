$(window).resize(function(){
    initializer();
}); 
function initializer(){
    var hei=window.innerHeight, wid=window.innerWidth;
    if (wid<=700){
        $('.title >h2').css('font-size','18px');
    }
    else{
        $('.title >h2').css('font-size','20px');
    }
    if(wid<=992){
        $('#cat_img_row').css('height',(($('#cat_img_row').width()*450/1140)));
    }
    else{
        $('#cat_img_row').css('height','350px');
    }
    if(wid<992 && wid>400){
        $('.post_img').css('height','180px');
    }
    else if(wid<=400){
        $('.post_img').css('height','120px');
        // $('#cat_img_row').css('height','150px');
    }
    else{
        $('.post_img').css('height','140px');
        $('.main_post_img').css('height','240px');
    }
    $('.nm-wrap-comments input').removeClass('form-control');

}
$(document).ready(function(){
    initializer();
    wid=window.innerWidth;
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
    var open = true;
    $('.vc_column_container:has(.wpb_revslider_element)').css('z-index','0');
    $('a').removeAttr("title");
    $('#menu_btn').click(function(){
        if(open){
            //uncomment to add some other animation for open button mode starting!
            $("#menu_lyt").fadeToggle(); 
            this.classList.add('close');
            this.classList.remove('open');
            $('#blog_header').hide();
            $('.lines').addClass('white_lines');
            open = false;
        }
        else{
            $("#menu_lyt").fadeToggle(); 
            $('#blog_header').show();
            this.classList.add('open');
            this.classList.remove('close');
            $('.lines').addClass('white_lines');
            open = true;
        }
    }); 
    $("#aparat").hover(function(){
        $('#aparat').addClass('hover_aparat');
    },function(){
        $('#aparat').removeClass('hover_aparat');

    
    });
    $("#instagram").hover(function(){
        $('#instagram').addClass('hover_instagram');
        
    },function(){
        $('#instagram').removeClass('hover_instagram');

    
    });
    $("#telegram").hover(function(){
        $('#telegram').addClass('hover_telegram');
        
    },function(){
        $('#telegram').removeClass('hover_telegram');

    
    });
    $('#menu_button_cover').click(function(){
        $('#menu_btn').click();
    });
    $('.cat_item').click(function(){
      $(this).toggleClass("active_item");
      $(this).siblings().removeClass("active_item");
      // var cat=$('.cat_item.active_item').index();
      // window.location.href = "aveblog/?cat="+cat;
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
    $('.cat_li').hover(function(){
        $('.cat_item:eq('+$(this).index()+') .cat_sub_item_dropdown').slideToggle();
    },function(){
    // do this when mouse out from element with 'SOMEELEMENT' id
        $('.cat_item:eq('+$(this).index()+') .cat_sub_item_dropdown').slideToggle();
    });
});