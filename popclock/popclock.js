let display = document.getElementById("num-display");
function commaify(num) {
  let str = num.toString(10);
  return str[0] + "," + str[1] + str[2] + str[3] + "," + str[4] + str[5] + str[6] + "," + str[7] + str[8] + str[9];
}
let int = setInterval(() => {
  let secsAfter2022Start = (Date.now()-1640995200000)/1000;
  //secsAfter2022Start = 56427338500;
  const popAt2022Start = 7868872451;
  const birthRate = (((secsAfter2022Start/31556952)*(-0.00024))+2.019)*(0.5);
  const increase = Math.pow(Math.pow(birthRate, (1/31556952)), secsAfter2022Start);
  display.innerHTML = commaify(increase * popAt2022Start);
}, 10);
//antiderivative = 0.0095x-0.00024x²(1/2)
//0 - 0
//b/2