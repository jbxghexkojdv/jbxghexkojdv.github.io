let encodingMode = true;
let edits = 0;

function toggleMode()
{
    encodingMode = !encodingMode;

    if (encodingMode)
    {
        document.querySelector("button").innerHTML = "Encoding";
    }
    else
    {
        document.querySelector("button").innerHTML = "Decoding";
    }

    updateOutput();
}

document.querySelector("textarea").oninput = updateOutput;
document.querySelector("input").oninput = updateOutput;

function updateOutput()
{
    if (encodingMode)
    {
        document.querySelector("p").innerHTML = encode(document.querySelector("textarea").value, document.querySelector("input").value);
    }
    else
    {
        document.querySelector("p").innerHTML = decode(document.querySelector("textarea").value, document.querySelector("input").value);
    }
}

function shift(text, number)
{
    let retval = "";

    for (let i in text)
    {
        retval += String.fromCodePoint(text.codePointAt(i) + parseInt(number));
    }

    return retval;
}

function encode(text, number)
{
    const words = text.split(" ");
    let retval = "";
    retval += words.length + "\u000a";
    let longest = 0;
    for (let i of words)
    {
        if (i.length > longest)
        {
            longest = i.length;
        }
    }
    for (let i = 0; i < longest; i++)
    {
        for (let j in words)
        {
            if (i < words[j].length)
            {
                retval += shift(words[j][i], number);
            }
            else
            {
                retval += shift(" ", number);
            }
        }
    }

    return retval;
}

function decode(text, number)
{
    const wordCount = parseInt(text.split('\u000a')[0]);
    const rawText = shift(text.split('\u000a')[1], -number);

    let words = [];

    for (let i = 0; i < wordCount; i++)
    {
        words.push("");
    }

    for (let i in rawText)
    {
        if (rawText[i] != " ")
        {
            words[i % wordCount] += rawText[i];
        }
    }
    
    let retval = "";

    for (let i of words)
    {
        retval += i + " ";
    }
    
    return retval.slice(0, -1);
}