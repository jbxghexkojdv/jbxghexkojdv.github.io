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