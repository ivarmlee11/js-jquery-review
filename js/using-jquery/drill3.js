$(function(){


    console.log('The dom is ready! (drill 3)');
    $('.shape').hover(function() {
      $( this ).removeClass('ball');
      $( this ).css('background-color', 'red');
    });
    $('.shape').mouseleave(function() {
      $(this).addClass('ball');
      $( this ).css('background-color', 'blue');
    });

});

