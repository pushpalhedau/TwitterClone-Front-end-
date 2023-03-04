var header = document.getElementById("myDIV");
var btnss = header.getElementsByClassName("tabs");
for (var i = 0; i < btnss.length; i++) {
  btnss[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header1 = document.getElementById("myOPT");
var btnss1 = header.getElementsByClassName("opt");
for (var i = 0; i < btnss1.length; i++) {
  btnss1[i].addEventListener("click", function() {
  var current1 = document.getElementsByClassName("active");
  current1[0].className = current1[0].className.replace(" active", "");
  this.className += " active";
  });
}


var modal1 = document.getElementById("myModal1");

var btn_1 = document.getElementById("myBtn1");

var span1 = document.getElementsByClassName("close1")[0];

btn_1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");

var btn_2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn_2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


var modal3 = document.getElementById("myModal3");

var btn_3 = document.getElementById("myBtn3");

var span3 = document.getElementsByClassName("close3")[0];

btn_3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


