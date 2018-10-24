//1. Write a function that loops through the numbers n down to 0.




//2. Write a function countTo that takes two argument limit and prints number from 0 to limit
function countTo(start, end){
	if(start > end) {
		return;
	}

	console.log(start);
	countTo(++start, end);
}

countTo(0, 5);


//3. Write a function 'exponent' that takes two arguments base, and expo,
//uses a while loop to return the exponenet value of the base.




//4. Write a function factorial that take 1 argument 'number' and gives the factorial of the number.
function factorial(num) {
  if(num === 0) return 1;
  return num * factorial(--num);
}

console.log(factorial(10))



//5. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.



//6. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num'
// and multiplies each arr value into by num and returns an array of the values.



// 7. Write a function 'recursiveReverse' that takes an array and uses recursion
// to return its contents in reverse
function reverseMe(string) {
  if(string === '') return '';
  return reverseMe(string.slice(1))+string[0];
}

console.log(reverseMe("Praveen"));
