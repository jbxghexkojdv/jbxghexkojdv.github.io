let x = setInterval(() => {
  document.getElementById("number").innerHTML = Math.round((new Date("Jul 11, 2022 15:45:00") - new Date())/1000).toString(2);
}, 200);
