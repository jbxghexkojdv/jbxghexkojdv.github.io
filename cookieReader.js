export default cookieReader = () => 
{
  let onKey = true;
  let kvalue = "";
  let vvalue = "";
  let retval = {};
  let onStr = false;
  for(let i in document.cookie)
  {
    if(i == '=' && onKey == true && !onStr)
    {
      onKey = false;
    }
    else if(i == ';' && !onStr)
    {
      onKey = true;
      try
      {
        retval[kvalue] = JSON.parse(vvalue);
      }
      catch
      {
        retval[kvalue] = null;
      }
      finally
      {
        kvalue = "";
        vvalue = "";
      }
    }
    else if(i == "\"")
    {
      onStr = !onStr;
    }
    else
    {
      if(onKey)
      {
        kvalue += i;
      }
      else
      {
        vvalue += i;
      }
    }
  }
};
