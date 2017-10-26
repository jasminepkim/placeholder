
/* --------------------------------------------------
Rahul Tanvir Photography - HTML5 Template

File:           JS Base
Version:        1.0
Last change:    27/06/2017
Author:         htmlmate
-------------------------------------------------- */




(function($) {
  "use strict";





  $(".main-menu-btn").sideNav();
  $('.scrollspy').scrollSpy({
  	scrollOffset:0
  });

	// about video button - start ------------------------------
	$('.play-btn').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
  // about video button - end ------------------------------


  // counter - start ------------------------------
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  // counter - end ------------------------------



  // latest-blog-carousel - start ------------------------------
  $('.latest-blog-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
      0:{
        items:1
      },
     
      1000:{
        items:2
      }
    }
  });
  // latest-blog-carousel - end ------------------------------



  // back to top start ------------------------------
  $(function() {
    $(".scroll").click(function() {
      $("html,body").animate({
        scrollTop: $(".thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top end ------------------------------



  // back to top start ------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // back to top end ------------------------------


  
  // init Isotope
  var $grid = $('.grid').isotope({
  	itemSelector: '.element-item',
  	layoutMode: 'fitRows',
  	getSortData: {
  		name: '.name',
  		symbol: '.symbol',
  		number: '.number parseInt',
  		category: '[data-category]',
  		weight: function(itemElem) {
  			var weight = $(itemElem).find('.weight').text();
  			return parseFloat(weight.replace(/[\(\)]/g, ''));
  		}
  	}
  });

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
  	var number = $(this).find('.number').text();
  	return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function() {
  	var name = $(this).find('.name').text();
  	return name.match(/ium$/);
  }
};

// bind filter button click
$('#filters').on('click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
  	filter: filterValue
  });
});

// bind sort button click
$('#sorts').on('click', 'button', function() {
	var sortByValue = $(this).attr('data-sort-by');
	$grid.isotope({
		sortBy: sortByValue
	});
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
});





})(jQuery);