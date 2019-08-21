/* ----- Designed and coded by Grayson Randall -----
----- https://graysonrandall.github.io/portfolio/index.html ----- */

var WYLD = (function($, WYLD) {

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 500, function() {
            });
        }
    });
});

var setupValues = function() {
  scrollArrow = document.querySelector('.arrow-container');
  scrollCopy = document.querySelector('.scroll');
};

var animateIntro = function() {
  $(".scroll").delay(1900).animate({
        opacity: .6
    }, 2300, function() {
        $(".arrow-container").animate({
            opacity: .6
        }, 1500);
    });

};


var init = function() {
  setupValues();
  animateIntro();
};

WYLD.scrolling = {
  init: init
};

    return WYLD;

}($, WYLD || {}));

// let counter = 0;
function show(elem) {
    // var docViewTop = $(window).scrollTop();
    // var docViewBottom = docViewTop + $(window).height();
    // var elemToppy = $('h3').offset().top;
    // var elemBottom = elemToppy + $('h3').height();

    // var correction = (docViewBottom - elemToppy);
    // var elemTop = (Number(elemToppy) + correction);
    // counter += 0.01;
    // if (counter < .7) {
    //   counter += 0.01;
    //   elem.css("opacity", counter);
    // } else {
      console.log('yeeeaaaahhhhh broooo');
    // }
}

function erase(elem) {
    // var docViewTop = $(window).scrollTop();
    // var docViewBottom = docViewTop + $(window).height();
    // var elemToppy = $('h3').offset().top;
    // var elemBottom = elemToppy + $('h3').height();

    // var correction = (docViewBottom - elemToppy);
    // var elemTop = (Number(elemToppy) + correction);
    //
    // counter -= 0.01;
    // if (counter > 0) {
    //   counter -= 0.01;
    //   elem.css("opacity", counter);
    // } else {
      console.log('2020!!!!');
    // }
}

var lastScrollTop = 0;
$(window).scroll(function(event) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemToppy = $('h3').offset().top;
  var elemBottom = elemToppy + $('h3').height();

  // console.log('docViewTop = ' + docViewTop + ' docViewBottom = ' + docViewBottom + ' elemTop = ' + elemToppy + ' elemToppy = ' + elemBottom);
  
//   if (docViewBottom >= (Number(elemBottom) - 50) && docViewTop <= (Number(elemBottom)) - 25) {
    // console.log('in view');
    var st = $(this).scrollTop();
     if (st > lastScrollTop) {
        erase($('h3'));
     } else {
        show($('h3'));
     }
   // }
});
