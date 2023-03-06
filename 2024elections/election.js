let outputElement = document.getElementById("time");
function zeroify(num, digits = 2)
{
  let nums = num.toString(10);
  const an = digits - (nums.length);
  for (let j = 0; j < an; j++)
  {
    nums = "0" + nums;
  }
  return nums;
}

function updateBars()
{
  function updateOne(dataInner, elem)
  {
    let displayObj = {};
    let percentage = 0;
    let total;
    switch(dataInner.__office__)
    {
      case "p":
        total = 538;
        break;
      case "s":
        total = 100;
        break;
      case "h":
        total = 435;
        break;
      default:
        total = 50;
    }
    for(let i of elem.children)
    {
      elem.removeChild(i);
    }
    for(let i = 0; i < electionDeeta.display.left.length; i++)
    {
      dataInner[electionDeeta.display.left[i][0]] = dataInner[electionDeeta.display.left[i][0]] ? dataInner[electionDeeta.display.left[i][0]] : 0;
      displayObj[dataInner[electionDeeta.display.left[i][0]]] = document.createElement('div');
      elem.appendChild(displayObj[dataInner[electionDeeta.display.left[i][0]]]);
      elem.style.display = "block";
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.position = "absolute";
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.height = "100%";
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.width = `${dataInner[electionDeeta.display.left[i][0]]*100/total}%`;
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.backgroundColor = electionDeeta.display.left[i][2];
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.color = 
      ((parseInt(electionDeeta.display.left[i][2][1] + electionDeeta.display.left[i][2][2], 16) * 0.2126) + //we start at 1 because of the # in the color code, dumbass
      (parseInt(electionDeeta.display.left[i][2][3] + electionDeeta.display.left[i][2][4], 16) * 0.7152) + 
      (parseInt(electionDeeta.display.left[i][2][5] + electionDeeta.display.left[i][2][6], 16) * 0.0722))
      > 127.5 ? "#000000" : "#FFFFFF";
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.display = "block";
      displayObj[dataInner[electionDeeta.display.left[i][0]]].innerHTML = dataInner[electionDeeta.display.left[i][0]];
      displayObj[dataInner[electionDeeta.display.left[i][0]]].style.left = `${percentage}%`;
      percentage += dataInner[electionDeeta.display.left[i][0]]*100/total;
    }
    percentage = 0; 
    for(let i = 0; i < electionDeeta.display.right.length; i++)
    {
      dataInner[electionDeeta.display.right[i][0]] = dataInner[electionDeeta.display.right[i][0]] ? dataInner[electionDeeta.display.right[i][0]] : 0;
      displayObj[dataInner[electionDeeta.display.right[i][0]]] = document.createElement('div');
      elem.appendChild(displayObj[dataInner[electionDeeta.display.right[i][0]]]);
      elem.style.display = "block";
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.position = "absolute";
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.height = "100%";
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.width = `${dataInner[electionDeeta.display.right[i][0]]*100/total}%`;
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.backgroundColor = electionDeeta.display.right[i][2];
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.color = 
      ((parseInt(electionDeeta.display.right[i][2][0] + electionDeeta.display.right[i][2][1], 16) * 0.2126) +
      (parseInt(electionDeeta.display.right[i][2][2] + electionDeeta.display.right[i][2][3], 16) * 0.7152) + 
      (parseInt(electionDeeta.display.right[i][2][4] + electionDeeta.display.right[i][2][5], 16) * 0.0722))
        > 127.5 ? "#000000" : "#FFFFFF";
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.display = "block";
      displayObj[dataInner[electionDeeta.display.right[i][0]]].innerHTML = dataInner[electionDeeta.display.right[i][0]];
      displayObj[dataInner[electionDeeta.display.right[i][0]]].style.left = `${(100-percentage)-(dataInner[electionDeeta.display.right[i][0]]*100/total)}%`;
      percentage += dataInner[electionDeeta.display.right[i][0]]*100/total;
    }
  }
  updateOne(getSenateResults(), document.getElementById("senateBar"));
  updateOne(getHouseResults(), document.getElementById("houseBar"));
  updateOne(getGovResults(), document.getElementById("governorBar"));
  updateOne(getPresResults(), document.getElementById("presBar"));
  outputElement.style.display = "none";
}
setInterval(function(){
  const difference = new Date("Nov 5, 2024 17:00:00")-Date.now();
  const days = zeroify(Math.floor(difference/86400000));
  const hours = zeroify(Math.floor((difference%86400000)/3600000));
  const minutes = zeroify(Math.floor((difference%3600000)/60000));
  const seconds = zeroify(Math.floor((difference%60000)/1000));
  if(difference > 0)
  {
    document.getElementById("g").style.display = "none";
    document.getElementById("s").style.display = "none";
    document.getElementById("h").style.display = "none";
    document.getElementById("p").style.display = "none";
    document.getElementById("middleLine").style.display = "none";
    document.getElementById("time").style.fontSize = `225px`;
    document.getElementById("time").style.top = `${(0.5*screen.availHeight)-402.5}px`;
    outputElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }
  else
  {
    updateBars();
  }
}, 1000);
setTimeout(
  function(){
    location.replace(location.href);
  },
60000);
function setSlide(num)
{
  if(num == 0)
  {
    document.getElementById("time").style.display = "block";
    document.getElementById("gclickMap").style.display = "none";
    document.getElementById("sclickMap").style.display = "none";
    document.getElementById("hclickMap").style.display = "none";
    document.getElementById("pclickMap").style.display = "none";
    document.getElementById("middleLine").style.display = "none";
    document.getElementById("statesMap").style.display = "none";
    document.getElementById("districtsMap").style.display = "none";
  }
  else if(num == 1)
  {
    document.getElementById("time").style.display = "none";
    document.getElementById("gclickMap").style.display = "block";
    document.getElementById("sclickMap").style.display = "block";
    document.getElementById("hclickMap").style.display = "block";
    document.getElementById("pclickMap").style.display = "block";
    document.getElementById("middleLine").style.display = "block";
    document.getElementById("statesMap").style.display = "none";
    document.getElementById("districtsMap").style.display = "none";
  }
  else if(num == 2)
  {
    document.getElementById("time").style.display = "none";
    document.getElementById("gclickMap").style.display = "none";
    document.getElementById("sclickMap").style.display = "none";
    document.getElementById("hclickMap").style.display = "none";
    document.getElementById("pclickMap").style.display = "none";
    document.getElementById("middleLine").style.display = "none";
    document.getElementById("statesMap").style.display = "block";
    document.getElementById("districtsMap").style.display = "none";
  }
  else if(num == 3)
  {
    document.getElementById("time").style.display = "none";
    document.getElementById("gclickMap").style.display = "none";
    document.getElementById("sclickMap").style.display = "none";
    document.getElementById("hclickMap").style.display = "none";
    document.getElementById("pclickMap").style.display = "none";
    document.getElementById("middleLine").style.display = "none";
    document.getElementById("statesMap").style.display = "none";
    document.getElementById("districtsMap").style.display = "block";
  }
}

function fillMap(num)
{
  if(num != 2)
  {
    for(let i of states)
    {
      switch(num)
      {
        case 0:
          document.getElementById("statesMap").contentDocument.getElementById(i.toUpperCase()).style.fill = getColor(electionDeeta[i].governor);
      }
    }
  }
}

document.getElementById("statesMap").addEventListener("load", () => {
  fillMap(0);
});

document.addEventListener("keyup", () => {
switch(window.event.code)
{
  case "Space":
    setSlide(1);
}
});