/*
* @Author: admin
* @Date:   2017-06-06 19:07:46
* @Last Modified by:   konstantinkuchernko
* @Last Modified time: 2017-07-04 22:50:11
*/

;(function($) {
	"use strict";
	
	$(window).load(function() {

		// INITIALIZE ANIMSITION
		if($(".animsition").length){
			$(".animsition").animsition({
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body', 
				unSupportCss          : [ 'animation-duration',
										  '-webkit-animation-duration',
										  '-o-animation-duration'
										],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slie',
				overlayParentElement  :   'body'
			});
		}

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


