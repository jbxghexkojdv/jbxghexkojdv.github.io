// Variables
let beginTime;
let merge = [];
let mergeInfo = {
  level: 0,
  levelIndex: -2,
  arrayIndex: 0,
  extraSpace: [[], []],
};
let mergeSorted = false;
let testIndices = [
        [
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 0)),
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 1))
        ], 
        [
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 1)),
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 2))
        ]
      ];
let bubble = [];
let bubbleSorted = false;
let bogo = [];
let bogoSorted = false;
let fast = prompt("Go fast? [y/n]");
while(fast != "Y" && fast != "y" && fast != "N" && fast != "n")
{
  fast = prompt("Go fast? [y/n]").toLowerCase();
}
let long = prompt("Big or small list of numbers? [b/s]");
while(long != "B" && long != "b" && long != "S" && long != "s")
{
  long = prompt("Big or small list of numbers? [b/s]").toLowerCase();
}

// Constants
const arrayLength = long == "b" ? 256 : 8;
const bubbleInfo = [0, arrayLength-1];

// Functions
function main(args/*just in case I need them*/)
{
  for(let i = 0; i < arrayLength; i++)
  {
    let j = Math.random();
    merge.push(j);
    bubble.push(j);
    bogo.push(j);
    let newMerge = document.createElement("div");
    let newBubble = document.createElement("div");
    let newBogo = document.createElement("div");
    newMerge.style.height = (j*100) + "%";
    newMerge.style.width = (100/arrayLength) + "%";
    newMerge.style.bottom = 0;
    newMerge.style.backgroundColor = "#FF0000";
    newMerge.style.position = "absolute";
    newMerge.style.left = (i*100/arrayLength) + "%";
    newMerge.style.zIndex = 0;
    newBubble.style.height = (j*100) + "%";
    newBubble.style.width = (100/arrayLength) + "%";
    newBubble.style.bottom = 0;
    newBubble.style.backgroundColor = "#00FF00";
    newBubble.style.position = "absolute";
    newBubble.style.left = (i*100/arrayLength) + "%";
    newBubble.style.zIndex = 0;
    newBogo.style.height = (j*100) + "%";
    newBogo.style.width = (100/arrayLength) + "%";
    newBogo.style.bottom = 0;
    newBogo.style.backgroundColor = "#0000FF";
    newBogo.style.position = "absolute";
    newBogo.style.left = (i*100/arrayLength) + "%";
    newBogo.style.zIndex = 0;
    mergeDisplay.appendChild(newMerge);
    bubbleDisplay.appendChild(newBubble);
    bogoDisplay.appendChild(newBogo);
  }
}

