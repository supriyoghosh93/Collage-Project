(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".slider-area").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
Testimonial
------------------------------ */  
  $(".testimonial-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
Testimonial
------------------------------ */  
  $(".participer-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
mixitup active
------------------------------ */  
	$('#Container').mixItUp();
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*-------------------------------------
    Fancybox jquery activation Code
    -------------------------------------*/
    $('.fancybox').fancybox();
	/*-------------------------------------
	Single Product jQuery activation code
	-------------------------------------*/
	$(".tab-image").owlCarousel({

	    // Most important owl features
	    items : 3,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	    singleItem : false,
	    itemsScaleUp : false,
	    // Navigation
	    navigation : true,
	    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    // Responsive 
	    responsive: true,
	    pagination:false,    

	});
	/*-------------------------------------
	Single Product Tab  activation code
	-------------------------------------*/
	$(".tab-image").on('click', 'li', function(event) {
	    event.preventDefault();
	    var displayTarget = $("#product-1");
	    displayTarget.find('a').removeClass('active');
	    var id = $(this).attr('data-id');
	    // var targetUrl = $(this).find('a').attr('href');
	    // console.log(displayTarget.html());
	    var targetClass = ".product-gallery-img-"+id;
	    console.log(targetClass);
	    displayTarget.find(targetClass).addClass('active');
	    // displayTarget.find('img').attr('src', targetUrl);
	    /* Act on the event */
	});          
	/*-------------------------------------
	 Related Product jQuery activation code
	 -------------------------------------*/
	  $(".related-product-area > .single-product-store").owlCarousel({
	      // Most important owl features
	       items : 3,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [980,2],
	      itemsTablet: [768,1],
	      itemsTabletSmall: false,
	      itemsMobile : [479,1],
	      singleItem : false,
	      itemsScaleUp : false,
	      // Navigation
	      navigation : true,
	      navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	      // Responsive
	      responsive: true,
	      pagination:false,
	  }); 
	  /*--------------------------
	   Sticky Menu Activation Code
	  ---------------------------- */      
	    $(window).on('scroll', function(){
	      if( $(window).scrollTop()>100 ){
	        $('.sticky').addClass('stick');
	        } else {
	        $('.sticky').removeClass('stick');
	      }
	    });
	/*-------------------------
	Nice Select JQuery 
	---------------------------*/
	$('select').niceSelect();
	/*---------------------
	countdown
	--------------------- */
	$("#getting-started")
	.countdown("2017/12/31", function(event) {
	  $(this).text(
	    event.strftime('%D : %H : %M : %S ')
	  );
	});
	   
 
})(jQuery); 