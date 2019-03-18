// Is 7 a factor of 864,197,523? (i.e. does it divide by 7 with no remainder)
let a = 864197523
let sum = a % 7;
let answer = "";

  if (sum === 0) {
    answer = "7 a factor of 864,197,523";
  } else 
  {
    answer = "7 not a factor of 864,197,523";
  }

console.log(answer);