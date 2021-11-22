// 1 - Declare an empty array;
const myArray = []

// 2 - Declare an array with more than 5 number of elements
const arrayNumbers = [1, 2, 3, 4, 5, 8]

// 3 - Find the length of your array
console.log(arrayNumbers.length)

// 4 - Get the first item, the middle item and the last item of the array
const arrayStrings = ['a', 'b', 'c', 'd', 'e', 'f']

const lastItem = (arrayNumbers.length) - 1
const lastItemString = (arrayStrings.length) - 1
const middleItemNumbers = arrayNumbers[Math.floor((arrayNumbers.length - 1) / 2)];
const middleItemStrings = arrayStrings[Math.floor((arrayStrings.length - 1) / 2)];

console.log('length ', arrayNumbers.length)
console.log('firstItem ', arrayNumbers[0])
console.log('lastItem ', arrayNumbers[lastItem])
console.log('lastItem strings', arrayStrings[lastItemString])
console.log('middleItem numbers ', middleItemNumbers)
console.log('middleItem strings ', middleItemStrings)

// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  'a',
  1,
  {name: 'pepito'},
  {address: ['pepito', 'juanito']},
  [100, 200],
  true
]
console.log(mixedDataTypes.length)

// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies= [
  'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]
// 7 - Print the array using console.log()
console.log(itCompanies)

// 8 - Print the number of companies in the array
console.log(itCompanies.length)

// 9 - Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor((itCompanies.length -1)/ 2)])
console.log(itCompanies[(itCompanies.length -1)])

// 10 - Print out each company
for(let company of itCompanies) {
  console.log(company)
}

// 11 - Change each company name to uppercase one by one and print them out
for(let company of itCompanies) {
 company = company.toUpperCase()
  console.log(company)
}

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString())

// 13 -  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company=('Facebook')
if(itCompanies.includes(company)) {
  console.log (company)
}
else {
  console.log(company, ' is not found')
}

// 14 - Filter out companies which have more than one 'o' without the filter method
const itCompaniesFiltered = []
for (let company of itCompanies) {
  if(company.includes('oo')) {
    itCompaniesFiltered.push(company)
  }
}
console.log(itCompaniesFiltered)

// 15 - Sort the array using sort() method
console.log(itCompanies.sort())

// 16 - Reverse the array using reverse() method
console.log(itCompanies.reverse())

// 17 - Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18 - Slice out the last 3 companies from the array
const lastItCompaniesIndex = itCompanies.length
console.log(itCompanies.slice(lastItCompaniesIndex - 3, lastItCompaniesIndex))

// 19 - Slice out the middle IT company or companies from the array
const middleCompany = Math.floor((itCompanies.length-1) / 2)
console.log('middleCompany', middleCompany)
console.log(itCompanies.slice(middleCompany, middleCompany+1))

// 20 - Remove the first IT company from the array
const itCompanies2= [
  'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]
itCompanies2.shift()
console.log(itCompanies)

// 21 - Remove the middle IT company or companies from the array
const itCompanies3= [
  'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]

const middleCompanyIndex = Math.floor((itCompanies3.length-1) / 2)
console.log('middleCompanyIndex', middleCompanyIndex)

console.log(itCompanies3.splice(middleCompanyIndex - 1, 1, itCompanies3[middleCompanyIndex] ))
console.log(itCompanies3)

// 22 - Remove the last IT company from the array
const itCompanies4= [
  'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]
itCompanies4.pop()
console.log(itCompanies4)

// 23 - Remove all IT companies
itCompanies4.splice(0,itCompanies4.length)
console.log(itCompanies4)
