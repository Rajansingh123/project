function refreshPage(){
  window.location.href = window.location.href;
}

// scale the text down 
// and hide it before the animation begins
TweenMax.set('.example__title', {
  scale: 0.2, 
  autoAlpha: 0
});

//scale the circle shape down before 
//the animation begins
TweenMax.set('.example__ball', {
  scale: 0.2
});

//tween 1: rotate shape on X and Y axis
//scale it up to its regular dimensions
//add a fun ease
TweenMax.to('.example__ball', 0.5, {
  rotationX: 360,
  rotationY: 180,
  scale: 1,
  ease: Elastic.easeIn.config(2, 1)
});

//tween 2: make text appear and 
//scale it up to its regular size
//add a fun ta-da ease
TweenMax.to('.example__title', 0.5, {
  autoAlpha: 1,
  scale: 1,
  ease: Back.easeOut.config(4),
  delay: 0.6
});
// title. fetch title id function
$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
  });
  
  // adding animation for text in tab 
  $(document).ready(function() {
    animation();
  }, 1000);
  
  $('.button').click(function() {
    animation();
  });
  
  // function animation for title animation within tabs
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }

$("#tab1").click(moveToFirst);
$("#tab2").click(moveToSecond);
$("#tab3").click(moveToThird);
$("#tab4").click(moveToFour);

function moveToFirst() {
    $("#slide").attr('class', 'move-to-first');
    $(".tab").attr('class', 'tab');
    $("#tab1").attr('class', 'tab selected');
}

function moveToSecond() {
    $("#slide").attr('class', 'move-to-second');
    $(".tab").attr('class', 'tab');
    $("#tab2").attr('class', 'tab selected');
}

function moveToThird() {
     $("#slide").attr('class', 'move-to-third');
    $(".tab").attr('class', 'tab');
    $("#tab3").attr('class', 'tab selected');
}

function moveToFour() {
     $("#slide").attr('class', 'move-to-four');
    $(".tab").attr('class', 'tab');
    $("#tab4").attr('class', 'tab selected');
}
