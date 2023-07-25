// Variables
let isAM = true;

// Functions
document.getElementsByTagName("tr")[0].oninput = function(e)
{
  document.getElementsByTagName("input")[2].value = zeroCheck((Number(document.getElementsByTagName("input")[0].value) % 12) + ((!isAM) * 12));
  document.getElementsByTagName("input")[3].value = zeroCheck(Number(document.getElementsByTagName("input")[1].value));
  document.getElementsByTagName("input")[1].value = zeroCheck(Number(document.getElementsByTagName("input")[1].value));
};

document.getElementsByTagName("tr")[1].oninput = function(e)
{
  document.getElementsByTagName("input")[0].value = (Number(document.getElementsByTagName("input")[2].value) % 12) == 0 ? "12" : (Number(document.getElementsByTagName("input")[2].value) % 12);
  document.getElementsByTagName("input")[1].value = zeroCheck(Number(document.getElementsByTagName("input")[3].value));
  document.getElementsByTagName("input")[2].value = zeroCheck(Number(document.getElementsByTagName("input")[2].value));
  document.getElementsByTagName("input")[3].value = zeroCheck(Number(document.getElementsByTagName("input")[3].value));
  
  isAM = Number(document.getElementsByTagName("input")[2].value) < 12;
  document.getElementsByTagName("button")[0].innerHTML = isAM ? "AM" : "PM";
};

/**
 * @param {number} num
 * @returns {string}
 */
function zeroCheck(num)
{
  if(Math.abs(num) < 10)
  {
    return "0" + num.toString();
  }
  return num.toString();
}

/**
 * @returns {void}
 */
function toggleAM()
{
  isAM = !isAM;
  document.getElementsByTagName("button")[0].innerHTML = isAM ? "AM" : "PM";
  document.getElementsByTagName("tr")[0].oninput();
}