//function doubles each char from the string given
const doubleChar =(str)=> {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    newStr +=  str[i] + str[i];
  }
  return newStr;
};
console.log(doubleChar("tati"));