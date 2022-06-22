//Слава Україні!
let pp = document.getElementById("pp");
let tp = document.getElementById("tp");
let non = document.getElementById("testing-toggle");
let gradep = document.getElementById("grade");
let darkModeButton = document.getElementById("dark-mode-button");
let settings = {
  schedule: 1,
  darkMode: 1,
  grade: 0,
  flipped: false,
  shifting: false,
};
function range(num) {
  let arr = [];
  for (let i = 0; i<num; i++){
    arr.push(i);
  }
  return arr;
}
const color = {
  toHue(color_code) {
    let r;
    let g;
    let b;
    const stage = Math.floor(color_code/255);
    const theWayThrough = color_code%255;
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
  decimalToColor(dec) {
    return dec*1530;
  }
};
const time_obj = {
  ofDay(h, m, s = 0) {
    return ((((((h+(new Date().getTimezoneOffset()/60))*60)+m)*60)+s)*1000)%86400000;
  },
  ofWeek(h, m, s = 0, d = 0) {
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
  fromSeconds(seconds, unit = "auto") {
    if (unit == "auto") {
      if (seconds >= 86400){
        unit = "days";
      } else if (seconds >= 3600) {
        unit = "hours";
      } else {
        unit = "minutes";
      }
    }
    if (unit == "minutes") {
      return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
    } else if (unit == "hours") {
      return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    } else if (unit == "days") {
      return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
  },
  fromMilliseconds(ms, unit = "auto") {
    seconds = Math.round(ms/1000);
    if (unit == "auto") {
      if (seconds >= 86400){
        unit = "days";
      } else if (seconds >= 3600) {
        unit = "hours";
      } else {
        unit = "minutes";
      }
    }
    if (unit == "minutes") {
      return Math.floor(seconds/60) + ":" + zeroify(seconds%60);
    } else if (unit == "hours") {
      return Math.floor(seconds/3600) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    } else if (unit == "days") {
      return Math.floor(seconds/86400) + ":" + zeroify(Math.floor(seconds/3600)%24) + ":" + zeroify(Math.floor(seconds/60)%60) + ":" + zeroify(seconds%60);
    }
  }
};
const functions_general = {
  update: {
    grade() {
      switch(settings.grade) {
        case 0:
          gradep.innerHTML = "6<sup>th</sup> grade schedule";
          break;
        case 1:
          gradep.innerHTML = "7<sup>th</sup> grade schedule";
          break;
        case 2: 
          gradep.innerHTML = "8<sup>th</sup> grade schedule";
          break;
        default:
          gradep.innerHTML = "why you do dat";
      }
    },
    darkMode() {
      if (settings.darkMode == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#000000";
        darkModeButton.innerHTML = "Dark Mode";
      } else if (settings.darkMode == 2) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
        darkModeButton.innerHTML = "Light Mode";
      } else {
        const isWeekend = ((time_obj.ofWeek(14, 38, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time_obj.ofWeek(7, 42, 1, 4)));
        const timeUntilSchool = isWeekend ? (time_obj.ofWeek(7, 42, 1, 4)-(Date.now()%604800000)) : ((time_obj.ofDay(7, 42, 1)+86400000)-(Date.now()%86400000))%86400000;
        const TUSFraction = (isWeekend)&&(timeUntilSchool>0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
        const bgColor = color.toHue(color.decimalToColor(TUSFraction));
        document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
        darkModeButton.innerHTML = "COLORS";
      }
    }
  },
  gradechange() {
    if (!settings.shifting) settings.grade++;
    if (settings.shifting) settings.grade--;
    if (settings.grade < 0) settings.grade += 3;
    settings.grade%=3;
    this.update.grade();
  },
  cycleFonts() {
    if (!settings.shifting) font_num++;
    if (settings.shifting) font_num--;
    if (font_num < 0) font_num += fonts.length;
    font_num %= fonts.length;
    pp.style.fontFamily = fonts[font_num];
    tp.style.fontFamily = fonts[font_num];
    non.style.fontFamily = fonts[font_num];
    gradep.style.fontFamily = fonts[font_num];
    document.getElementById("credits").style.fontFamily = fonts[font_num];
    document.getElementById("sus").style.fontFamily = fonts[font_num];
  }
};
function resetImage() {
  document.getElementById("bgimg").remove();
  document.getElementsByTagName("body")[0].appendChild(
  elem = document.createElement("img"));
  functions_general.update.darkMode();
  elem.id = "bgimg";
}
const times = {
  normal:[[time_obj.ofDay(7, 44, 1), time_obj.ofDay(8, 13, 1), time_obj.ofDay(8, 16, 1), time_obj.ofDay(8, 57, 1), time_obj.ofDay(9, 0, 1), time_obj.ofDay(9, 41, 1), time_obj.ofDay(9, 44, 1), time_obj.ofDay(10, 25, 1), time_obj.ofDay(10, 28, 1), time_obj.ofDay(11, 9, 1), time_obj.ofDay(11, 11, 1), time_obj.ofDay(11, 41, 1), time_obj.ofDay(11, 43, 1), time_obj.ofDay(12, 27, 1), time_obj.ofDay(12, 30, 1), time_obj.ofDay(13, 11, 1), time_obj.ofDay(13, 14, 1), time_obj.ofDay(13, 55, 1), time_obj.ofDay(13, 58, 1), time_obj.ofDay(14, 39, 1)], [time_obj.ofDay(7, 47, 1), time_obj.ofDay(8, 16, 1), time_obj.ofDay(8, 19, 1), time_obj.ofDay(9, 0, 1), time_obj.ofDay(9, 3, 1), time_obj.ofDay(9, 44, 1), time_obj.ofDay(9, 47, 1), time_obj.ofDay(10, 28, 1), time_obj.ofDay(10, 31, 1), time_obj.ofDay(11, 12, 1), time_obj.ofDay(11, 15, 1), time_obj.ofDay(11, 56, 1), time_obj.ofDay(11, 59, 1), time_obj.ofDay(12, 40, 1), time_obj.ofDay(12, 42, 1), time_obj.ofDay(13, 12, 1), time_obj.ofDay(13, 14, 1), time_obj.ofDay(13, 58, 1), time_obj.ofDay(14, 1, 1), time_obj.ofDay(14, 42, 1)], [time_obj.ofDay(7, 50, 1), time_obj.ofDay(8, 19, 1), time_obj.ofDay(8, 22, 1), time_obj.ofDay(9, 3, 1), time_obj.ofDay(9, 6, 1), time_obj.ofDay(9, 47, 1), time_obj.ofDay(9, 50, 1), time_obj.ofDay(10, 31, 1), time_obj.ofDay(10, 34, 1), time_obj.ofDay(11, 15, 1), time_obj.ofDay(11, 18, 1), time_obj.ofDay(11, 59, 1), time_obj.ofDay(12, 1, 1), time_obj.ofDay(12, 31, 1), time_obj.ofDay(12, 33, 1), time_obj.ofDay(13, 17, 1), time_obj.ofDay(13, 20, 1), time_obj.ofDay(14, 1, 1), time_obj.ofDay(14, 4, 1), time_obj.ofDay(14, 45, 1)]],
  test: [[time_obj.ofDay(7, 44, 1), time_obj.ofDay(9, 52, 1), time_obj.ofDay(9, 55, 1), time_obj.ofDay(10, 24, 1), time_obj.ofDay(10, 27, 1), time_obj.ofDay(10, 56, 1), time_obj.ofDay(10, 59, 1), time_obj.ofDay(11, 28, 1), time_obj.ofDay(11, 31, 1), time_obj.ofDay(12, 0, 1), time_obj.ofDay(12, 2, 1), time_obj.ofDay(12, 32, 1), time_obj.ofDay(12, 34, 1), time_obj.ofDay(13, 3, 1), time_obj.ofDay(13, 6, 1), time_obj.ofDay(13, 35, 1), time_obj.ofDay(13, 38, 1), time_obj.ofDay(14, 7, 1), time_obj.ofDay(14, 10, 1), time_obj.ofDay(14, 39, 1)], [time_obj.ofDay(7, 47, 1), time_obj.ofDay(9, 55, 1), time_obj.ofDay(9, 58, 1), time_obj.ofDay(10, 27, 1), time_obj.ofDay(10, 30, 1), time_obj.ofDay(10, 59, 1), time_obj.ofDay(11, 2, 1), time_obj.ofDay(11, 31, 1), time_obj.ofDay(11, 34, 1), time_obj.ofDay(12, 3, 1), time_obj.ofDay(12, 6, 1), time_obj.ofDay(12, 35, 1), time_obj.ofDay(12, 38, 1), time_obj.ofDay(13, 7, 1), time_obj.ofDay(13, 9, 1), time_obj.ofDay(13, 39, 1), time_obj.ofDay(13, 41, 1), time_obj.ofDay(14, 10, 1), time_obj.ofDay(14, 13, 1), time_obj.ofDay(14, 42, 1)], [time_obj.ofDay(7, 50, 1), time_obj.ofDay(9, 58, 1), time_obj.ofDay(10, 1, 1), time_obj.ofDay(10, 30, 1), time_obj.ofDay(10, 33, 1), time_obj.ofDay(11, 2, 1), time_obj.ofDay(11, 5, 1), time_obj.ofDay(11, 34, 1), time_obj.ofDay(11, 37, 1), time_obj.ofDay(12, 6, 1), time_obj.ofDay(12, 9, 1), time_obj.ofDay(12, 38, 1), time_obj.ofDay(12, 40, 1), time_obj.ofDay(13, 10, 1), time_obj.ofDay(13, 12, 1), time_obj.ofDay(13, 41, 1), time_obj.ofDay(13, 44, 1), time_obj.ofDay(14, 13, 1), time_obj.ofDay(14, 16, 1), time_obj.ofDay(14, 45, 1)]],
  fieldDay: [[time_obj.ofDay(7, 44, 1), time_obj.ofDay(7, 57, 1), time_obj.ofDay(8, 0, 1), time_obj.ofDay(8, 29, 1), time_obj.ofDay(8, 32, 1), time_obj.ofDay(9, 1, 1), time_obj.ofDay(9, 4, 1), time_obj.ofDay(9, 33, 1), time_obj.ofDay(9, 36, 1), time_obj.ofDay(10, 5, 1), time_obj.ofDay(10, 8, 1), time_obj.ofDay(10, 37, 1), time_obj.ofDay(10, 40, 1), time_obj.ofDay(11, 9, 1), time_obj.ofDay(11, 12, 1), time_obj.ofDay(11, 41, 1), time_obj.ofDay(11, 43, 1), time_obj.ofDay(12, 13, 1), time_obj.ofDay(12, 15, 1), time_obj.ofDay(12, 44, 1), time_obj.ofDay(12, 50, 1), time_obj.ofDay(14, 45)], [time_obj.ofDay(7, 47, 1), time_obj.ofDay(8, 0, 1), time_obj.ofDay(8, 3, 1), time_obj.ofDay(8, 32, 1), time_obj.ofDay(8, 35, 1), time_obj.ofDay(9, 4, 1), time_obj.ofDay(9, 7, 1), time_obj.ofDay(9, 36, 1), time_obj.ofDay(9, 39, 1), time_obj.ofDay(10, 8, 1), time_obj.ofDay(10, 11, 1), time_obj.ofDay(10, 40, 1), time_obj.ofDay(10, 42, 1), time_obj.ofDay(11, 12, 1), time_obj.ofDay(11, 14, 1), time_obj.ofDay(11, 43, 1), time_obj.ofDay(11, 46, 1), time_obj.ofDay(12, 15, 1), time_obj.ofDay(12, 18, 1), time_obj.ofDay(12, 47, 1), time_obj.ofDay(12, 50, 1), time_obj.ofDay(14, 45)], [time_obj.ofDay(7, 50, 1), time_obj.ofDay(8, 3, 1), time_obj.ofDay(8, 6, 1), time_obj.ofDay(8, 35, 1), time_obj.ofDay(8, 38, 1), time_obj.ofDay(9, 7, 1), time_obj.ofDay(9, 10, 1), time_obj.ofDay(9, 39, 1), time_obj.ofDay(9, 42, 1), time_obj.ofDay(10, 11, 1), time_obj.ofDay(10, 14, 1), time_obj.ofDay(10, 43, 1), time_obj.ofDay(10, 46, 1), time_obj.ofDay(11, 15, 1), time_obj.ofDay(11, 18, 1), time_obj.ofDay(11, 47, 1), time_obj.ofDay(11, 50, 1), time_obj.ofDay(12, 19, 1), time_obj.ofDay(12, 21, 1), time_obj.ofDay(12, 51, 1), time_obj.ofDay(12, 53, 1), time_obj.ofDay(14, 45)]]
};
const stuff = [[["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-Lunch", "Lunch", "Lunch-5", "5<sup>th</sup> hour", "5-6", "6<sup>th</sup> hour", "6-7", "7<sup>th</sup> hour", "7-8", "8<sup>th</sup> hour"], ["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-5", "5<sup>th</sup> hour", "5-6", "6<sup>th</sup> hour", "6-Lunch", "Lunch", "Lunch-7", "7<sup>th</sup> hour", "7-8", "8<sup>th</sup> hour"], ["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-5", "5<sup>th</sup> hour", "5-Lunch", "Lunch", "Lunch-6", "6<sup>th</sup> hour", "6-7", "7<sup>th</sup> hour", "7-8", "8<sup>th</sup> hour"]], [["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-5", "5<sup>th</sup> hour", "5-6", "6<sup>th</sup> hour", "6-7", "7<sup>th</sup> hour", "7-Lunch", "Lunch", "Lunch-8", "8<sup>th</sup> hour", "8-Activity", "Activity"], ["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-5", "5<sup>th</sup> hour", "5-Lunch", "Lunch", "Lunch-6", "6<sup>th</sup> hour", "6-7", "7<sup>th</sup> hour", "7-8", "8<sup>th</sup> hour"], ["AB", "AB-1", "1<sup>st</sup> hour", "1-2", "2<sup>nd</sup> hour", "2-3", "3<sup>rd</sup> hour", "3-4", "4<sup>th</sup> hour", "4-5", "5<sup>th</sup> hour", "5-6", "6<sup>th</sup> hour", "6-7", "7<sup>th</sup> hour", "7-8", "8<sup>th</sup> hour", "8-Lunch", "Lunch", "Lu.-Act."]]];
const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Courier New"];
let font_num = 0;
function zeroify(num, digits = 2) {
  nums = num.toString(10);
  an = digits - (nums.length);
  for (let j = 0; j < an; j++) {
    nums = "0" + nums;
  }
  return nums;
}
function noNegativeModulo(dis, dat) {
  if ((dis >= 0) && (dat >= 0)) return dis % dat;
  if (dat < 0) dat *= -1;
  if (dis < 0) {
    do {
      dis += dat;
    } while (dis >= 0);
    return dis % dat;
  }
}
function testt() {
  if (!settings.shifting) settings.schedule++;
  if (settings.shifting) settings.schedule--;
  if (settings.schedule < 0) settings.schedule += 3;
  settings.schedule%=3;
  if (settings.schedule === 0) {
    document.getElementById("testing-toggle").innerHTML = "Currently Testing";
  } else if (settings.schedule === 1) {
    document.getElementById("testing-toggle").innerHTML = "Not Testing";
  } else {
    document.getElementById("testing-toggle").innerHTML = "Field Day";
  }
  think();
}
function print(thing, end = "<br />") {
  document.getElementById("debug-element").innerHTML += thing + end;
}
function clear() {
  document.getElementById("debug-element").innerHTML = "";
}
function updateTimer(times, periods) {
  const now = Date.now()%86400000;
  const startOfDay = time_obj.ofDay(7, 42) + (settings.grade*180000);
  let endOfDay;
  if (times.length == 22) {
    endOfDay = times[21];
  } else {
    endOfDay = times[19];
  }
  const lengthOfDay = endOfDay - startOfDay;
  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;
  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}% done with the day`;
  let ending = ` remaining${percentageString}`;
  if (!(((pp.innerHTML == "Learn't") || (pp.innerHTML == "Loading...")))&&(settings.darkMode == 0)) document.getElementsByTagName("body")[0].style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  if ((now > times[0]) && (now < times[1])) {
    pp.innerHTML = periods[0];
    tp.innerHTML = time_obj.fromMilliseconds(Math.round(times[1]-now)) + ending;
  } else if ((now > times[1]) && (now < times[2])) {
    pp.innerHTML = periods[1];
    tp.innerHTML = time_obj.fromMilliseconds(times[2]-now) + ending;
  } else if ((now > times[2]) && (now < times[3])) {
    pp.innerHTML = periods[2];
    tp.innerHTML = time_obj.fromMilliseconds(times[3]-now) + ending;
  } else if ((now > times[3]) && (now < times[4])) {
    pp.innerHTML = periods[3];
    tp.innerHTML = time_obj.fromMilliseconds(times[4]-now) + ending;
  } else if ((now > times[4]) && (now < times[5])) {
    pp.innerHTML = periods[4];
    tp.innerHTML = time_obj.fromMilliseconds(times[5]-now) + ending;
  } else if ((now > times[5]) && (now < times[6])) {
    pp.innerHTML = periods[5];
    tp.innerHTML = time_obj.fromMilliseconds(times[6]-now) + ending;
  } else if ((now > times[6]) && (now < times[7])) {
    pp.innerHTML = periods[6];
    tp.innerHTML = time_obj.fromMilliseconds(times[7]-now) + ending;
  } else if ((now > times[7][7]) && (now < times[8])) {
    pp.innerHTML = periods[0];
    tp.innerHTML = time_obj.fromMilliseconds(times[8]-now) + ending;
  } else if ((now > times[8]) && (now < times[9])) {
    pp.innerHTML = periods[8];
    tp.innerHTML = time_obj.fromMilliseconds(times[9]-now) + ending;
  } else if ((now > times[9]) && (now < times[10])) {
    pp.innerHTML = periods[9];
    tp.innerHTML = time_obj.fromMilliseconds(times[10]-now) + ending;
  } else if ((now > times[10]) && (now < times[11])) {
    pp.innerHTML = periods[10];
    tp.innerHTML = time_obj.fromMilliseconds(times[11]-now) + ending;
  } else if ((now > times[11]) && (now < times[12])) {
    pp.innerHTML = periods[11];
    tp.innerHTML = time_obj.fromMilliseconds(times[12]-now) + ending;
  } else if ((now > times[12]) && (now < times[13])) {
    pp.innerHTML = periods[12];
    tp.innerHTML = time_obj.fromMilliseconds(times[13]-now) + ending;
  } else if ((now > times[13]) && (now < times[14])) {
    pp.innerHTML = periods[13];
    tp.innerHTML = time_obj.fromMilliseconds(times[14]-now) + ending;
  } else if ((now > times[14]) && (now < times[15])) {
    pp.innerHTML = periods[14];
    tp.innerHTML = time_obj.fromMilliseconds(times[15]-now) + ending;
  } else if ((now > times[15]) && (now < times[16])) {
    pp.innerHTML = periods[15];
    tp.innerHTML = time_obj.fromMilliseconds(times[16]-now) + ending;
  } else if ((now > times[16]) && (now < times[17])) {
    pp.innerHTML = periods[16];
    tp.innerHTML = time_obj.fromMilliseconds(times[17]-now) + ending;
  } else if ((now > times[17]) && (now < times[18])) {
    pp.innerHTML = periods[17];
    tp.innerHTML = time_obj.fromMilliseconds(times[18]-now) + ending;
  } else if ((now > times[18]) && (now < times[19])) {
    pp.innerHTML = periods[18];
    tp.innerHTML = time_obj.fromMilliseconds(times[19]-now) + ending;
  } else if ((times.length == 22)&&((now > times[19]) && (now < times[20]))){
    pp.innerHTML = periods[19];
    tp.innerHTML = time_obj.fromMilliseconds(times[20]-now) + ending;
  } else if((times.length == 22)&&((now > times[20]) && (now < times[21]))) {
    pp.innerHTML = periods[20];
    tp.innerHTML = time_obj.fromMilliseconds(times[21]-now) + ending;
  } else if ((now > (time_obj.ofDay(7, 42, 1) + (settings.grade*180000))) && (now < time_obj.ofDay(7, 50, 1))) {
    pp.innerHTML = "Bre.-AB";
    
  } else {
    pp.innerHTML = "Learn't";
    tp.innerHTML = time_obj.fromMilliseconds(((time_obj.ofDay(7, 42, 1)+86400000+(settings.grade*180000))-now)%86400000) + " until school starts again";
    tp.style.top = "55%";
  }
  const supDude = /<sup>/;
  if (pp.innerHTML.match(supDude)) pp.style.top = "-36%";
}
function think() {
  const yes = new Date();
  const timeOfWeek = Date.now()%604800000;
  const timeOfDay = Date.now()%86400000;
  const isWeekend = ((time_obj.ofWeek(14, 38, 59, 1) < timeOfWeek) && (timeOfWeek < time_obj.ofWeek(7, 42, 1, 4)));
  let isSummer = ((yes.getMonth() >= 4) && (yes.getMonth() <= 7));
  if ((yes.getMonth() == 7 && yes.getDate() >= 11) || (yes.getMonth() == 4 && yes.getDate() <= 23)) isSummer = false;
  if ((yes.getMonth() == 4 && ((11 >= yes.getDate()) && (yes.getDate() >= 5))) && (yes.getDay() >= 3)) isSummer = false;
  if (!isSummer) {
    if (!isWeekend) {
      tp.style.top = "48.5%";
      if (settings.schedule === 0) {
        updateTimer(times.test[settings.grade], stuff[0][settings.grade]);
      } else if (settings.schedule === 1) {
        updateTimer(times.normal[settings.grade], stuff[0][settings.grade]);
      } else {
        updateTimer(times.fieldDay[settings.grade], stuff[1][settings.grade]);
      }
    } else {
      pp.innerHTML = "Learn't";
      pp.style.top = "-35%";
      tp.innerHTML = time_obj.fromMilliseconds(time_obj.ofWeek(7, 44, 0, 4)-timeOfWeek+(settings.grade*180000)) + " until school starts again";
      tp.style.top = "55%";
    }
  } else {
    pp.innerHTML = "Summer!";
    pp.style.top = "-35%";
    tp.innerHTML = time_obj.fromMilliseconds(Number(new Date("Aug 10, 2022 07:48:00"))-Number(yes)) + " until school starts again";
    tp.style.top = "55%";
  }
  functions_general.update.darkMode();
}
setInterval(think, 1000/7);
function tdm() {
  if (!settings.shifting) settings.darkMode++;
  if (settings.shifting) settings.darkMode--;
  if (settings.darkMode < 0) settings.darkMode += 3;
  settings.darkMode %= 3;
  functions_general.update.darkMode();
}
document.addEventListener("keyup", () => {
  let evt = window.event;
  let code = evt.code;
  switch (code) {
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
    case "ShiftLeft":
      settings.shifting = false;
      break;
    case "ShiftRight":
      settings.shifting = false;
      break;
    default:
      settings.grade = "broken\naaaaaaaaaaaaaa";
  }
  functions_general.update.grade();
});
document.addEventListener("keydown", () => {
  let evt = window.event;
  let code = evt.code;
  switch(code) {
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
  if (window.innerHeight == 617) {
    document.getElementById("fullscreen-prompt-img").style.display = "block";
  } else {
    document.getElementById("fullscreen-prompt-img").style.display = "none";
  }
});
function handleImage(event) {
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}
think();
functions_general.update.darkMode();
console.log = (a) => {
  document.getElementById("debug-element").innerHTML += a + "<br />"
}
window.onload = () => {
  if (window.innerHeight == 617) {
    document.getElementById("fullscreen-prompt-img").style.display = "block";
  } else {
    document.getElementById("fullscreen-prompt-img").style.display = "none";
  }
}
/*i ⅱ ⅲ ⅳ v ⅵ ⅶ ⅷ x ⅺ ⅻ

*/