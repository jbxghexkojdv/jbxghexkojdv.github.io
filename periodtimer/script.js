let pp = document.getElementById("pp");
let tp = document.getElementById("tp");
let non = document.getElementById("testing-toggle");
let gradep = document.getElementById("grade");
let darkModeButton = document.getElementById("dark-mode-button");

/*function addScriptFile(link)
{
  if(typeof(link) != "string")
  {
    throw "lol not string";
  }
  let elem = document.createElement("script");
  elem.src = link;
  document.body.insertBefore(elem, document.getElementsByTagName("script")[0]);
}

addScriptFile("./schedules.js");
addScriptFile("./time.js");*/

window.mobileCheck = function() 
{
  let check = false;
  (function(){if(screen.width < screen.height) check = true;})();
  return check;
};
if (window.mobileCheck())
{
  document.getElementsByTagName("link")[0].href = "mStyle.css";
}
let settings = {

  schedule: 1,
  darkMode: 1,
  grade: 0,
  flipped: false,
  shifting: false,
};
function range(num)
{
  let arr = [];
  for (let i = 0; i<num; i++)
  {
    arr.push(i);
  }
  return arr;
}

const color = {

  toHue(color_code)
  {
    let r;
    let g;
    let b;
    const stage = Math.floor(color_code / 255);
    const theWayThrough = color_code % 255;
    switch(stage) {
      case 0:
        r = 255;
        g = theWayThrough;
        b = 0;
        break;
      case 1:
        r = 255-theWayThrough;
        g = 255;
        b = 0;
        break;
      case 2:
        r = 0;
        g = 255;
        b = theWayThrough;
        break;
      case 3:
        r = 0;
        g = 255-theWayThrough;
        b = 255;
        break;
      case 4:
        r = theWayThrough;
        g = 0;
        b = 255;
        break;
      case 5:
        r = 255;
        g = 0;
        b = 255-theWayThrough;
        break;
      default:
        print("Something went wrong.");
    }
    return `rgb(${r}, ${g}, ${b})`;
  },
  decimalToColor(dec)
  {
    return dec*1530;
  }
};

const functions_general = {

  update: {

    grade()
    {
      switch(settings.grade)
      {
        case 0:
          gradep.innerHTML = "6<sup>th</sup> grade schedule";
          break;
        case 1:
          gradep.innerHTML = "7<sup>th</sup> grade schedule";
          break;
        case 2: 
          gradep.innerHTML = "8<sup>th</sup> grade schedule";
          break;
        case 3:
          gradep.innerHTML = "Paused";
          break;
        default:
          gradep.innerHTML = "why you do dat";
      }
    },
    darkMode()
    {
      if (settings.darkMode == 1)
      {
        document.body.style.backgroundColor = "#000000";
        darkModeButton.innerHTML = "Dark Mode";
      }
      else if (settings.darkMode == 2)
      {
        document.body.style.backgroundColor = "#FFFFFF";
        darkModeButton.innerHTML = "Light Mode";
      }
      else
      {
        const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time_obj.ofWeek(7, 45, 1, 4)));
        const timeUntilSchool = isWeekend ? (time_obj.ofWeek(7, 45, 1, 4)-(Date.now()%604800000)) : ((time_obj.ofDay(7, 45, 1)+86400000)-(Date.now()%86400000))%86400000;
        const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
        const bgColor = color.toHue(color.decimalToColor(TUSFraction));
        document.body.style.backgroundColor = bgColor;
        darkModeButton.innerHTML = "COLORS";
      }
    },
  },
  gradechange()
  {
    if (!settings.shifting)
    {
      settings.grade++;
    }
    else
    {
      settings.grade--;
    }
    if (settings.grade < 0)
    {
      settings.grade += 3;
    }
    settings.grade %= 3;
    this.update.grade();
  },
  cycleFonts()
  {
    if (!settings.shifting)
    {
      font_num++;
    }
    else
    {
      font_num--;
    }
    if (font_num < 0)
    {
      font_num += fonts.length;
    }
    font_num %= fonts.length;
    pp.style.fontFamily = fonts[font_num];
    tp.style.fontFamily = fonts[font_num];
    non.style.fontFamily = fonts[font_num];
    gradep.style.fontFamily = fonts[font_num];
    document.getElementById("credits").style.fontFamily = fonts[font_num];
    document.getElementById("sus").style.fontFamily = fonts[font_num];
  }
};

