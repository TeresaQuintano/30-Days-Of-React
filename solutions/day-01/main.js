// Exercise level 2

// 1 - Create a separate countries.js file and store the countries array into this file,
// create a separate file web_techs.js and store the webTechs array into this file.
// Access both file in main.js file

// import countries from './countries'

import {countries} from "./countries.js";
import {webTechs} from './web_techs.js'



// 2 - First remove all the punctuations and change the string to array and
// count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

// 3 - In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// 3.1 - add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

// 3.2 - add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}
console.log(shoppingCart)

// 3.3 - remove 'Honey' if you are allergic to honey
const indexHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(indexHoney, 1)
console.log(shoppingCart)


// 3.4 - modify Tea to 'Green Tea'
const indexTea = shoppingCart.indexOf('Tea')
shoppingCart.splice(indexTea, 1, 'Green Tea')
console.log(shoppingCart)

// 4 - In countries array check if 'Ethiopia' exists in the array if it
// exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if(countries.includes('Ethiopia')) {
  console.log('Ethiopia', countries.indexOf('Ethiopia'))
  let item = countries.indexOf('Ethiopia')
  countries[item] = countries[item].toUpperCase()

}
else {
  countries.push('Ethiopia')
}
console.log(countries)

// 5 - In the webTechs array check if Sass exists in the array and if it exists print
// 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

if(webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
}
else {
  webTechs.push('Sass')
  console.log(webTechs)
}

// 6 - Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [frontEnd + backEnd]
console.log(fullStack)


//Exercise: Level 3

// 1 - The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort()
const min = ages[0]
const max = ages[ages.length - 1]
console.log(ages)
console.log(min)
console.log(max)


// Find the median age(one middle item or two middle items divided by two)
const median = ages[Math.floor((ages.length - 1) / 2)]
console.log('median', median)

let total = 0
for(let i=0; i< ages.length; i++) {
  total += ages[i]
}
console.log('total', total)

const average = (total / ages.length)
console.log('average', average)

// Find the range of the ages(max minus min)
const ranges = []
ages.filter(item => {
 if(!ranges.includes(item)) {
   ranges.push(item)
 }
})
console.log('ranges', ranges)

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 1))

// 2 - Find the middle country(ies) in the countries array
const middleCountry = Math.floor(countries.length - 1) / 2
console.log(countries[middleCountry])

// 3 - Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.

const isEven = (countries.length)%2 === 0
console.log(isEven)

const middleItem = Math.floor(countries.length - 1) / 2
const lastItem = countries.length
if(isEven) {
  const countries1 = countries.slice(0 ,middleItem)
  const countries2 = countries.slice(middleItem, lastItem)
  console.log(countries1)
  console.log(countries2)
}
else {
  const countries1 = countries.slice(0 ,middleItem + 1)
  const countries2 = countries.slice(middleItem+1, lastItem)
  console.log(countries1)
  console.log(countries2)
}



