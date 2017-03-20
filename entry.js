require("./blowup.js");
var style = require("./style.css").toString();
var code = require("./template.html");

document.addEventListener('DOMContentLoaded', () => {
  debugger
  let c = document.createElement("div")
  c.innerHTML = code;
  console.log(code);
  console.log(style);
  document.getElementById("root").append(c);
})
