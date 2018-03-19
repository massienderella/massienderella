$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});

$(".about").smoove({
  offset  : '15%',
});

$(".my-skills").smoove({
  offset  : '15%',
});

function hoverSkills(){
  // Mostrar al Hover
  $('.skill-cont').hover(function() {
    $(this).children('img').css({
      'opacity': '0',
      'transition': 'ease all 0.5s',
    });
    $(this).children('figcaption').css({
      'opacity': '1',
    });
  },
  function() {
    $(this).children('img').css({
      'opacity': '1',
    });
    $(this).children('figcaption').css({
      'opacity': '0',
    });
  });
}