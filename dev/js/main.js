/*
* @Author: admin
* @Date:   2017-06-06 19:07:46
* @Last Modified by:   admin
* @Last Modified time: 2017-06-24 22:35:00
*/

;(function($) {
	"use strict";

	$(window).load(function() {

		var portfolioGrid = $('.portfolio-grid');

		portfolioGrid.isotope({
	  		itemSelector: '.portfolio-grid__item'
		});

		var filterLinks = $('.portfolio-filter a');

		filterLinks.on('click', function(e){
			e.preventDefault();
			var filterClass = $(this).data('filter');

			filterLinks.removeClass('active');
			$(this).addClass('active');

			portfolioGrid.isotope({ filter: filterClass })
		});

	});

	$('.slider').slick({
		arrows: false,
		dots: true
	});

	$('.line-active-tab').tab();

})(jQuery);


