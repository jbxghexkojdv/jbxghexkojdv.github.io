let outputElement = document.getElementById("time");

let slide = 0;

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
      const candDeets = electionDeeta.display.left[i];
      dataInner[candDeets[0]] = dataInner[candDeets[0]] ? 
        dataInner[candDeets[0]] : 0;
        
      displayObj[dataInner[candDeets[0]]] = document.createElement('div');
      elem.appendChild(displayObj[dataInner[candDeets[0]]]);
      elem.style.display = "block";
      displayObj[dataInner[candDeets[0]]].style.position = "absolute";
      displayObj[dataInner[candDeets[0]]].style.height = "100%";
      displayObj[dataInner[candDeets[0]]].style.width = 
        `${dataInner[candDeets[0]]*100/total}%`;

      displayObj[dataInner[candDeets[0]]].style.backgroundColor = candDeets[2];
      displayObj[dataInner[candDeets[0]]].style.color = 
       ((parseInt(candDeets[2][1] + candDeets[2][2], 16) * 0.2126) + //we start at 1 because of the # in the color code, dumbass
        (parseInt(candDeets[2][3] + candDeets[2][4], 16) * 0.7152) + 
        (parseInt(candDeets[2][5] + candDeets[2][6], 16) * 0.0722))
        > 127.5 ? "#000000" : "#FFFFFF";
      displayObj[dataInner[candDeets[0]]].style.display = "block";
      displayObj[dataInner[candDeets[0]]].innerHTML = dataInner[candDeets[0]];
      displayObj[dataInner[candDeets[0]]].style.left = `${percentage}%`;
      percentage += dataInner[candDeets[0]]*100/total;
    }
    percentage = 0; 
    for(let i = 0; i < electionDeeta.display.right.length; i++)
    {
      const candDeets = electionDeeta.display.right[i];
      dataInner[candDeets[0]] = dataInner[candDeets[0]] ? 
        dataInner[candDeets[0]] : 0;
      displayObj[dataInner[candDeets[0]]] = document.createElement('div');
      elem.appendChild(displayObj[dataInner[candDeets[0]]]);
      elem.style.display = "block";
      displayObj[dataInner[candDeets[0]]].style.position = "absolute";
      displayObj[dataInner[candDeets[0]]].style.height = "100%";
      displayObj[dataInner[candDeets[0]]].style.width = 
        `${dataInner[candDeets[0]]*100/total}%`;

      displayObj[dataInner[candDeets[0]]].style.backgroundColor = candDeets[2];

      displayObj[dataInner[candDeets[0]]].style.color = 
       ((parseInt(candDeets[2][0] + candDeets[2][1], 16) * 0.2126) +
        (parseInt(candDeets[2][2] + candDeets[2][3], 16) * 0.7152) + 
        (parseInt(candDeets[2][4] + candDeets[2][5], 16) * 0.0722))
        > 127.5 ? "#000000" : "#FFFFFF";

      displayObj[dataInner[candDeets[0]]].style.display = "block";
      displayObj[dataInner[candDeets[0]]].innerHTML = dataInner[candDeets[0]];
      displayObj[dataInner[candDeets[0]]].style.left =
        `${(100-percentage)-(dataInner[candDeets[0]]*100/total)}%`;

      percentage += dataInner[candDeets[0]]*100/total;
    }
  }
  updateOne(getSenateResults(), document.getElementById("senateBar"));
  updateOne(getHouseResults(), document.getElementById("houseBar"));
  updateOne(getGovResults(), document.getElementById("governorBar"));
  updateOne(getPresResults(), document.getElementById("presBar"));
  outputElement.style.display = "none";
}
let int = setInterval(function(){
  const difference = new Date("Nov 5, 2024 17:00:00")-Date.now();
  const days = zeroify(Math.floor(difference/86400000));
  const hours = zeroify(Math.floor((difference%86400000)/3600000));
  const minutes = zeroify(Math.floor((difference%3600000)/60000));
  const seconds = zeroify(Math.floor((difference%60000)/1000));
  if(difference > 0)
  {
    setSlide(0);
    document.getElementById("time").style.fontSize = `225px`;
    document.getElementById("time").style.top = 
      `${(0.5*screen.availHeight)-402.5}px`;

    outputElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }
  else
  {
    updateBars();
  }
}, 1000);
setTimeout(
  function(){
    location.replace(`${location.origin}${location.pathname}?slide=${slide}`);
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
    clearInterval(int);
    updateBars();
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
    clearInterval(int);
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
    clearInterval(int);
  }
  slide = num;
}

function fillMap(num)
{
  for(let i of states)
  {
    switch(num)
    {
      case 0: // Governors
        document.getElementById("statesMap").contentDocument
          .getElementById(i.toUpperCase()).style.fill = 
          getColor(electionDeeta[i].governor);
        break;
      case 1: // Senate
        document.getElementById("statesMap").contentDocument.
          getElementById(i.toUpperCase()).style.fill = 
          (getValue(electionDeeta[i].senate, 4, 2, 8) == 0b0001) || 
          (getValue(electionDeeta[i].senate, 4, 2, 8) == 0b1100) || 
          (getValue(electionDeeta[i].senate, 4, 2, 8) == 0b0000) ? 
          "#000000" : getColor(getValue(electionDeeta[i].senate, 4, 2, 8));
        break;
      case 2: // House
        for(let j = 0; j < getValue(electionDeeta[i].president, 8, 1,
          i == "ne" ? 24 : i == "me" ? 20 : 12) - 2n; j++)
        {
          document.getElementById("districtsMap").contentDocument
            .getElementById(i.toUpperCase() + "-" + (j + 1)).style.fill = 
            getColor(getValue(electionDeeta[i].house, 4, j + 1, 
            4 * (getValue(electionDeeta[i].president, 8, 1, 
            i == "ne" ? 24 : i == "me" ? 20 : 12) - 8n)));
        }
        break;
      case 3: // President
        document.getElementById("statesMap").contentDocument
          .getElementById(i.toUpperCase()).style.fill = 
          getColor(getValue(electionDeeta[i].president, 4, 3,
          i == "ne" ? 24 : i == "me" ? 20 : 12));
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

window.onload = () =>
{
  setSlide(location.search ? Number(location.search[7]) : 0);
};