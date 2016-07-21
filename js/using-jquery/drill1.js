$(function(){
  console.log('The dom is ready! (drill 1)');
  console.log('w ' + $('.stage').width());
  console.log('h ' + $('.stage').height());
  $('.shape').on('click', function() {
    var newX = (Math.random() * $('.stage').width() + 1)
    var newY = (Math.random() * $('.stage').height() + 1)
    var circleWidth = $(this).width();
    var circleHeight = $(this).height();
    $(this).fadeOut('slow', function() {
      $(this).css({'left': newX - circleWidth + 'px',
      'top': newY - circleHeight + 'px'})
      .fadeIn();
    });
  });
});

