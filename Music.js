var x,
  seekslider,
  playbtn,
  volumeslider,
  seeking = false,
  seekto,
  index = 0,
  isPlay = 1;

var pic_src = new Array(
  "/image/ukulele.PNG",
  "/image/betterdays.PNG",
  "/image/sunny.PNG"
);
var url = new Array(
  "music/bensound-ukulele.mp3",
  "music/bensound-betterdays.mp3",
  "music/bensound-sunny.mp3"
);
var url_time = new Array(2.44, 2.53, 3.05);
////
x = document.getElementById("myAudio");
playbtn = document.getElementById("playbtn");
seekslider = document.getElementById("seekslider");
volumeslider = document.getElementById("volumeslider");

playbtn.addEventListener("click", playPause);

seekslider.addEventListener("change", seek, false);

volumeslider.addEventListener("mousemove", setVolumne);
//alert(volumeslider.value);

// Functions
function playPause() {
  x.play();
  /* if (isPlay === 1) {
    x.play();
    isPlay = 2;
    playbtn.innerHTML = "U";
  } else {
    x.pause();
    isPlay = 1;
    playbtn.innerHTML = "P"; 
  }
  return isPlay;*/
}

//function playAudio() {
//  x.play();
//}

function pauseAudio() {
  x.pause();
}

function seek() {
  seekto = x.duration * (seekslider.value / 100);
  x.currentTime = seekto;
}

function setVolumne() {
  x.volume = volumeslider.value / 100;
  // alert(x.volume);
}

function BackAudio() {
  // alert("i m back");
  x.pause();
  if (index === 0) {
    alert(`this is the first record!`);
  } else {
    index -= 1;
  }
  var rec_show = index + 1;
  document.getElementById("myAudio").setAttribute("src", url[index]);
  document.getElementById("header").innerHTML = `PLAYING ${rec_show} OF 3`;
  document.getElementById("Song_name").innerHTML = cap(
    url[index].substring(15, url[index].search("mp3") - 1)
  );
  document.getElementById("img").setAttribute("src", pic_src[index]);
  document.body.style.backgroundColor = get_color();
  document.getElementById("end1").innerHTML = url_time[index];
}

function NextAudio() {
  //  alert("i m forward");
  x.pause();
  if (index === 2) {
    alert(`This is the last record!`);
  } else {
    index += 1;
  }
  var rec_show = index + 1;
  document.getElementById("myAudio").setAttribute("src", url[index]);
  document.getElementById("header").innerHTML = `PLAYING ${rec_show} OF 3`;
  document.getElementById("Song_name").innerHTML = cap(
    url[index].substring(15, url[index].search("mp3") - 1)
  );
  document.getElementById("img").setAttribute("src", pic_src[index]);
  document.body.style.backgroundColor = get_color();
  document.getElementById("end1").innerHTML = url_time[index];
}

////
function cap(s) {
  return s[0].toUpperCase() + s.slice(1);
}

////
function get_color() {
  var color = "#";
  if (index === 0) {
    color += "c77be6";
  } else if (index === 1) {
    color += "cc44c7";
  } else {
    color += "7492e2";
  }
  return color;
}
