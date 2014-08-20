(function($){
  function playCountdown(){
    $('.hcountdown').hCountdown({
      beforeStart: function(){
        $('button.start-countDown')
          .prop('disabled', true)
          .text('running');
      },
      speed: 100,
      onComplete: function(){
        $('button.start-countDown')
          .prop('disabled', false)
          .text('reStart');
      }
    });
  }
  playCountdown();
  $('.hcountdown').on('click', function(e){
    e.preventDefault();
    playCountdown();
  });
}(jQuery));