function oneStep()
{
  if(!isSorted(merge) || 2**(mergeInfo.level + 1) >= arrayLength)
  {
    // alert(`levelIndex = ${mergeInfo.levelIndex}\n other thing = ${arrayLength/(2**(mergeInfo.level+1))}`);
    if(mergeInfo.arrayIndex + 1 > arrayLength)
    {
      mergeInfo.level++;
      mergeInfo.levelIndex = -2;
      mergeInfo.arrayIndex = 0;
    }
    
    if(mergeInfo.extraSpace[0].length === 0 && mergeInfo.extraSpace[1].length === 0)
    {
      mergeInfo.levelIndex += 2;
      testIndices = [
        [
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 0)),
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 1))
        ], 
        [
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 1)),
          ((2**(mergeInfo.level)) * (mergeInfo.levelIndex + 2))
        ]
      ];
      // alert(`[${testIndices[0][0]}, ${testIndices[0][1]}, ${testIndices[1][1]}]`)
      if(mergeInfo.level > 1)
      {
        // alert("levels left: " + (Math.log2(arrayLength)-mergeInfo.level) + "\nAmount left in array: " + (arrayLength - mergeInfo.arrayIndex) + "/" + arrayLength + "\n0 range: " + testIndices[0][0] + "-" + testIndices[0][1] + "\n1 range: " + testIndices[1][0] + "-" + testIndices[1][1]);
      }
      mergeInfo.extraSpace[0] = merge.slice(testIndices[0][0], testIndices[0][1]);
      mergeInfo.extraSpace[1] = merge.slice(testIndices[1][0], testIndices[1][1]);
    }
    
    if((mergeInfo.extraSpace[0][0] ?? Infinity) < (mergeInfo.extraSpace[1][0] ?? Infinity))
    {
      merge[mergeInfo.arrayIndex] = mergeInfo.extraSpace[0][0];
      // alert("got here");
      mergeInfo.extraSpace[0].splice(0, 1);
    }
    else
    {
      // alert(merge[mergeInfo.arrayIndex] + " -> " + mergeInfo.extraSpace[1][0]);
      merge[mergeInfo.arrayIndex] = mergeInfo.extraSpace[1][0];
      mergeInfo.extraSpace[1].splice(0, 1);
    }
      // alert("got here");
    if(testIndices[0][0] <= mergeInfo.arrayIndex && mergeInfo.arrayIndex <= testIndices[1][1] - 1)
    {
      mergeInfo.arrayIndex++;
    }
  }
  if(!isSorted(bubble))
  {
    let temp = bubble[bubbleInfo[0]];
    if(bubble[bubbleInfo[0]] > bubble[bubbleInfo[0] + 1])
    {
      bubble[bubbleInfo[0]] = bubble[bubbleInfo[0] + 1];
      bubble[bubbleInfo[0] + 1] = temp;
    }
    bubbleInfo[0]++;
    bubbleInfo[0] %= bubbleInfo[1];
    if(!bubbleInfo[0])
    {
      bubbleInfo[1]--;
    }
  }
  if(!isSorted(bogo))
  {
    bogo = shuffle(bogo);
  }
  updateBars();
  
  if(isSorted(merge) && !mergeSorted)
  {
    mergeSorted = true;
    mergeDisplay.children[0].innerHTML += "<br />Time: " + Math.round((Date.now()-beginTime)/1000) + " seconds";
  }
  if(isSorted(bubble) && !bubbleSorted)
  {
    bubbleSorted = true;
    bubbleDisplay.children[0].innerHTML += "<br />Time: " + Math.round((Date.now()-beginTime)/1000) + " seconds";
  }
  if(isSorted(bogo) && !bogoSorted)
  {
    bogoSorted = true;
    bogoDisplay.children[0].innerHTML += "<br />Time: " + Math.round((Date.now()-beginTime)/1000) + " seconds";
  }
  timeDisplay.innerHTML = `Time: ${Math.floor((Math.round((Date.now()-beginTime)/1000))/60)}:${(((Math.round((Date.now()-beginTime)/1000))) % 60) < 10 ? "0" : ""}${((Math.round((Date.now()-beginTime)/1000))) % 60}`;
}

sortButton.onclick = function(e)
{
  const leNumber = fast == "y" ? 1000 : 1
  const speed = fast == "y" ? 10 : 333
  for(let i = 0; i < leNumber; i++)
  {
    setInterval(oneStep, speed);
  }
  beginTime = Date.now();
};

function shuffle(array)
{
  let indices = [];
  for(let i = 0; i < array.length; i++)
  {
    indices.push(i);
  }
  let shuffledIndices = [];
  for(let i = array.length; i > 0; i--)
  {
    let random = Math.floor(Math.random()*i);
    shuffledIndices.push(indices[random]);
    indices.splice(random, 1);
  }
  let returnValue = [];
  for(let i = 0; i < array.length; i++)
  {
    returnValue.push(array[shuffledIndices[i]]);
  }
  return returnValue;
}

function isSorted(array)
{
  for(let i = 1; i < array.length; i++)
  {
    if(array[i] < array[i-1])
    {
      return false;
    }
  }
  return true;
}

function updateBars()
{
  for(let i = 0; i < arrayLength; i++)
  {
    mergeDisplay.children[i+1].style.height = (merge[i]*100) + "%";
    bubbleDisplay.children[i+1].style.height = (bubble[i]*100) + "%";
    bogoDisplay.children[i+1].style.height = (bogo[i]*100) + "%";
  }
}

// Main Execution
main([]);
