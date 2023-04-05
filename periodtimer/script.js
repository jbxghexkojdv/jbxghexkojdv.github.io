let pp = document.getElementById("pp");
let tp = document.getElementById("tp");
let non = document.getElementById("testing-toggle");
let gradep = document.getElementById("grade");
let darkModeButton = document.getElementById("dark-mode-button");

window.mobileCheck = function() 
{
  return screen.width < screen.height;
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
  lang: 0
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
    color_code = Math.round(color_code);
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
          gradep.innerHTML = lang[settings.lang].gr6sched;
          break;
        case 1:
          gradep.innerHTML = lang[settings.lang].gr7sched;
          break;
        case 2: 
          gradep.innerHTML = lang[settings.lang].gr8sched;
          break;
        case 3:
          gradep.innerHTML = lang[settings.lang].paused;
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
        darkModeButton.innerHTML = lang[settings.lang].dark;
      }
      else if (settings.darkMode == 2)
      {
        document.body.style.backgroundColor = "#FFFFFF";
        darkModeButton.innerHTML = lang[settings.lang].light;
      }
      else if(pp.innerHTML == lang[settings.lang].learnt || pp.innerHTML == lang[settings.lang].summer)
      {
        const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time_obj.ofWeek(7, 45, 1, 4)));
        const timeUntilSchool = isWeekend ? (time_obj.ofWeek(7, 45, 1, 4)-(Date.now()%604800000)) : ((time_obj.ofDay(7, 45, 1)+86400000)-(Date.now()%86400000))%86400000;
        const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
        const bgColor = color.toHue(color.decimalToColor(TUSFraction));
        document.body.style.backgroundColor = bgColor;
        darkModeButton.innerHTML = lang[settings.lang].colors;
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
  langchange()
  {
    if (!settings.shifting)
    {
      settings.lang++;
    }
    else
    {
      settings.lang--;
    }
    if (settings.lang < 0)
    {
      settings.lang += 3;
    }
    settings.lang %= 3;
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
  elem.style.display = "none";
  elem.alt = "background image"
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
  settings.schedule %= 3;
  if (settings.schedule === 0)
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
  }
  else if(settings.schedule === 1)
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
  }
  else
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].assembly;
  }

  think();
}

