var balls = document.getElementsByClassName('ball');

document.onmousemove = function(){
  //event.clientX => get the horizotal coordinate of the onmouseover
  //event.clientY => get the vertical coordinate of the onmouseover
  //window.innerWidth => get the browser width

  var x = event.clientX * 100 / window.innerWidth +'%';
  var y = event.clientY * 100 / window.innerHeight + '%';

  for(var i = 0; i<2; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-"+x+",-"+y+")';
  }
}