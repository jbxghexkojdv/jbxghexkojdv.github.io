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

function updateBars(data)
{
  function updateOne(dataInner, elem)
  {
    let displayObj = {};
    let afterPipe = false;
    let percentage = 0;
    for(let i = 0; i == i; i = i)
    {
      if(dataInner.display[i] != "|")
      {
        displayObj[dataInner.display[i]] = document.createElement('div');
        elem.appendChild(displayObj[dataInner.display[i]]);
        elem.style.display = "block";
        displayObj[dataInner.display[i]].style.position = "absolute";
        displayObj[dataInner.display[i]].style.height = "100%";
        displayObj[dataInner.display[i]].style.width = `${dataInner[dataInner.display[i]].amount*100/dataInner.total}%`;
        displayObj[dataInner.display[i]].style.backgroundColor = dataInner[dataInner.display[i]].color;
        displayObj[dataInner.display[i]].style.color = 
        ((parseInt(dataInner[dataInner.display[i]].color[1] + dataInner[dataInner.display[i]].color[2], 16) * 0.2126) +
        (parseInt(dataInner[dataInner.display[i]].color[3] + dataInner[dataInner.display[i]].color[4], 16) * 0.7152) + 
        (parseInt(dataInner[dataInner.display[i]].color[5] + dataInner[dataInner.display[i]].color[6], 16) * 0.0722))
         > 127.5 ? "#000000" : "#FFFFFF";
        displayObj[dataInner.display[i]].style.display = "block";
        displayObj[dataInner.display[i]].innerHTML = dataInner[dataInner.display[i]].amount;
        if(afterPipe)
        {
          displayObj[dataInner.display[i]].style.left = `${100-percentage-dataInner[dataInner.display[i]].amount*100/dataInner.total}%`;
        }
        else
        {
          displayObj[dataInner.display[i]].style.left = `${percentage}%`;
        }
        percentage += dataInner[dataInner.display[i]].amount*100/dataInner.total;
      }
      else
      {
        if(afterPipe)
        {
          break;
        }
        afterPipe = true;
        percentage = 0;
        i = dataInner.display.length;
      }
      if(!afterPipe)
      {
        i++;
      }
      else
      {
        i--;
      }
    }
  }
  updateOne(data.senate, document.getElementById("senateBar"));
  updateOne(data.house, document.getElementById("houseBar"));
  updateOne(data.gov, document.getElementById("governorBar"));
  updateOne(data.pres, document.getElementById("presBar"));
  
  return true;
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
    document.getElementById("middleLine").style.display = "none";
    document.getElementById("time").style.fontSize = `225px`;
    document.getElementById("time").style.top = `${(0.5*screen.availHeight)-402.5}px`;
    outputElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }
  else
  {
    let req = new XMLHttpRequest();
    req.onload = () => 
    {
      if(updateBars(JSON.parse(req.responseText)))
      {
        outputElement.style.fontSize = "10px";
        outputElement.style.top = "0%";
        outputElement.style.left = "0%";
        outputElement.style.textAlign = "left";
        document.getElementById("g").style.display = "block";
        document.getElementById("s").style.display = "block";
        document.getElementById("h").style.display = "block";
        document.getElementById("middleLine").style.display = "block";
        outputElement.innerHTML = new Date();
      }
    };
    req.open("GET", "https://jbxghexkojdv.github.io/2022elections/election.json");
    req.send();
    setTimeout(
    function(){
      location.replace(location.href);
    },
    60000);
  }
}, 1000);
