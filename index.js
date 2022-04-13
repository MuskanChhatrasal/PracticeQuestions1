// Q1. Given an array of numbers, return a new array that only has the numbers that are 8 or smaller.

// ANS 1
// const arrOfNumbers = [3, 6, 10, 8, 2, 5, 13, 15]

// const eightOrSmaller = (arr) => arr.filter((num)=> num<=8);

// console.log(eightOrSmaller(arrOfNumbers));

// Q2.  Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

// ANS 2
// const arrOfWords = ["neoG", "is", "family", "love", "hackathon", "camping"]

// const filterStr = (arr) => arr.filter((str)=>str.length>=5);
// console.log(filterStr(arrOfWords));

// Q3. Given an array of objects. Return an array with all the male characters.

// ANS 3.
// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: 172,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: 202,
//         eye_color: 'orange',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: 150,
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: 188,
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// const allMale = (arr) => arr.filter((obj)=>obj.gender==='male')
// console.log(allMale(characters))

// Q4. Take the same array as above. Return an array with all characters whose height is greater than 170.

// ANS 4
// const filterHeight = (arr) => arr.filter((obj)=>obj.height > 170)
// console.log(filterHeight(characters))