function resetImage()
{
  document.getElementById("bgimg").remove();
  document.body.appendChild(
  elem = document.createElement("img"));
  functions_general.update.darkMode();
  elem.id = "bgimg";
}

const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Courier New"];
let font_num = 0;

function zeroify(num, digits = 2)
{
  let nums = num.toString(10);
  an = digits - (nums.length);
  for (let j = 0; j < an; j++)
  {
    nums = "0" + nums;
  }
  return nums;
}

function noNegativeModulo(dis, dat)
{
  if ((dis >= 0) && (dat >= 0))
  {
    return dis % dat;
  }
  if (dat < 0)
  {
    dat *= -1;
    dis *= -1;
  }

  do
  {
    dis += dat;
  }
  while (dis >= 0);

  return dis % dat;
}

function testt()
{
  if (!settings.shifting)
  {
    settings.schedule++;
  }
  else
  {
    settings.schedule--;
  }
  if (settings.schedule < 0)
  {
    settings.schedule += 3;
  }
  settings.schedule %= 2;
  if (settings.schedule === 0)
  {
    document.getElementById("testing-toggle").innerHTML = "Currently Testing";
  }
  else
  {
    document.getElementById("testing-toggle").innerHTML = "Not Testing";
  }

  think();
}
function print(thing, end = "<br />")
{
  document.getElementById("debug-element").innerHTML += thing + end;
}
function clear()
{
  document.getElementById("debug-element").innerHTML = "";
}
function updateTimer(timesIn, periodsIn)
{
  const now = Date.now() % 86400000;

  const startOfDay = time_obj.ofDay(7, 45);
  const endOfDay = timesIn[timesIn.length - 1];

  const lengthOfDay = endOfDay - startOfDay;

  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;

  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}% done with the day`;

  let ending = ` remaining${percentageString}`;

  if (!(((pp.innerHTML == "Learn't") || (pp.innerHTML == "Loading..."))) && (settings.darkMode == 0))
  {
    document.body.style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  }
  pp.innerHTML = "Learn't";
  tp.innerHTML = time_obj.fromMilliseconds((time_obj.ofDay(7, 45)+86400000-now)%86400000) + " until school starts again";
  tp.style.top = "55%";
  if ((now > times[0]) && (now < times[1]))
  {
    pp.innerHTML = periods[0];
    tp.innerHTML = time_obj.fromMilliseconds(Math.round(times[1]-now)) + ending;
  }
  else if ((now > times[1]) && (now < times[2]))
  {
    pp.innerHTML = periods[1];
    tp.innerHTML = time_obj.fromMilliseconds(times[2]-now) + ending;
  }
  else if ((now > times[2]) && (now < times[3]))
  {
    pp.innerHTML = periods[2];
    tp.innerHTML = time_obj.fromMilliseconds(times[3]-now) + ending;
  }
  else if ((now > times[3]) && (now < times[4]))
  {
    pp.innerHTML = periods[3];
    tp.innerHTML = time_obj.fromMilliseconds(times[4]-now) + ending;
  }
  else if ((now > times[4]) && (now < times[5]))
  {
    pp.innerHTML = periods[4];
    tp.innerHTML = time_obj.fromMilliseconds(times[5]-now) + ending;
  }
  else if ((now > times[5]) && (now < times[6]))
  {
    pp.innerHTML = periods[5];
    tp.innerHTML = time_obj.fromMilliseconds(times[6]-now) + ending;
  }
  else if ((now > times[6]) && (now < times[7]))
  {
    pp.innerHTML = periods[6];
    tp.innerHTML = time_obj.fromMilliseconds(times[7]-now) + ending;
  }
  else if ((now > times[7]) && (now < times[8]))
  {
    pp.innerHTML = periods[0];
    tp.innerHTML = time_obj.fromMilliseconds(times[8]-now) + ending;
  }
  else if ((now > times[8]) && (now < times[9]))
  {
    pp.innerHTML = periods[8];
    tp.innerHTML = time_obj.fromMilliseconds(times[9]-now) + ending;
  }
  else if ((now > times[9]) && (now < times[10]))
 {
    pp.innerHTML = periods[9];
    tp.innerHTML = time_obj.fromMilliseconds(times[10]-now) + ending;
  }
  else if ((now > times[10]) && (now < times[11]))
  {
    pp.innerHTML = periods[10];
    tp.innerHTML = time_obj.fromMilliseconds(times[11]-now) + ending;
  }
  else if ((now > times[11]) && (now < times[12]))
  {
    pp.innerHTML = periods[11];
    tp.innerHTML = time_obj.fromMilliseconds(times[12]-now) + ending;
  }
  else if ((now > times[12]) && (now < times[13]))
  {
    pp.innerHTML = periods[12];
    tp.innerHTML = time_obj.fromMilliseconds(times[13]-now) + ending;
  }
  else if ((now > times[13]) && (now < times[14]))
  {
    pp.innerHTML = periods[13];
    tp.innerHTML = time_obj.fromMilliseconds(times[14]-now) + ending;
  }
  else if ((now > times[14]) && (now < times[15]))
  {
    pp.innerHTML = periods[14];
    tp.innerHTML = time_obj.fromMilliseconds(times[15]-now) + ending;
  }
  else if ((now > times[15]) && (now < times[16]))
  {
    pp.innerHTML = periods[15];
    tp.innerHTML = time_obj.fromMilliseconds(times[16]-now) + ending;
  }
  else if ((now > times[16]) && (now < times[17]))
  {
    pp.innerHTML = periods[16];
    tp.innerHTML = time_obj.fromMilliseconds(times[17]-now) + ending;
  }
  else if ((now > times[17]) && (now < times[18]))
  {
    pp.innerHTML = periods[17];
    tp.innerHTML = time_obj.fromMilliseconds(times[18]-now) + ending;
  }
  else if ((times.length >= 19) && ((now > times[18]) && (now < times[19])))
  {
    pp.innerHTML = periods[18];
    tp.innerHTML = time_obj.fromMilliseconds(times[19]-now) + ending;
  }
  else if ((times.length >= 20) && ((now > times[19]) && (now < times[20])))
  {
    pp.innerHTML = periods[19];
    tp.innerHTML = time_obj.fromMilliseconds(times[20]-now) + ending;
  }
  else if((times.length >= 21) && ((now > times[20]) && (now < times[21])))
  {
    pp.innerHTML = periods[20];
    tp.innerHTML = time_obj.fromMilliseconds(times[21]-now) + ending;
  }
  /*for(let i in timesIn)
  {
    if((now > timesIn[i]) && (now < timesIn[i + 1]))
    {
      pp.innerHTML = periodsIn[i];
      tp.innerHTML = time_obj.fromMilliseconds(timesIn[i + 1]-now) + ending;
    }
  }*/
  const supRegex = /<sup>/;
  if (pp.innerHTML.match(supRegex) && !window.window.window.window.window.window.mobileCheck())
  {
    pp.style.top = "-36%";
  }
}
function think()
{
  const yes = new Date();
  const timeOfWeek = Date.now() % 604800000;
  const timeOfDay = Date.now() % 86400000;
  const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < timeOfWeek) && (timeOfWeek < time_obj.ofWeek(7, 45, 1, 4)));
  let isSummer = ((yes.getMonth() >= 4) && (yes.getMonth() <= 7));
  if ((yes.getMonth() == 7 && yes.getDate() >= 11) || (yes.getMonth() == 4 && yes.getDate() <= 23))
  {
    isSummer = false;
  }
  if ((yes.getMonth() == 7 && (((settings.grade ? 11 : 10) <= yes.getDate()) && (yes.getDate() <= (settings.grade ? 17 : 16)))) && (yes.getDay() >= (settings.grade ? 4 : 3)))
  {
    isSummer = false;
  }
  if (!isSummer)
  {
    if (!isWeekend)
    {
      if(!window.window.window.window.window.window.mobileCheck())
      {
        tp.style.top = "48.5%";
      }
      if (settings.schedule === 0)
      {
        updateTimer(times.test[settings.grade], stuff.testing[settings.grade]);
      }
      else if(settings.schedule !== 3)
      {
        updateTimer(times.normal[settings.grade], stuff.normal[settings.grade]);
      }
    }
    else if(settings.schedule !== 3)
    {
      pp.innerHTML = "Learn't";
      if(!window.window.window.window.window.window.mobileCheck())
      {
      pp.style.top = "-35%";
      }
      tp.innerHTML = time_obj.fromMilliseconds(time_obj.ofWeek(7, 50, 0, 4)-timeOfWeek+(settings.grade*180000)) + " until school starts again";
      tp.style.top = "55%";
    }
  }
  else if(settings.schedule !== 3)
  {
    pp.innerHTML = "Summer!";
    if(!window.window.window.window.window.window.mobileCheck())
    {
      pp.style.top = "-35%";
    }
    const dayIfNecessary = settings.grade ? 86400000 : 0
    tp.innerHTML = time_obj.fromMilliseconds(Number(new Date("Aug 10, 2022 07:50:00")) - Number(yes) + dayIfNecessary) + " until school starts again";
    tp.style.top = "55%";
  }
  functions_general.update.darkMode();
}
setInterval(think, 1000/8);
function tdm()
{
  if (!settings.shifting)
  {
    settings.darkMode++;
  }
  else
  {
    settings.darkMode--;
  }
  if (settings.darkMode < 0)
  {
    settings.darkMode += 3;
  }
  settings.darkMode %= 3;
  functions_general.update.darkMode();
}
document.addEventListener("keyup", () => {

  let evt = window.event;
  let code = evt.code;

  switch (code)
  {
    case "Digit6":
      settings.grade = 0;
      break;
    case "Digit7":
      settings.grade = 1;
      break;
    case "Digit8":
      settings.grade = 2;
      break;
    case "KeyT":
      testt();
      break;
    case "Space":
      tdm();
      break;
    case "KeyI":
      document.getElementsByTagName("input")[0].click();
      darkModeButton.innerHTML = "Image";
      break;
    case "KeyR":
      settings = {
        schedule: 1,
        darkMode: 1,
        grade: 0,
        flipped: false,
      };
      resetImage();
      break;
    case "KeyE":
      resetImage();
      break;
    case "KeyU":
      document.getElementById("bgimg").src = "a2.png";
      functions_general.update.darkMode();
      darkModeButton.innerHTML = "Image";
      break;
    case "KeyF":
      functions_general.cycleFonts();
      break;
    case "KeyA":
      pp.classList.toggle("flip");
      tp.classList.toggle("flip");
      non.classList.toggle("flip");
      gradep.classList.toggle("flip");
      darkModeButton.classList.toggle("flip");
      document.getElementById("credits").classList.toggle("flip");
      document.getElementById("bgimg").classList.toggle("flip");
      break;
    case "KeyP":
      settings.grade = 3;
      break;
    case "ShiftLeft":
      settings.shifting = false;
      break;
    case "ShiftRight":
      settings.shifting = false;
      break;
  }
  functions_general.update.grade();
});
document.addEventListener("keydown", () => {

  let evt = window.event;
  let code = evt.code;
  switch(code)
  {
    case "ShiftLeft":
      settings.shifting = true;
      break;
    case "ShiftRight":
      settings.shifting = true;
      break;
    default:
      
  }
});
window.addEventListener("resize", () => {

  if (window.innerHeight == 617)
  {
    document.getElementById("fullscreen-prompt-img").style.display = "block";
  }
  else
  {
    document.getElementById("fullscreen-prompt-img").style.display = "none";
  }
});
function handleImage(event)
{
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}
think();
functions_general.update.darkMode();
window.onload = () => {

  if (window.innerHeight == 617)
  {
    document.getElementById("fullscreen-prompt-img").style.display = "block";
  }
  else
  {
    document.getElementById("fullscreen-prompt-img").style.display = "none";
  }
}