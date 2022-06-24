let month = new Date().getMonth();
let days = 0;
const leapYear = new Date().getFullYear() % 4 == 0;
switch(month)
{
    case 11:
        days += 31;
    case 10:
        days += 30;
    case 9:
        days += 31;
    case 8:
        days += 30;
    case 7:
        days += 31;
    case 6:
        days += 31;
    case 5:
        days += 30;
    case 4:
        days += 31;
    case 3:
        days += 30;
    case 2:
        days += 31;
    case 1:
        if(leapYear)
        {
        	    days += 29;
        	}
        	else
        	{
        		   days += 28;
        	}
        	break;
}
days += new Date().getDate();
let scale = days;
if(leapYear)
{
    scale /= 366;
}
else
{
	   scale /= 365;
}
scale **= -1;
scale *= 18.6164383561644;
price = scale + 30;
console.log(`The price of a ${new Date().getFullYear()} quarter is currently ${Math.round(price)} cents`);