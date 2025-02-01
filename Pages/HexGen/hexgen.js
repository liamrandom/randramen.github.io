
var button = document.getElementById("button");
var chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var hexnum = document.getElementById("hexnum");

button.addEventListener("click", function(){
  var hex = "#";
  for(i = 0; i < 6; i++){
    var randnum = Math.floor(Math.random() * 16);
    hex += chars[randnum];
  }
  hexnum.textContent = hex;
  document.getElementsByTagName("body")[0].style.background = hex;
});