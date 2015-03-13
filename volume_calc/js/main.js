$(document).ready(function(){

  var calc = function(radius, volume, height) {
    if(volume != '') {
      var1 = Math.PI * (radius*radius);
      height = ((volume / var1) * 1000).toFixed(2);
    } else if(height != '') {
      volume = ((Math.PI * (radius*radius) * height) / 1000).toFixed(2);
    }

    return {
      'volume': volume,
      'height' : height
    }
  }

  $('#diameter, #volume, #height').on('change', function(e) {
    var radius = $('#diameter').val() / 2;
    var volume = $('#volume').val();
    var height = $('#height').val();

    if(this.id == 'volume') {
      var result = calc(radius,volume,'');
    } else {
      var result = calc(radius,'',height);
    }


    $('#volume').val(result.volume);
    $('#height').val(result.height);

  });

  $('form').on('submit', function(e) {
    $('#diameter').trigger('change');

    return e.preventDefault();
  });
});