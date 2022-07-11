$(document).ready(function () {

	//508
	$("a, button, input, [tabIndex='0'], #one, .closeRadio, #close, .form-control, #closeThisPlease, #sendMessage, textarea").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0'], #one, .closeRadio, #close, .form-control, #closeThisPlease, #sendMessage, textarea").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	//active nav
	var pathMobile = window.location.href

	$('.navbar-nav li .nav-link').each(function() {
		if (this.href === pathMobile) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}

	});


	//rotate caret

	$('.collapse').on('show.bs.collapse', function () {

		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});

	});
	$('.collapse').on('hide.bs.collapse', function () {

		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});

	});


	//accordions

	var hash = 1;

	$(".ques").each(function(i){
		var count = "ques" + (++hash)

		$(this).attr("href",  "#" + count);


		$(this).closest('.card').find('.collapse').attr("id", count);
	});


	function expand(toggleValue) {

		return function(e){

			$(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
			$(`.expandAll${toggleValue} .collapse`).collapse('toggle');

			if ( $(this).html() == 'Collapse All') {
				$(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt berry changeIcon${toggleValue}"></i>`)
			}

			if ( $(this).html() == 'Expand All') {
				$(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt berry changeIcon${toggleValue}"></i>`);
			}


		}
	}


	$('#toggleAccordion1').keypress(expand(1)).click(expand(1));



	//heavy font on due date




	//contact form

	var contactChildren = $("#slideOut .modal-header [tabIndex], #slideOut .modal-body [tabIndex], #slideOut").each(function() {
		$(this).attr('tabindex', '-1')
	})


	var contactTabs = $("#slideOut a").each(function() {
		$(this).attr('tabindex', '-1')

	})



	var open = function() {

		$('.contactUsOverlay').show();
		$(contactChildren, contactTabs).attr('tabindex', '0')


		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});

		$('.modal-content').addClass('opened')
		$("#slideOut").addClass('showSlideOut');
		setTimeout(function() {
			$('body').addClass('showContact')
		}, 300)

	}
	$('#one').keypress(
		open

	).click(
		open
	);



	$('.contactUsOverlay').on('click', function(e) {

		if($('body').hasClass('showContact')) {

			$('.contactUsOverlay').hide()

			$(contactChildren, contactTabs).attr('tabindex', '-1')
			$('#theform input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$("#slideOut").removeClass('showSlideOut');

			setTimeout(function() {
				$('body').removeClass('showContact')
			}, 300)

		}
	})

	var close = function() {

		$('.contactUsOverlay').hide();
		$(contactChildren, contactTabs).attr('tabindex', '-1')
		$('#theform input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$("#slideOut").removeClass('showSlideOut');


	}

	$('#close').keypress(
		close

	).click(
		close
	);






	$('#slideOut input').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9 ) {

			$('#slideOut input').change(function (e) {

				setReasonActive();

			})

			function setReasonActive() {
				$('#slideOut input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.form-check').css('background' ,'#1A5877');

					} else {
						$(this).parents('.form-check').css( 'background' ,'transparent')
					}
				})
			}

			setReasonActive()


		}
	})





	$('#slideOut input').change(function (e) {

		setReasonActive();

	})

	function setReasonActive() {
		$('#slideOut input').each(function () {
			if ($(this).prop('checked')) {
				$(this).closest('.form-check').find('i').css('color', 'white')
				$(this).parents('.form-check').css('background' ,'#1A5877');

			} else {
				$(this).parents('.form-check').css( 'background' ,'transparent')
				$(this).closest('.form-check').find('i').css('color', 'white')
			}
		})
	}

	setReasonActive()


	$(".form-check").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$('.form-check').each(function() {
				$(this).addClass('focusClass')
			});

		}

	})







	if ($(document).innerWidth() > 767) {




		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})


			if ($('.block10').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(1)').addClass('focused')

			}

			else {
				$('.menu-buttons-floating-list li:eq(1)').removeClass('focused')

			}


			if ($('.block5').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(2)').addClass('focused')

			}

			else {
				$('.menu-buttons-floating-list li:eq(2)').removeClass('focused')

			}

			if ($('.block20').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(3)').addClass('focused')

			}

			else {
				$('.menu-buttons-floating-list li:eq(3)').removeClass('focused')

			}


			if ($('.block50').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(4)').addClass('focused')

			}

			else {
				$('.menu-buttons-floating-list li:eq(4)').removeClass('focused')

			}

			if ($('.block0').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(0)').removeClass('focused')
				$('.menu-buttons-floating-list li:eq(1)').removeClass('focused')
				$('.menu-buttons-floating-list li:eq(2)').removeClass('focused')
				$('.menu-buttons-floating-list li:eq(3)').removeClass('focused')


			}

		})


	}


	if ($(document).innerWidth() <= 767) {


		$('.openTab').html('<i class="fas fa-envelope"></i>')
		$('#one').css('right', '-10px')


		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 5 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})

			if ($('.block10').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(0)').addClass('focused')
			}

			else {

				$('.menu-buttons-768-list li:eq(0)').removeClass('focused')
			}


			if ($('.block5').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(1)').addClass('focused')
			}

			else {

				$('.menu-buttons-768-list li:eq(1)').removeClass('focused')
			}


			if ($('.block20').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(2)').addClass('focused')
			}

			else {

				$('.menu-buttons-768-list li:eq(2)').removeClass('focused')
			}


			if ($('.block50').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(3)').addClass('focused')
			}

			else {

				$('.menu-buttons-768-list li:eq(3)').removeClass('focused')
			}


			if ($('.block0').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(0)').removeClass('focused')
				$('.menu-buttons-768-list li:eq(1)').removeClass('focused')
				$('.menu-buttons-768-list li:eq(2)').removeClass('focused')
				$('.menu-buttons-768-list li:eq(3)').removeClass('focused')
				$('.menu-buttons-768-list li:eq(4)').removeClass('focused')
			}


		})


		$('.landing-panel .form-control.access').focus(function () {
			$('html, body').animate({ scrollTop: ($('.landing-panel .form-control.access').offset().top - 40) }, 600);
			return false;
		});

	}

	//validate and send message on contact form and toast message


	$("#theform").validate(
		{
			rules:
			{
				email:
				{
					required: true,
					email: true

				}

			}
		});


		$('#theform input').keydown(function (event) {
			if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )  {

				$('#sendMessage').addClass('focused').removeClass('inactive')


			}

		})

		$("#slideOut .form-check").on("keyup", function (e) {

			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 9) {
				$('.form-check').each(function() {
					$(this).addClass('focusClass')
				});

			}

		})


		$(".survey-container .form-check").on("keyup", function (e) {

			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 9) {
				$('.form-check').each(function() {
					$(this).addClass('focusClass')
				});

			}

		})

		//end contact form


		if ($(document).innerWidth() <= 767) {


			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {


					$('.back-to-top').css({
						'top' : '72%'
					})
				}
				else {


					$('.back-to-top').css({
						'top' : '94%'
					})

				}

			});


		}



		if ($(document).innerWidth() <= 375) {

			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {


					$('.back-to-top').css({
						'top' : '66.5%'
					})
				}
				else {


					$('.back-to-top').css({
						'top' : '94%'
					})

				}

			});

		}


		if ($(document).innerWidth() <= 320) {

			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

					$('.flipIt').css({
						'top' : '48%'
					})
					$('.back-to-top').css({
						'top' : '61%'
					})
				}
				else {

					$('.flipIt').css({
						'top' : '84%'
					})
					$('.back-to-top').css({
						'top' : '94%'
					})

				}

			});

		}




		$('.back-to-top').click(() => {
			scrollfn("#overview");
		})



		$(window).scroll(function () {
			((window.pageYOffset || document.documentElement.scrollTop) > 100) ?
			$('.back-to-top, .flipIt').css({ opacity: 1, visibility: "visible" }) :
			$('.back-to-top, .flipIt').css({ opacity: 0, visibility: "hidden" });


		});

		function scrollfn(e) {
			let $target = $(e),
			offSet = e === "#overview" ? 0 : $target.offset().top;
			$('html, body').stop().animate({
				'scrollTop': offSet
			}, 1200, 'swing');
		}

		$('.customStack input, textarea').keydown(function (event) {
			$('.next').css('background', '#611C35')

		});



		$('.account input').on('keypress', function (e) {


			if(!$('#email').val() == '' && !$('#password').val() =='' && !$('#confirmPassword').val() =='' && !$('#firstName').val() =='' &&  !$('#lastName').val() =='' &&  !$('#number').val() =='' )    {

				$('.next').css('background', '#611C35')

			}

		});


		$('.form-check input').change(function () {
			if ($('input').not('#Consent_2').is(':checked')) {

				$('.next').css('background', '#611C35')
			}

			else {
				$('.next').css('background', '#707070')
			}
		})



		$(".form-check").on("keyup", function (e) {

			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 9) {
				$('.form-check').each(function() {
					$(this).addClass('focusClass')
				});

			}

		})





	})
