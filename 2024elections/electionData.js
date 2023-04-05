window.electionDeeta =
{
  "display":
  {
    left: 
    [
      ["teal",       0b0000, "#00b090"],
      ["democrats",  0b0001, "#000080"],
      ["dem call",   0b0010, "#0000c0"],
      ["dem likely", 0b0011, "#4040d8"],
      ["dem lean",   0b0100, "#8080c0"],
      ["dem tilt",   0b0101, "#a0a0c0"]
    ],
    right:
    [
      ["gop tilt",   0b1000, "#c0a0a0"],
      ["gop lean",   0b1001, "#c08080"],
      ["gop likely", 0b1010, "#d84040"],
      ["gop call",   0b1011, "#c00000"],
      ["republicans",0b1100, "#800000"]
    ]
  },
  "ak":
  {//              ||
    "senate": 0b11001100,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1100
  },
  "al":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05  06  07
    "house": 0b1111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010011111,
    "governor": 0b1100
  },
  "ar":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1100
  },
  "az":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09
    "house": 0b111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010111111,
    "governor": 0b0001
  },
  "ca":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52
    "house": 0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b001101101111,
    "governor": 0b0001
  },
  "co":
  {//              ||
    "senate": 0b00010001,
    //         01  02  03  04  05  06  07  08
    "house": 0b11111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010101111,
    "governor": 0b0001
  },
  "ct":
  {//              ||
    "senate": 0b00010001,
    //         01  02  03  04  05
    "house": 0b11111111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b0001
  },
  "de":
  {//              ||
    "senate": 0b00011111,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1111
  },
  "fl":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
    "house": 0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000111101111,
    "governor": 0b1100
  },
  "ga":
  {//              ||
    "senate": 0b00010001,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14
    "house": 0b11111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000100001111,
    "governor": 0b1100
  },
  "hi":
  {//              ||
    "senate": 0b00011111,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b0001
  },
  "ia":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1100
  },
  "id":
  {//              ||
    "senate": 0b11001100,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b1100
  },
  "il":
  {//              ||
    "senate": 0b00010001,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17
    "house": 0b11111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000100111111,
    "governor": 0b0001
  },
  "in":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08  09
    "house": 0b111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010111111,
    "governor": 0b1111
  },
  "ks":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b0001
  },
  "ky":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05  06
    "house": 0b111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010001111,
    "governor": 0b0001
  },
  "la":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05  06
    "house": 0b111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010001111,
    "governor": 0b0001
  },
  "ma":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09
    "house": 0b111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010111111,
    "governor": 0b0001
  },
  "md":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08
    "house": 0b11111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010101111,
    "governor": 0b0001
  },
  "mi":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13
    "house": 0b1111111111111111111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000011111111,
    "governor": 0b0001
  },
  "mn":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08
    "house": 0b11111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010101111,
    "governor": 0b0001
  },
  "mo":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08
    "house": 0b11111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010101111,
    "governor": 0b1111
  },
  "ms":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1100
  },
  "mt":
  {//              ||
    "senate": 0b11001111,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b1111
  },
  "nc":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14
    "house": 0b11111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000100001111,
    "governor": 0b1111
  },
  "nd":
  {//              ||
    "senate": 0b11001111,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1111
  },
  "nh":
  {//              ||
    "senate": 0b00010001,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b1111
  },
  "nj":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11  12
    "house": 0b111111111111111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000011101111,
    "governor": 0b0001
  },
  "nm":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03
    "house": 0b111111111111,
    //             ElectorsCandidate
    "president": 0b000001011111,
    "governor": 0b0001
  },
  "nv":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1100
  },
  "ny":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
    "house": 0b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000111001111,
    "governor": 0b0001
  },
  "oh":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15
    "house": 0b111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000011111111,
    "governor": 0b1100
  },
  "ok":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05
    "house": 0b11111111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1100
  },
  "or":
  {//              ||
    "senate": 0b00010001,
    //         01  02  03  04  05  06
    "house": 0b111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010001111,
    "governor": 0b0001
  },
  "pa":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17
    "house": 0b11111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b000100111111,
    "governor": 0b0001
  },
  "ri":
  {//              ||
    "senate": 0b00011111,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b0001
  },
  "sc":
  {//              ||
    "senate": 0b11001100,
    //         01  02  03  04  05  06  07
    "house": 0b1111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010011111,
    "governor": 0b1100
  },
  "sd":
  {//              ||
    "senate": 0b11001100,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1100
  },
  "tn":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08  09
    "house": 0b111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010111111,
    "governor": 0b1100
  },
  "tx":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
    "house": 0b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111n,
    //             ElectorsCandidate
    "president": 0b001010001111,
    "governor": 0b1100
  },
  "ut":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04
    "house": 0b1111111111111111,
    //             ElectorsCandidate
    "president": 0b000001101111,
    "governor": 0b1111
  },
  "va":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10  11
    "house": 0b11111111111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000011011111,
    "governor": 0b1100
  },
  "vt":
  {//              ||
    "senate": 0b00011111,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1111
  },
  "wa":
  {//              ||
    "senate": 0b00011111,
    //         01  02  03  04  05  06  07  08  09  10
    "house": 0b1111111111111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000011001111,
    "governor": 0b1111
  },
  "wi":
  {//              ||
    "senate": 0b11001111,
    //         01  02  03  04  05  06  07  08
    "house": 0b11111111111111111111111111111111,
    //             ElectorsCandidate
    "president": 0b000010101111,
    "governor": 0b0001
  },
  "wv":
  {//              ||
    "senate": 0b11001111,
    //         01  02
    "house": 0b11111111,
    //             ElectorsCandidate
    "president": 0b000001001111,
    "governor": 0b1111
  },
  "wy":
  {//              ||
    "senate": 0b11001111,
    //         AL
    "house": 0b1111,
    //             ElectorsCandidate
    "president": 0b000000111111,
    "governor": 0b1100
  },
  "ne":
  {//              ||
    "senate": 0b11111111,
    //         01  02  03
    "house": 0b111111111111,
    //             ElectorsAL  01  02  03
    "president": 0b000001011111111111111111,
    "governor": 0b1100
  },
  "me":
  {//              ||
    "senate": 0b11001111,
    //         01  02
    "house": 0b11111111,
    //             ElectorsAL  01  02
    "president": 0b00000100111111111111,
    "governor": 0b0001
  }
};

