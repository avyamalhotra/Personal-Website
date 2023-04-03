window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.getElementsByClassName('coinpickingrobot').length> 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.getElementsByClassName('coinpickingrobot');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.1) ) && videoClientRect >= ( 0 - ( videoHeight*.1) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

  if ( document.getElementsByClassName('capacitanceboard').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.getElementsByClassName('capacitanceboard');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.1) ) && videoClientRect >= ( 0 - ( videoHeight*.1) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }


}