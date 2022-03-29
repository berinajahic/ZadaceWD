let testArray = [3,6,5,4,2,4,1,2,9,6];

//1. Write a JavaScript function to clone an array.
const copyOfTestArray = JSON.parse(JSON.stringify(testArray));
console.log(copyOfTestArray);
//2. Write a JavaScript function to remove duplicate items from an array (5 and '5' are considered duplicates).
const testArrayWithotDuplicateItems = [... new Set(testArray)];
console.log(testArrayWithotDuplicateItems);
//3. Write a JavaScript function to merge two arrays and removes all duplicates elements.
testArray = [1,2,3,4,5];
let testArray2 = [4,5,6,7,8];
const mergedArray = testArray.concat(testArray2);
const mergedWithoutDuplicates = [... new Set(mergedArray)];
console.log(mergedArray);
//4. Write a JavaScript function to remove all odd numbers from array.
testArray = testArray.filter ( item =>{
   if(item % 2 == 0 ){
       return true;
   }
   return false;
});
console.log(testArray);
//5. Write a JavaScript function to get a sum of a given array.
let sum = 0;
testArray.forEach(element => {
    sum +=element;
});
console.log('Sum of elements: ', sum );
//6. Create a JavaScript objects array of Balkan countries with basic properties.
let  countries = [
        {
            name: 'Croatia',
            capital: 'Zagreb',
            population: 4047000,
            currency: 'HRK'
        },
        {
            name: 'Bosnia and Herzegovina',
            capital: 'Sarajevo',
            population: 3281000,
            currency: 'BAM'
        },
        {
            name: 'Montenegro',
            capital: 'Podgorica',
            population: 621718,
            currency: 'EUR'
        }];
//7. Create a JavaScript function that returns country with the most population (from task 6).
const maxPopulation = countries.reduce( (previousValue, currentValue) => {
    return previousValue.population > currentValue.population ? previousValue : currentValue
});
console.log(maxPopulation);
//8. Create a JavaScript function that returns counties that have population more than 5000000.
const setPopulation = countries.filter(item => {
    if(item.population>5000000){
        return true;
    }
    return false;
});
console.log(setPopulation);
//9. Create a JavaScript function that returns all city names. (from task 6).
countries.forEach(item => {
    console.log(item.capital);
});
//10. Create a JavaScript function that returns all city names which begin with letter 'Z'. (from task 6).
const capitalsStatringWithZ = countries.filter(item => {
    if(item.capital.startsWith('Z')){
        return true;
    }
    return false;
});
console.log('Capitals starting with Z: ')
capitalsStatringWithZ.forEach(item => {
    console.log(item.capital);
});