window.states = [
  "ak",
  "al",
  "ar",
  "az",
  "ca",
  "co",
  "ct",
  "de",
  "fl",
  "ga",
  "hi",
  "ia",
  "id",
  "il",
  "in",
  "ks",
  "ky",
  "la",
  "ma",
  "md",
  "me",
  "mi",
  "mn",
  "mo",
  "ms",
  "mt",
  "nc",
  "nd",
  "ne",
  "nh",
  "nj",
  "nm",
  "nv",
  "ny",
  "oh",
  "ok",
  "or",
  "pa",
  "ri",
  "sc",
  "sd",
  "tn",
  "tx",
  "ut",
  "va",
  "vt",
  "wa",
  "wi",
  "wv",
  "wy"
];

function noNegativeModulo(a, b)
{
  a = +a;
  b = +b;
  if(a >= 0)
  {
    return a % b;
  }
  else
  {
    return (a % b) + b;
  }
}


function getValue(binNum, elemSize, index, sizeInBits)
{
  if(!((typeof binNum == "number" || typeof elemSize == "number" || typeof index == "number" || typeof sizeInBits == "number") || (typeof binNum == "bigint" || typeof elemSize == "bigint" || typeof index == "bigint" || typeof sizeInBits == "bigint")))
  {
    throw TypeError("Did you make sure all parameters were numbers?");
  }
  return (BigInt(binNum) >> BigInt(BigInt(sizeInBits)-BigInt(elemSize * index))) % BigInt(2 ** elemSize);
}

function getColor(num)
{
  if(BigInt(num) & 0b1000n)
  {
    for(let i of electionDeeta.display.right)
    {
      if(num == i[1])
      {
        return i[2];
      }
    }
  }
  else
  {
    for(let i of electionDeeta.display.left)
    {
      if(num == i[1])
      {
        return i[2];
      }
    }
  }
  return "#bfbfbf";
}

function candidate(num)
{
  if(num & 0b1000n)
  {
    for(let i of electionDeeta.display.right)
    {
      if(num == i[1])
      {
        return i[0];
      }
    }
  }
  else
  {
    for(let i of electionDeeta.display.left)
    {
      if(num == i[1])
      {
        return i[0];
      }
    }
  }
  return null;
}

