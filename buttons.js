let buttonNum = 0;
function button(num)
{
    if(buttonNum == num-1)
    {
        buttonNum++;
    }
    else
    {
        buttonNum = 0;
    }
}

function button1()
{
    button(1);
}

function button2()
{
    button(2);
}

function button3()
{
    button(3);
}

function button4()
{
    button(4);
}

function button5()
{
    button(5);
}

function button6()
{
    button(6);
}

function button7()
{
    button(7);
}

function button8()
{
    button(8);
}

function button9()
{
    button(9);
    if(buttonNum) document.getElementById("secret").style.display = "block";
}
