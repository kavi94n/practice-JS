const originalString = 'hello';

const reversedString = reverseString(originalString)
console.log(reversedString)
function reverseString (str){
  let reversedString = '';
  
  for (let i=str.length-1; i>=0; i--){
    reversedString += str[i];

  }
  return reversedString
}

