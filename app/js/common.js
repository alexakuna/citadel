$(function() {

	$('.look-more').click(function(event) {
		event.preventDefault();
		$('.look-more').toggle(100);
		$('.our-work2').toggle(400);
		
	});

	$('.main-header-photo').addClass('animated rubberBand');
	$('h1').addClass('animated fadeInLeft');
	$('.anime').addClass('animated fadeInLeft');
	$('.anime-second').addClass('animated fadeInRight');
	$(".block").animated("zoomInUp")
	$(".slider-1, .wrap-desc-product").animated("fadeInRight")

	 $('.after').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.before'
	});
	$('.before').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.after',
	  dots: true,
	  fade: true,
	  arrows: false,
	  autoplay: true
	  
	});
	
	$('.after-1').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.before-1'
	});
	$('.before-1').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.after-1',
	  dots: true,
	  fade: true,
	  arrows: false,
	  autoplay: true
	  
	});


	$('.photo-galery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	
	$('.docs').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// image: {
		// 	verticalFit: true
		// },
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

$(".popup-with-move-anim").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
$("a[href=callback]").click(function() {
	$("#callback .formname").val($(this).data("form"));
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").css("visibility", "visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").css("visibility", "hidden");
				$.magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	$('slider-1').scroll(function(event) {
		/* Act on the event */
	});
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	$('.preloader').fadeOut();
});
