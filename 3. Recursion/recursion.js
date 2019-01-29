//1. Write a function that loops through the numbers n down to 0.
function loop(n){
  if(n<0)return;
  console.log(n);
  n = n-1;
  loop(n);
}



//2. Write a function countTo that takes one argument limit and prints number from 0 to limit
let i = 0;
function countTo(n){
  if(i>n)return;
  console.log(i);
  i = i+1;
  countTo(n);
}



//3. Write a function 'exponent' that takes two arguments base, and expo,
//uses a while loop to return the exponenet value of the base.

let value = 1;
function exponent(base, expo){
  if(expo<=1)return value;
  value = value * base;
  exponent(base, expo-1);
}



//4. Write a function factorial that take 1 argument 'number' and gives the factorial of the number.
let result = 1;
function factorial(number){
  if(number==0) return console.log(result);
  result = result * number;
  number = number-1;
  factorial(number);
}



//5. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function RecursiveExponent(base, expo, value = 1){
  if(expo >= 1){
    value *= base;
    return RecursiveExponent(base, expo-1, value)
  } else return value;
}



//6. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num'
// and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num, index = 0, newArr = []){
  if(index < arr.length){
    newArr.push(arr[index]*num);
    index+=1;
    return recursiveMultiplier(arr, num, index, newArr)
  }else return newArr;
}




// 7. Write a function 'recursiveReverse' that takes an array and uses recursion
// to return its contents in reverse
function recursiveReverse(arr, newArr = []) {
  if(arr.length > 0){
    newArr.push(...arr.splice(-1));
    return recursiveReverse(arr, newArr);
  } else return newArr;
}