function getPresResults()
{
  let results = {"__office__": "p"};
  for (const i of states)
  {
    if(electionDeeta[i] && candidate(getValue(electionDeeta[i].president, 4, 3, 12)) && !(i == "ne" || i == "me"))
    {
      if(results[candidate(getValue(electionDeeta[i].president, 4, 3, 12))] == null)
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 12))] = getValue(electionDeeta[i].president, 8, 1, 12);
      }
      else
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 12))] += getValue(electionDeeta[i].president, 8, 1, 12);
      }
    }
    else if(i == "ne" && candidate(getValue(electionDeeta[i].president, 4, 3, 24)))
    {
      if(results[candidate(getValue(electionDeeta[i].president, 4, 3, 24))] == null)
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 24))] = 2;
      }
      else
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 24))] += 2;
      }
      for(let j = 0; j < 3; j++)
      {
        if(results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 24))] == null)
        {
          results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 24))] = 1;
        }
        else
        {
          results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 24))]++;
        }
      }
    }
    else if(i == "me" && candidate(getValue(electionDeeta[i].president, 4, 3, 20)))
    {
      if(results[candidate(getValue(electionDeeta[i].president, 4, 3, 20))] == null)
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 20))] = 2;
      }
      else
      {
        results[candidate(getValue(electionDeeta[i].president, 4, 3, 20))] += 2;
      }
      for(let j = 0; j < 2; j++)
      {
        if(results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 20))] == null)
        {
          results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 20))] = 1;
        }
        else
        {
          results[candidate(getValue(electionDeeta[i].president, 4, j + 4, 20))]++;
        }
      }
    }
  }
  results[null] += 3; // For DC
  return results;
}

function getSenateResults()
{
  let results = {"__office__": "s"};
  for (const i of states)
  {
    if(electionDeeta[i] && candidate(getValue(electionDeeta[i].senate, 4, 1, 8)))
    {
      for(let j = 0; j < 2; j++)
      {
        if(results[candidate(getValue(electionDeeta[i].senate, 4, 1, 8))] == undefined)
        {
          results[candidate(getValue(electionDeeta[i].senate, 4, j + 1, 8))] = 1;
        }
        else
        {
          results[candidate(getValue(electionDeeta[i].senate, 4, j + 1, 8))]++;
        }
      }
    }
  }
  return results;
}

function getGovResults()
{
  let results = {"__office__": "g"};
  for (const i of states)
  {
    if(electionDeeta[i] && candidate(BigInt(electionDeeta[i].governor)))
    {
        if(results[candidate(BigInt(electionDeeta[i].governor))] == undefined)
        {
          results[candidate(BigInt(electionDeeta[i].governor))] = 1;
        }
        else
        {
          results[candidate(BigInt(electionDeeta[i].governor))]++;
        }
    }
  }
  return results;
}

function getHouseResults()
{
  let results = {"__office__": "h"};
  for (const i of states)
  {
    if(electionDeeta[i])
    {
      for(let j = 0; j < getValue(electionDeeta[i].president, 8, 1, i == "ne" ? 24 : i == "me" ? 20 : 12) - 2n; j++)
      {
        if(candidate(getValue(electionDeeta[i].house, 4, j + 1, (getValue(electionDeeta[i].president, 8, 1, i == "ne" ? 24 : i == "me" ? 20 : 12) * 4n) - 8n)))
        {
          if(results[candidate(getValue(electionDeeta[i].house, 4, j + 1, (getValue(electionDeeta[i].president, 8, 1, i == "ne" ? 24 : i == "me" ? 20 : 12) * 4n) - 8n))] == undefined)
          {
            results[candidate(getValue(electionDeeta[i].house, 4, j + 1, (getValue(electionDeeta[i].president, 8, 1, i == "ne" ? 24 : i == "me" ? 20 : 12) * 4n) - 8n))] = 1;
          }
          else
          {
            results[candidate(getValue(electionDeeta[i].house, 4, j + 1, (getValue(electionDeeta[i].president, 8, 1, i == "ne" ? 24 : i == "me" ? 20 : 12) * 4n) - 8n))]++;
          }
        }
      }
    }
  }
  return results;
}