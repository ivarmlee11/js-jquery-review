$(function(){




    console.log('The dom is ready! (drill 4)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);

    $('#doIt').on('click', function(e) {
      var affectThese = $('#whoDo').val();
      var doThisEffect = $('#whatDo').val();
      var changeShapes = function(selected) {
               switch(selected) {
                case 'blue':
                    $(this).css('background-color', 'blue');
                    console.log('Hey');
                    break;
                case 'red':
                    $(this).css('background-color', 'red');
                    break;
                case 'purple':
                    $(this).css('background-color', 'purple');
                    break;
                case 'orange':
                    $(this).css('background-color', 'orange');
                    break;
                case 'yellow':
                    $(this).css('background-color', 'yellow');
                    break;
                case 'square':
                    $(this).addClass('square');
                    break;
                case 'circle':
                    $(this).addClass('circle');
                    break;
                case 'fadeout':
                    $(this).fadeOut();
                    break;
                case 'fadein':
                    $(this).fadeIn();
                    break;
                default:
                    console.log('Hsss ey');
              };
      };

               switch(affectThese) {
                case 'even':
                    changeShapes(doThisEffect);
                    break;
                case 'odd':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'square':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'circle':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'blue':
                     changeShapes(doThisEffect);                   // code block
                    break;
                case 'red':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'purple':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'orange':
                    changeShapes(doThisEffect);                    // code block
                    break;
                case 'yellow':
                    changeShapes(doThisEffect);                    // code block
                    break;
                default:
                    console.log('Hey');
              };
    });
});


//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}
