let voteOptions = ["Snowball", "Grassy", "Bell", "Robot Flower", "Basketball", "Foldy", "Eggy"];

function ordinal(num)
{
  if(num % 10 == 1 && num != 11) return num + "st";
  if(num % 10 == 2 && num != 12) return num + "nd";
  if(num % 10 == 3 && num != 13) return num + "rd";
  return num + "th";
}

function createElem(tag = "p", parent = document.getElementsByTagName("body")[0])
{
  let elem = document.createElement(tag);
  parent.appendChild(elem);
  return elem;
}

function createTable(rows = 0, cols = 0, parent = document.getElementsByTagName("body")[0])
{
  let table = createElem("table", parent);
  table.style.border = "3px solid black";
  let retval = 
  {
    table: table,
    rows: [],
    cells: [],
    setText(values)
    {
      if(typeof values != "object")
      {
        return "not an array";
      }
      for(let i of values)
      {
        if(typeof i != "object")
        {
          return "not a two-dimensional array";
        }
      }
      if(values.length > this.rows.length || !values || (values && values[0].length > this.cells[0].length))
      {
        return "invalid 2d array";
      }
      for(let i in values)
      {
        for(let j in values[i])
        {
          this.cells[i][j].innerHTML = values[i][j];
        }
      }
      return this;
    }
  };
  for(let i = 0; i < rows; i++)
  {
    // It is a woman's right to have an abortion
    // Fuck the Supreme Court
    let roe = createElem("tr", table);
    retval.rows.push(roe);
    roe.style.border = "3px solid black";
    let datas = [];
    for(let j = 0; j < rows; j++)
    {
      let cell = createElem("td", roe);
      cell.style.border = "3px solid black";
      datas.push(cell);
    }
    retval.cells.push(datas);
  }
  return retval;
}

function initBallot(options, system)
{
  let retval;
  switch(system)
  {
    
    default:
      retval = createTable(options.length+1, options.length+1);
      let vals = [[""]];
      for(let i = 1; i <= options.length; i++)
      {
        vals[0].push(ordinal(i) + "choice");
      }
      for(let i of options)
      {
        vals.push([i]);
      }
      retval.setText(vals);
      for(let i in retval.cells)
      {
        for(let j in retval.cells[i])
        {
          retval.cells[i][j].onclick = () => 
          {
            for(let k in retval.cells)
            {
              if(retval.cells[k][j].style.backgroundColor == "#80ff80")
              {
                for(let l of retval.cells[k])
                {
                  l.style.backgroundColor = "#808080";
                }
              }
              retval.cells[k][j].style.backgroundColor = "#ff8080";
            }
            for(let k in retval.cells[i])
            {
              if(retval.cells[i][k].style.backgroundColor == "#80ff80")
              {
                for(let l in retval.cells)
                {
                  retval.cells[l][k].style.backgroundColor = "#808080";
                }
              }
              retval.cells[i][k].style.backgroundColor = "#ff8080";
            }
          };
        }
      }
  }
  return retval;
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
  // let test = createTable(voteOptions.length+1, voteOptions.length+1);
  // test.setText([["", "1", "2"], ["option 1", "", ""], ["option 2", "", ""]]);
  let test = initBallot(voteOptions, "rc");
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
title.innerHTML += " for the project of " + month + " " + year;
