$(document).ready(function () {

  //508 tabbing

  $("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on("keyup", function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')
    }

  })
  $("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on('focusout', function() {
    $(this).css('outline', 'none')
  })


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


//acordions

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

  //scrolling
  function scrollfn(e) {
    let $target = $(e),
    offSet = e === "#overview" ? 0 : $target.offset().top;
    $('html, body').stop().animate({
      'scrollTop': offSet
    }, 1200, 'swing');

  }


  $('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });

  $('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });






  function toggleBegin(el) {
    $(el).attr('href') === '#signin' ? (
      $('.landing-panel-p2').show(),
      // $('.form-signin-heading').text('To start your survey, please enter the PIN included in your invitation letter.')
      $('.form-login-input').hide(),
      $('.form-signin-input').show()
    ) : (
      $('.landing-panel-p2 second').hide(),
      // $('.form-signin-heading').text('Log in with your username and password.'),
      $('.form-signin-input').hide(),
      $('.form-login-input').show().css('display', 'flex')
    );
  }

  $('.form-login-a').on('click', function (e) {
    toggleBegin(this);
  })

  $('.form-login-a').on('keypress', function (e) {
    toggleBegin(this);
  })

  $('.form-login-a').on('click', function (e) {
    // $('#access2').html('Show password')
    $('#MainContent_btnContinue').val('Login');
    $('#MainContent_Label1').addClass('hidden')
    $('#blue').html('New participant? Enter PIN')

    $('#blue').hide()
    $('.landing-panel-p2').hide()
    $('.form-login-a.second').show().css('display', 'flex')
    $('.landing-panel-p1.text-center').html('Welcome back to the PATH Study!')
    $('.position-relative.form-login-input input:eq(0)').focus()


  })



  $('.form-login-a.second').on('click', function (e) {
    $('.form-signin input:eq(0)').focus()
    $('#blue').html('Already a participant? Log in')
    $('#MainContent_btnContinue').val('Get Started');
    $('#MainContent_Label1').removeClass('hidden')

    $('#blue').show()
    $('.landing-panel-p2').show()
    $('.form-login-a.second').hide()
    $('.landing-panel-p1.text-center').html('Welcome to the PATH Study!')

  })



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
    if ($('.block6').hasClass('active')) {

      $('.menu-buttons-floating-list li:eq(0)').addClass('activated')
    }

    else {

      $('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
    }


    if ($('.block88').hasClass('active')) {

      $('.menu-buttons-floating-list li:eq(1)').addClass('activated')
    }

    else {

      $('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
    }


    if ($('.block5').hasClass('active')) {

      $('.menu-buttons-floating-list li:eq(2)').addClass('activated')
    }

    else {

      $('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
    }

    if ($('.block50').hasClass('active')) {

      $('.menu-buttons-floating-list li:eq(3)').addClass('activated')
    }

    else {

      $('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
    }


    if ($('.block0').hasClass('active')) {

      $('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
      $('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
      $('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
      $('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
    }


  })




  $(window).scroll(function () {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 555) {
      $('.btnContact').css({
        top: "92px"
      })
      $('.menu-buttons-floating').css({
        opacity: '1',
        visibility: 'visible'
      })
    } else {
      $('.btnContact').css({
        top: "192px"
      })
      $('.menu-buttons-floating').css({
        opacity: '0',
        visibility: 'hidden'
      })
    }
  });


});
