
const balls = document.getElementsByClassName('ball');

document.onmousemove = () => {
  
  //event.clientX => get the horizotal coordinate of the onmouseover
  const x = event.clientX * 100 / window.innerWidth +'%'; //window.innerWidth => get the browser width

  //event.clientY => get the vertical coordinate of the onmouseover
  const y = event.clientY * 100 / window.innerHeight + '%'; //window.innerHeihgt => get the browser height

  for(var i = 0; i<2; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-"+x+",-"+y+")';
  }
}