var style = require("./style.css");
var code = require("./template.html");
require("./vendor/blowup.exec.js");

document.addEventListener('DOMContentLoaded', () => {
  let c = document.createElement("div")
  c.innerHTML = code;
  console.log(style);
  document.getElementById("root").append(c);
})
