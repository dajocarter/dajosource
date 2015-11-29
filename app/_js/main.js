/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function() {
    $('h1.responsive-headline').fitText(1, {
      minFontSize: '40px',
      maxFontSize: '90px'
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
      window.location.hash = target;
    });
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav a");

  sections.waypoint(function(direction) {

    var active_section;

    active_section = $('#' + this.element.id);
    if (direction === "up") active_section = active_section.prev();
    var active_link = $('#nav a[href="#' + active_section.attr('id') + '"]');
    navigation_links.parent().removeClass("current");
    active_link.parent().addClass("current");

  }, {
    offset: '35%'
  });

  /*----------------------------------------------------*/
  /* Priority+/Greedy Navigation
------------------------------------------------------*/

  var navBtn = $('#nav-wrap button');
  var visibleLinks = $('#nav');
  var hiddenLinks = $('#hidden-nav');

  var numOfItems = 0;
  var totalSpace = 0;
  var breakWidths = [];

  // Get initial state
  visibleLinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  var availableSpace, numOfVisibleItems, requiredSpace;

  function check() {

    // Get instant state
    availableSpace = visibleLinks.width() - 10;
    numOfVisibleItems = visibleLinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enought space
    if (requiredSpace > availableSpace) {
      visibleLinks.children().last().prependTo(hiddenLinks);
      numOfVisibleItems -= 1;
      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      hiddenLinks.children().first().appendTo(visibleLinks);
      numOfVisibleItems += 1;
    }
    // Update the button accordingly
    navBtn.find('span').text(numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      navBtn.addClass('hidden');
    } else navBtn.removeClass('hidden');
  }

  // Window listeners
  $(window).resize(function() {
    check();
  });

  navBtn.on('click', function() {
    hiddenLinks.toggleClass('hidden');
  });

  check();

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $('#home').css({
    'height': $(window).height()
  });
  $(window).on('resize', function() {

    $('#home').css({
      'height': $(window).height()
    });
    $('body').css({
      'width': $(window).width()
    })

  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on('scroll', function() {

    var h = $('#home').height();
    var y = $(window).scrollTop();
    var nav = $('#nav-wrap');

    if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
      nav.fadeOut('fast');
    } else {
      if (y < h * .20) {
        nav.removeClass('opaque').fadeIn('fast');
      } else {
        nav.addClass('opaque').fadeIn('fast');
      }
    }

  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $('.item-wrap a').magnificPopup({

    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade'

  });

  $(document).on('click', '.popup-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $('.flexslider').flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: 'slide',
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
  });

  /*----------------------------------------------------*/
  /*	contact form
------------------------------------------------------*/

  $('#contactForm button.submit').click(function() {

    $('#image-loader').fadeIn();

    var contactName = $('#contactName').val();
    var contactEmail = $('#contactEmail').val();
    var contactSubject = $('#contactSubject').val();
    var contactMessage = $('#contactMessage').val();

    var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
      '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

    $.ajax({

      type: "POST",
      url: "inc/sendEmail.php",
      data: data,
      success: function(msg) {

        // Message was sent
        if (msg == 'OK') {
          $('#image-loader').fadeOut();
          $('#message-warning').hide();
          $('#contactForm').fadeOut();
          $('#message-success').fadeIn();
        }
        // There was an error
        else {
          $('#image-loader').fadeOut();
          $('#message-warning').html(msg);
          $('#message-warning').fadeIn();
        }

      }

    });
    return false;
  });

});