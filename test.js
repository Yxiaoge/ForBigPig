var count=0;
$(document).ready(function(){
  $('.btn-danger').mouseenter(function(){   
    $('.btn-danger').css('animation', 'buttonMove 0.5s infinite');
    count++;
    console.log(count);
    if(count>=3){
      $('.btn-danger').css('animation', '');
      $('.btn-danger').css('top','500px');
      $('.btn-danger').css('left','-300px');
      $('.btn-danger').addClass('animated tada');
    }
    if(count>=4){
      $('.btn-danger').css('animation', 'buttonMove2  0.5s infinite ');
    }
    if(count>=6){
      $('.btn-danger').css('animation', '');
      $('.btn-danger').addClass('animated shake');
      $('#no-btn').css('top','200px');
      $('#no-btn').css('left','-400px');
    }
    if(count>=7){
      $('#no-btn').removeClass('btn-danger').addClass('btn-primary');
      $('#no-btn').text('好吧，那就原谅你吧');
    }

  });  
  // code continues here
  //btn-clicked
  $('.btn-primary').click(function(){
    $('.head1').text("太好噜，猪猪我也喜欢你！");
    $('.head1').addClass("animated wobble");
  });

});