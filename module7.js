function hasUniqueChars(word) {
  let charObj = {};

  for (let i = 0; i < word.length; i++){
    if(charObj[word.charAt(i)]) {
      return false
     }

     else {
       charObj[word.charAt(i)] = true
       
     }
  }

  return true
}

console.log(hasUniqueChars("Tuesday"))
console.log(hasUniqueChars("caats"))

/* 
I believe the run time to be O(n) linear it is dependent on the size of the word, but instead of looping twice, I am just looping once and then referencing the object from there. 
*/


