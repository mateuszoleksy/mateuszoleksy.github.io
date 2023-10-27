
var element = document.getElementById('time');
var globe = document.getElementById('globe');

function time(elem)
{
  var d = new Date();
  var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

  elem.innerText = hours + ':' + minutes + ':' + seconds;
}

var b = setInterval(time, 1000, element);