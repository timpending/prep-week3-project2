/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(x, y){
  if (x > y) {
    return y
  } else if (x<y) {
    return x
  } else {
    return 'tied'
  }
}




// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function min3(x, y, z){
  let arr = [x, y, z]
  arr.sort()
  return arr[0]
}


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(arr){
  let count = 0
  arr.forEach(function(el){
    count+=el
  })
  return count
}


// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(arr){
  let count = 1
  arr.forEach(function(el){
    count*=el
  })
  return count
}


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filtering(value){
  return value.length>6
}
// however renders new array
let filteredWords = words.filter(filtering)

function filterPlusSix(words){
  let temp = []
  for (let i=0; i<words.length; i++){
    if (words[i].length>6){
      temp.push(words[i])
    }
  }
  words = temp
  return words
}

// console.log(filterPlusSix(words))



// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function c2F(temp){
  return (temp*1.8 + 32)
}

function f2C (temp){
  return ((temp-32) / 1.8)
}

// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.



function calcTemp(){
  let initialTemp = prompt('Enter your original temperature, numbers only.')
  let method = prompt("Please pick a method: 'F to C' or 'C to F'.")
  let translated = '';

  if (method == 'C to F'){
    translated = c2F(initialTemp)
  } else if (method == 'F to C'){
    translated = f2C(initialTemp)
  } else {
    alert('You did not enter a valid selection.  Please try again.')
    calcTemp()
  }
  document.getElementById('q7').innerHTML = translated
}
// calcTemp()


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(str){
  let count = 0
  str.split('').forEach(function(letter){
    if (letter === "B"){
      count++
    }
  })
  return count
}

// console.log(countBs('BBbBB'))



// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countBs(str, char){
  let count = 0
  str.split('').forEach(function(letter){
    if (letter === char){
      count++
    }
  })
  return count
}

// console.log(countBs('BBbBB', 'B'))




// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero(str){
  let temp = str.split('')
  for(let i=0; i<temp.length; i++){
    if (temp[i] === 'o'){
      temp.splice(i, 1, '0')
    }
  }
  str = temp.join('')
  return str
}

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
function song(bottleNum){
  for (let i=bottleNum; i>=0; i--){
    if (i!== 0) {
          console.log(`${i} bottles of beer on the wall, ${i} bottles of beer! Take one down, pass it around, ${i-1} bottles of beer on the wall!`)
    } else {
      console.log(`We drank all the beer.  We drunk.`)
    }
  }
}

// song(10)



// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
let ans = Math.ceil(Math.random()*10)
// console.log(ans)

function guessingGame(){
  let temp = prompt('Guess a number between 1 and 10');
  if (temp == ans){
    alert('you win!')
  } else if (temp > ans ){
    alert('too high!')
    guessingGame()
  } else {
    alert('too low!')
    guessingGame()
  }
}
// guessingGame()
