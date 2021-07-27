var slider = document.getElementById("motor1");
var output = document.getElementById("v1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("motor2");
var output2 = document.getElementById("v2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("motor3");
var output3 = document.getElementById("v3");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("motor4");
var output4 = document.getElementById("v4");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

var slider5 = document.getElementById("motor5");
var output5 = document.getElementById("v5");
output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}
