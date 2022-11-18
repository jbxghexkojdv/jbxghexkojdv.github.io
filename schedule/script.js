// Слава Україні!
// amgos sus
let pp = document.getElementById("pp");
let tp = document.getElementById("tp");
let non = document.getElementById("testing-toggle");
let gradep = document.getElementById("grade");
let darkModeButton = document.getElementById("dark-mode-button");
window.mobileCheck = function() 
{
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
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
const time_obj = {

  ofDay(h, m, s = 0)
  {
    return ((((((h+(new Date().getTimezoneOffset()/60))*60)+m)*60)+s)*1000)%86400000;
  },
  ofWeek(h, m, s = 0, d = 0)
  {
    /*
    Thu:0
    Fri:1
    Sat:2
    Sun:3
    Mon:4
    Tue:5
    Wed:6
    */
    return ((((((((h+(new Date().getTimezoneOffset()/60))*60)+m)*60)+s)*1000)+(d*86400000))%604800000);
  },
  fromSeconds(seconds, unit = "auto")
  {
    if (unit == "auto")
    {
      if (seconds >= 86400)
      {
        unit = "days";
      }
      else if (seconds >= 3600)
      {
        unit = "hours";
      }
      else
      {
        unit = "minutes";
      }
    }
    if (unit == "minutes")
    {
      return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
    }
    else if (unit == "hours")
    {
      return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
    else if (unit == "days")
    {
      return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
  },
  fromMilliseconds(ms, unit = "auto")
  {
    seconds = Math.round(ms/1000);
    if (unit == "auto")
    {
      if (seconds >= 86400)
      {
        unit = "days";
      }
      else if (seconds >= 3600)
      {
        unit = "hours";
      }
      else
      {
        unit = "minutes";
      }
    }
    if (unit == "minutes")
    {
      return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
    }
    else if (unit == "hours")
    {
      return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
    else if (unit == "days")
    {
      return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
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
        document.getElementsByTagName("body")[0].style.backgroundColor = "#000000";
        darkModeButton.innerHTML = "Dark Mode";
      }
      else if (settings.darkMode == 2)
      {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
        darkModeButton.innerHTML = "Light Mode";
      }
      else
      {
        const isWeekend = ((time_obj.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time_obj.ofWeek(7, 45, 1, 4)));
        const timeUntilSchool = isWeekend ? (time_obj.ofWeek(7, 45, 1, 4)-(Date.now()%604800000)) : ((time_obj.ofDay(7, 45, 1)+86400000)-(Date.now()%86400000))%86400000;
        const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
        const bgColor = color.toHue(color.decimalToColor(TUSFraction));
        document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
        darkModeButton.innerHTML = "COLORS";
      }
    },
    cookies()
    {
      if(cookies.allowed)
      {
        document.cookie = "s=" + JSON.stringify(settings);
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

const cookies = {
  
  allowed: false,
  accept()
  {
    this.allowed = true;
    functions_general.update.cookies();
    document.getElementById("cookie").style.display = "none";
  },

  deny()
  {
    document.getElementById("cookie").style.display = "none";
  },
};

if(document.cookie)
{
  cookies.allowed = true;
  document.getElementById("cookie").style.display = "none";
}

function resetImage()
{
  document.getElementById("bgimg").remove();
  document.getElementsByTagName("body")[0].appendChild(
  elem = document.createElement("img"));
  functions_general.update.darkMode();
  elem.id = "bgimg";
}

const times = [
             //         Start time               End time
            time_obj.ofDay(15, 40), time_obj.ofDay(17, 20),
            time_obj.ofDay(17, 40), time_obj.ofDay(17, 50),
            time_obj.ofDay(18, 20), time_obj.ofDay(19, 10),
            time_obj.ofDay(19, 50), time_obj.ofDay(20, 00),
            time_obj.ofDay(20, 10), time_obj.ofDay(20, 20),
          ];
const stuff = [
                         
                          "Free time",
                          "Homework",
                          "Free time",
                          "Homework",
                          "Free time",
                          "Homework",
                          "Free time",
                          "Homework",
                          "Free time"
                      ];

const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Courier New"];
let font_num = 0;

function zeroify(num, digits = 2)
{
  nums = num.toString(10);
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
function updateTimer(times, periods)
{
  const now = Date.now() % 86400000;

  const startOfDay = time_obj.ofDay(7, 45);
  const endOfDay = times[times.length - 1];

  const lengthOfDay = endOfDay - startOfDay;

  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;

  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}% done with the day`;

  let ending = ` remaining${percentageString}`;

  if (!(((pp.innerHTML == "Learn't") || (pp.innerHTML == "Loading..."))) && (settings.darkMode == 0))
  {
    document.getElementsByTagName("body")[0].style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  }
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
  else
  {
    pp.innerHTML = "Afternoon't";
    tp.innerHTML = time_obj.fromMilliseconds((time_obj.ofDay(7, 45)+86400000-now)%86400000) + " until afternoon starts again";
    tp.style.top = "55%";
  }
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
        updateTimer(times, stuff);
      
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
  functions_general.update.cookies();
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
console.log = (a) => {

  document.getElementById("debug-element").innerHTML += a + "<br />"
}
window.onload = () => {

  if (window.innerHeight == 617)
  {
    document.getElementById("fullscreen-prompt-img").style.display = "block";
  }
  else
  {
    document.getElementById("fullscreen-prompt-img").style.display = "none";
  }
  if(document.cookie)
  {
    settings = JSON.parse(document.cookie.slice(2));
  }
}

console.error = console.log;

/*i ⅱ ⅲ ⅳ v ⅵ ⅶ ⅷ x ⅺ ⅻ
*/
