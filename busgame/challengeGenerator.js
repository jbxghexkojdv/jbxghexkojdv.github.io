// challenges on line 9

function generateChallenge()
{
  let r = Math.random();
  
  const challenges = [
    
    {
      name: `Count to ${Math.floor(r*1000) + 500} in English`,
      weight: 2,
      award: (24000 * r) + 6000,
      desc: "You must count to the number entirely in English. You cannot skip any numbers. You must say every number out loud. The numbers must be in the grammatically correct form, e.g. \"one thousand five hundred thirty seven.\""
    },
    {
      name: `Count to ${Math.floor(r*1000) + 500} in Spanish`,
      weight: 2,
      award: (30000 * r) + 12000,
      desc: "You must count to the number entirely in Spanish. You cannot skip any numbers. You must say every number out loud. The numbers must be in the grammatically correct form, e.g. \"mil quinientos treinta y siete\". You can use Google to find out numbers."
    },
    {
      name: `Go to the nearest grocery store`,
      weight: 4,
      award: 25000,
      desc: "You must go to a grocery store and take a picture of yourself within 40 meters (131 feet) of it."
    },
    {
      name: `Get points immediately, but...`,
      weight: 1,
      award: 17500,
      desc: "The next place you disembark in must be to the east of Clay St."
    },
    {
      name: `Get points immediately, but...`,
      weight: 1,
      award: 17500,
      desc: "The next place you disembark in must be to the west of Clay St."
    }
  ];
  
  const weights = challenges.map(c => c.weight);
  let sum;
  weights.forEach(function(val){sum += val});
  let placeholder;
  const thresholds = weights.map(function(w){placeholder += w / sum; return placeholder;});
  r = Math.random();
  for(let i in thresholds)
  {
    if(thresholds[i] > r)
    {
      return challenges[i];
    }
  }
}
