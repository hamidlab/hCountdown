(function($) {

  $.fn.hCountdown = function(options) {

    var settings = $.extend({
      speed: 100,
      beforeStart : function(){},
      onComplete : function(){}
    }, options);


    return this.each(function() {
      var _this = $(this);

      settings.beforeStart(_this);
      var capsAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
      var smallAplah = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

      var alphaFrom = _this.data('hcountdown-from');
      var alphaTo = _this.data('hcountdown-to');

      if(!alphaFrom || !alphaTo) return true;

      var alphaFromA = alphaFrom.split('');
      var alphaToA = alphaTo.split('');

      var completeA = Array();
      var alphaFinalA = Array();

      for (var i = 0; i < alphaFromA.length; i++) {
        if (capsAlpha.indexOf(alphaFromA[i]) == -1 && smallAplah.indexOf(alphaFromA[i]) == -1) {
          alphaFromA[i] == 'a';
        }
      };
      for (var j = 0; j < alphaToA.length; j++) {
        if (capsAlpha.indexOf(alphaToA[j]) == -1 && smallAplah.indexOf(alphaToA[j]) == -1) {
          alphaToA[j] = 'a';
        }
      };

      for (var k = 0; k < alphaFromA.length; k++) {
        completeA.push(alphaFromA[k] == alphaToA[k]);
        alphaFinalA.push(alphaFromA[k]);
        var lowerType = alphaFromA[k].toLowerCase() == alphaFromA[k];
        if (lowerType) {
          alphaToA[k] = alphaToA[k].toLowerCase();
        } else {
          alphaToA[k] = alphaToA[k].toUpperCase();
        }
      }

      var countDownInterval = setInterval(function() {
        for (var i in alphaFinalA) {
          if (!completeA[i]) {
            var lowerType = alphaFinalA[i].toLowerCase() == alphaFinalA[i];
            var targetAlphaType = lowerType ? smallAplah : capsAlpha;
            var toIdx = targetAlphaType.indexOf(alphaToA[i]);
            var fromIdx = targetAlphaType.indexOf(alphaFromA[i]);
            if (toIdx > fromIdx) {
              alphaFinalA[i] = targetAlphaType[targetAlphaType.indexOf(alphaFinalA[i]) + 1];
            } else {
              alphaFinalA[i] = targetAlphaType[targetAlphaType.indexOf(alphaFinalA[i]) - 1];
            }
            completeA[i] = alphaFinalA[i] == alphaToA[i];
          }
        }
        if (completeA.indexOf(false) === -1) {
          clearInterval(countDownInterval);
          settings.onComplete(_this);
        }
        _this.text(alphaFinalA.join(''));
      }, settings.speed);

    });

  }

}(jQuery));
