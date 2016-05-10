$(function() {

	$('.main-header-photo').addClass('animated rubberBand');
	$('h1').addClass('animated fadeInLeft');
	$('.anime').addClass('animated fadeInLeft');
	$('.anime-second').addClass('animated fadeInRight');
	$(".block").animated("zoomInUp")


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
	//Documentation & Example: https://github.com/agragregra/uniMail
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


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
