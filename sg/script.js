let x = setInterval(() => {
  document.getElementById("number").innerHTML = (new Date("Jul 11, 2022 15:45:00") - new Date()).toString(2);
}, 200);
