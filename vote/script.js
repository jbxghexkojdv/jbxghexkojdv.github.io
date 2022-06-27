function createElem(tag = "p", parent = document.getElementsByTagName("body")[0])
{
  let elem = document.createElement(tag);
  parent.appendChild(elem);
  return elem;
}

function approval()
{
  let message = createElem();
  message.innerHTML = "Approval ballot here";
}

function rankedchoice()
{
  let message = createElem();
  message.innerHTML = "Ranked Choice ballot here";
}

function fptp()
{
  let message = createElem();
  message.innerHTML = "Dumbass ballot here";
}

function queryStringParser(url)
{
  let query = url.split("?")[1];
  let args = query.split("&");
  let retval = {};
  for (let i of args)
  {
    let kv = i.split("=");
    retval[kv[0]] = kv[1];
  }
  return retval;
}

const optionsobj = queryStringParser(window.location.href);

switch(optionsobj.system)
{
  case "approval":
    approval();
    break;
  case "rc":
    rankedchoice();
    break;
  case "fptp":
    fptp();
    break;
  default:
    rankedchoice();
}

let title = document.getElementsByTagName("title")[0];

let month;
let year;
switch(Number(optionsobj.time) % 6)
{
  case 0:
    month = "September";
    break;
  case 1:
    month = "November";
    break;
  case 2:
    month = "January";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "July";
}

year = Math.floor((Number(optionsobj.time)-2)/6)+2022;
title += " for the project of " + month + " " + year;