function updateTimer(timesIn, periodsIn)
{
  const now = Date.now() % 86400000;

  const startOfDay = time_obj.ofDay(7, 50);
  const endOfDay = timesIn[timesIn.length - 1];

  const lengthOfDay = endOfDay - startOfDay >= 0 ? endOfDay - startOfDay : endOfDay - startOfDay + 86400000;

  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;

  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}${lang[settings.lang].dwtd}`;

  let ending = ` ${settings.lang === 0 ? "remaining" : settings.lang === 1 ? "restante" : "restant"}${percentageString}`;

  if (!(((pp.innerHTML == lang[settings.lang].learnt) || (pp.innerHTML == lang[settings.lang].loading))) && (settings.darkMode == 0))
  {
    document.body.style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  }
  pp.innerHTML = lang[settings.lang].learnt;
  tp.innerHTML = time_obj.fromMilliseconds((time_obj.ofDay(7, 50)+86400000-now)%86400000) + lang[settings.lang].ussa;
  tp.style.top = "55%";
  if ((now > timesIn[0]) && (now < timesIn[1]))
  {
    pp.innerHTML = periodsIn[0][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(Math.round(timesIn[1]-now)) + ending;
  }
  else if ((now > timesIn[1]) && (now < timesIn[2]))
  {
    pp.innerHTML = periodsIn[1][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[2]-now) + ending;
  }
  else if ((now > timesIn[2]) && (now < timesIn[3]))
  {
    pp.innerHTML = periodsIn[2][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[3]-now) + ending;
  }
  else if ((now > timesIn[3]) && (now < timesIn[4]))
  {
    pp.innerHTML = periodsIn[3][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[4]-now) + ending;
  }
  else if ((now > timesIn[4]) && (now < timesIn[5]))
  {
    pp.innerHTML = periodsIn[4][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[5]-now) + ending;
  }
  else if ((now > timesIn[5]) && (now < timesIn[6]))
  {
    pp.innerHTML = periodsIn[5][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[6]-now) + ending;
  }
  else if ((now > timesIn[6]) && (now < timesIn[7]))
  {
    pp.innerHTML = periodsIn[6][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[7]-now) + ending;
  }
  else if ((now > timesIn[7]) && (now < timesIn[8]))
  {
    pp.innerHTML = periodsIn[7][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[8]-now) + ending;
  }
  else if ((now > timesIn[8]) && (now < timesIn[9]))
  {
    pp.innerHTML = periodsIn[8][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[9]-now) + ending;
  }
  else if ((now > timesIn[9]) && (now < timesIn[10]))
 {
    pp.innerHTML = periodsIn[9][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[10]-now) + ending;
  }
  else if ((now > timesIn[10]) && (now < timesIn[11]))
  {
    pp.innerHTML = periodsIn[10][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[11]-now) + ending;
  }
  else if ((now > timesIn[11]) && (now < timesIn[12]))
  {
    pp.innerHTML = periodsIn[11][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[12]-now) + ending;
  }
  else if ((now > timesIn[12]) && (now < timesIn[13]))
  {
    pp.innerHTML = periodsIn[12][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[13]-now) + ending;
  }
  else if ((now > timesIn[13]) && (now < timesIn[14]))
  {
    pp.innerHTML = periodsIn[13][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[14]-now) + ending;
  }
  else if ((now > timesIn[14]) && (now < timesIn[15]))
  {
    pp.innerHTML = periodsIn[14][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[15]-now) + ending;
  }
  else if ((now > timesIn[15]) && (now < timesIn[16]))
  {
    pp.innerHTML = periodsIn[15][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[16]-now) + ending;
  }
  else if ((now > timesIn[16]) && (now < timesIn[17]))
  {
    pp.innerHTML = periodsIn[16][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[17]-now) + ending;
  }
  else if ((now > timesIn[17]) && (now < timesIn[18]))
  {
    pp.innerHTML = periodsIn[17][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[18]-now) + ending;
  }
  else if ((timesIn.length >= 19) && ((now > timesIn[18]) && (now < timesIn[19])))
  {
    pp.innerHTML = periodsIn[18][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[19]-now) + ending;
  }
  else if ((timesIn.length >= 20) && ((now > timesIn[19]) && (now < timesIn[20])))
  {
    pp.innerHTML = periodsIn[19][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[20]-now) + ending;
  }
  else if((timesIn.length >= 21) && ((now > timesIn[20]) && (now < timesIn[21])))
  {
    pp.innerHTML = periodsIn[20][settings.lang];
    tp.innerHTML = time_obj.fromMilliseconds(timesIn[21]-now) + ending;
  }
  /*for(let i  = 0; i + 1 < timesIn.length; i++)
  {
    if((now > timesIn[i]) && (now < timesIn[i + 1]))
    {
      pp.innerHTML = periodsIn[i];
      tp.innerHTML = time_obj.fromMilliseconds(timesIn[i + 1]-now) + ending;
    }
  }*/
  const supRegex = /<sup>/;
  if (pp.innerHTML.match(supRegex) && !window.window.window.window.window.window.mobileCheck()) // why can you do this
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
      if(!window.mobileCheck())
      {
        tp.style.top = "48.5%";
      }
      if (settings.schedule === 0)
      {
        updateTimer(times.test[settings.grade], stuff.testing[settings.grade]);
      }
      else if(settings.schedule === 1)
      {
        updateTimer(times.normal[settings.grade], stuff.normal[settings.grade]);
      }
      else if(settings.schedule !== 3)
      {
        updateTimer(times.assembly[settings.grade], stuff.assembly[settings.grade]);
      }
    }
    else if(settings.schedule !== 3)
    {
      pp.innerHTML = lang[settings.lang].learnt;
      if(!window.window.window.window.window.window.mobileCheck())
      {
      pp.style.top = "-35%";
      }
      tp.innerHTML = time_obj.fromMilliseconds(time_obj.ofWeek(7, 50, 0, 4)-timeOfWeek+(settings.grade*180000)) + lang[settings.lang].ussa;
      tp.style.top = "55%";
    }
  }
  else if(settings.schedule !== 3)
  {
    pp.innerHTML = lang[settings.lang].summer;
    if(!window.window.window.window.window.window.mobileCheck())
    {
      pp.style.top = "-35%";
    }
    const dayIfNecessary = settings.grade ? 86400000 : 0
    tp.innerHTML = time_obj.fromMilliseconds(Number(new Date("Aug 10, 2022 07:50:00")) - Number(yes) + dayIfNecessary) + lang[settings.lang].ussa;
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
    case "Digit6": // set to 6th grade schedule
      settings.grade = 0;
      break;
    case "Digit7": // set to 7th grade schedule
      settings.grade = 1;
      break;
    case "Digit8": // set to 8th grade schedule
      settings.grade = 2;
      break;
    case "KeyT": // toggle testing schedule
      testt();
      break;
    case "Space": // change background color
      tdm();
      break;
    case "KeyI": // open image for background
      document.getElementsByTagName("input")[0].click();
      document.getElementById("bgimg").style.display = "block";
      darkModeButton.innerHTML = "Image" + lang[settings.lang] == 1 ? "n" : "";
      break;
    case "KeyR": // reset settings
      settings =
      {
        schedule: 1,
        darkMode: 1,
        grade: 0,
        flipped: false,
        lang: 0
      };
      resetImage();
      break;
    case "KeyE": // remove background image
      resetImage();
      break;
    case "KeyU": // ukrainian mode
      document.getElementById("bgimg").src = "a2.png";
      functions_general.update.darkMode();
      darkModeButton.innerHTML = "Image" + lang[settings.lang] == 1 ? "n" : "";
      break;
    case "KeyF": // change font
      functions_general.cycleFonts();
      break;
    case "KeyA": // australian mode
      pp.classList.toggle("flip");
      tp.classList.toggle("flip");
      non.classList.toggle("flip");
      gradep.classList.toggle("flip");
      darkModeButton.classList.toggle("flip");
      document.getElementById("credits").classList.toggle("flip");
      document.getElementById("bgimg").classList.toggle("flip");
      break;
    case "KeyP": // pause
      settings.grade = 3;
      break;
    case "KeyL": // language change
      functions_general.langchange();
      if (settings.schedule === 0)
      {
        document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
      }
      else
      {
        document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
      }
      document.getElementsByTagName("html")[0].lang = settings.lang == 0 ? "en" : settings.lang == 1 ? "es" : "fr";
      document.getElementById("credits").innerHTML = settings.lang == 0 ? "By Benjamin Harris" : settings.lang == 1 ? "Por Benjamin Harris" : "Par Benjamin Harris"
      break;
    case "ShiftLeft": // 
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
function handleImage(event)
{
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}
think();
functions_general.update.darkMode();