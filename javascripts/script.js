(function($){
  $('.hcountdown').hCountdown({
    speed: 100,
    onComplete: function(){
      $('button.start-countDown').prop('disabled', false);
    }
  });
}(jQuery));
