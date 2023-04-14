let levelDisplay = document.getElementById("level");
let expressionDisplay = document.getElementById("expression");
let inputElement = document.getElementById("the-number");
let level = 1n;
function numberCheck()
{
  let answer = BigInt(inputElement.value);
  if(answer === 2n ** level)
  {
    level++;
    levelDisplay.innerHTML = "Level " + level;
    expressionDisplay.innerHTML = answer + "+" + answer;
    inputElement.value = null;
  }
  else
  {
    inputElement.remove();
    levelDisplay.style.color = "#f00";
    expressionDisplay.style.color = "#f00";
  }
}
document.onkeyup = function(event)
{
  if(event.code == "Enter")
  {
    numberCheck();
  }
}
