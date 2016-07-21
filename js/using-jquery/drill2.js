$(function(){


    console.log('The dom is ready! (drill 2)');
    console.log($('.shape').position());
    console.log($('.stage').width() + 'w');
    console.log($('.stage').height() + 'h');
    var boxWidth = $('.shape').width();
    var boxHeight = $('.shape').height();
    $(document).on('keyup',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);

        switch(event.which) {
          case 38:
              if($('.shape').position().top >= 0) {
                $('.shape').css('top', $('.shape').position().top - 10);
              }
              break;
          case 39:
              if($('.shape').position().left <= $('.stage').width() - boxWidth) {
                $('.shape').css('left', $('.shape').position().left + 10);
              }
              break;
          case 40:
              if($('.shape').position().top <= $('.stage').height() - boxHeight) {
               $('.shape').css('top', $('.shape').position().top + 10);
              }
              break;
          case 37:
              if($('.shape').position().left >= 0) {
                $('.shape').css('left', $('.shape').position().left - 10);
              }
              break;
          case 83:
              $('.shape').animate({left: "-=20px"}).animate({left: "+=20px"});
              break;
        };
    });

});

// Concepts used: $.on(), $.animate(), $.width(), $.height(), $.css(), $.position(

