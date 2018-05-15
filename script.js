
  var elem = document.querySelector('.parallax');
  var instance = M.Parallax.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });
          document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
       
