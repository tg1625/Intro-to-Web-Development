
  //special styling for the header at the top of the home page
  $(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".navbar").removeClass("top");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".navbar").addClass("top");
      }
  });
});

  // Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
  $(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top - 100;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // Fade in images on the right
  $(window).scroll(function() {
    $('.scroll-animations .animated.right').each(function() {
      if (isScrolledIntoView(this) === true) {
        console.log("Scrolling");
        $(this).addClass('fadeInRight');
        $(this).css("visibility","visible")
      }
    });
  });
  // Fade in images on the left
  $(window).scroll(function() {
    $('.scroll-animations .animated.left').each(function() {
      if (isScrolledIntoView(this) === true) {
        console.log("Scrolling");
        $(this).addClass('fadeInLeft');
        $(this).css("visibility","visible")
      }
    });
  });
  // Fade in modules for links
  $(window).scroll(function() {
    $('.scroll-animations .animated.box').each(function() {
      if (isScrolledIntoView(this) === true) {
        console.log("Scrolling");
        $(this).addClass('fadeInUp');
        $(this).css("visibility","visible")
      }
    });
  });

  //pulse images  on module hover
  jQuery(function($) {
    $('.box').hover(function() {
      console.log("Adding");
       $(this).children('img').addClass('animated');
       $(this).children('img').addClass('pulse');
    },function() {
      console.log("Removing");
      $(this).children('img').removeClass('animated');
      $(this).children('img').removeClass('pulse');
    });
});

  });
