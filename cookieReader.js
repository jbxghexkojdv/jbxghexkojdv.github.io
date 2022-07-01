export default cookieReader = () => 
{
  let onKey = true;
  let kvalue = "";
  let vvalue = "";
  let retval = {};
  let pass = false;
  for(let i in document.cookie)
  {
    if(i == '=' && onKey == true && !pass)
    {
      onKey = false;
    }
    else if(i == ';' && !pass)
    {
      onKey = true;
    }
  }
};
