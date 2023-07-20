const voteOptions = ["A program that counts the amount of times Ava says \"Wjejdjrjfjnf\"", "A thing that converts between \"normal\" time and military time", "Clicker game", "Secret message encoder/decoder", "Snake", "Choose your own adventure", "Weather app", "A machine that can generate potentially infinite strings of as and bs without ever saying the same one twice", "Bot that you can use to Google Translate your message 20 times"];
let ballot;

function makeArray(num)
{
  let retval = [];
  for(let i = 0; i < num; i++)
  {
    retval.push(0);
  }
  return retval;
}

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

function initBallot(options, system = null)
{
  let retval;
  switch(system)
  {
    case "fptp":
      break;
    case "approval":
      retval = createTable(options.length, 1);
      let vals = [[]];
      for(let i of options)
      {
        vals[0].push(i);
      }
      retval.setText(vals);
      for(let i in retval.cells[0])
      {
        retval.cells[0][i].onclick = () => {};
      }
      break;
    default:
      retval = createTable(options.length+1, options.length+1);
      let vals2 = [[""]];
      for(let i = 1; i <= options.length; i++)
      {
        vals2[0].push(ordinal(i) + " choice");
      }
      for(let i of options)
      {
        vals2.push([i]);
      }
      retval.setText(vals2);
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
            retval.cells[i][j].style.backgroundColor = "#80ff80";
          };
          retval.cells[i][j].style.backgroundColor = "#808080";
        }
      }
  }
  let submit = document.createElement("button");
  document.body.appendChild(submit);
  submit.onclick = send;
  submit.innerHTML = "Submit (will send you to email)"
  return retval;
}

function approval()
{
  let message = createElem();
  message.innerHTML = "Approval ballot here";
}

function rankedchoice()
{
  ballot = initBallot(voteOptions);
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
  case "fptp":
    fptp();
    break;
  default:
    rankedchoice();
}

function send(e)
{
  let choices = makeArray(voteOptions.length);
  switch(optionsobj.system)
  {
    case "approval":
      break;
    case "fptp":
      break;
    default:
      for(let i in ballot.table.children)
      {
        if(i > voteOptions.length || !parseInt(i))
        {
          continue;
        }
        for(let j in ballot.table.children[i].children)
        {
          if(j > voteOptions.length || !parseInt(j))
          {
            continue;
          }
          if(ballot.table.children[i].children[j].style.backgroundColor == "rgb(128, 255, 128)")
          {
            console.log(`Hit at i=${i}, j=${j}\nBefore: ${choices}`);
            choices[j-1] = voteOptions[i-1];
            console.log(`Putting \"${voteOptions[i-1]}\" at index ${j-1}\nAfter: ${choices}`);
          }
        }
      }
  }
  location.href = `mailto:jbxghexkojdv@gmail.com?subject=Vote&body=${choices.toString()}`;
}
