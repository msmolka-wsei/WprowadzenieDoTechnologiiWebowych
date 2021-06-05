var i = 0;
var j = 0;
var k = 0;
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


function move2() {
    if (j == 0) {
      j = 1;
      var elem = document.getElementById("myBar2");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 90) {
          clearInterval(id);
          j = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  function move3() {
    if (k == 0) {
      k = 1;
      var elem = document.getElementById("myBar3");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 65) {
          clearInterval(id);
          k = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

move1();
move2();
move3();

$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
  }else{
     $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
  }
});