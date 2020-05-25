
/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,33,33,33,45,67,56,3465346,45];

//#1 Create new array
let newArray = [];
let temp = [];

let filterFunction = (arr) =>{
	//#2 Sort the Array
	let sortArray = arr.sort((a,b) => a - b);
	//#3 Iterate through the Array and find equal numbers
	for(let i = 0; i<sortArray.length; i++ ){
		
		if(sortArray[i] === sortArray[i+1] && sortArray[i] === sortArray[i-1]){
			temp.push(sortArray[i])
			// For the very first number in the array
		}else if(sortArray[i] === sortArray[i+1]){
			temp.push(sortArray[i])
			// If the equal number is the last then push temp to the array and clear it
		}else if(sortArray[i] === sortArray[i-1]){
			temp.push(sortArray[i]);
			newArray.push(temp);
			temp = [];
			// If a number doesn't have an equal one then just push it into the array
		}else{
			newArray.push(sortArray[i]);
		}			
	
	}
	//#4 return the new array with all that sorting
	return newArray;
}

filterFunction(array)











// Bonus

const array2 = ["2","3","1",2,3,4,1,54,34];

//#1 Create 3 arrays
let numberArray = [];
let stringArray = [];
let generalArray = [];

let stringFunction = (arr) =>{
	//#2 Sort
	let stringSort = arr.sort((a,b)=>a-b);
	//#3 Filter(iterate through the Array) and place numbers and strings to different arrays
	let filter = stringSort.filter(n =>{
		if (typeof n === 'number') {
			numberArray.push(n);
		}else {
			stringArray.push(n);
		}
	})
	//#4 Place the arrays to the generalArray 
	return generalArray.push(numberArray, stringArray);
}



stringFunction(array2);




/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3] */

const array = [1,2,3,5,6,7,8,9];

let func = (arr, num)=>{
	//#1 Create an array result with a sum of two numbers
	let result = [];
	//#2 Iterate through an array to find the sum
	for(let i = 0; i<arr.length; i++){
		//#3 Loop inside a loop because result array must have two numbers
		for(let j = 0; j<arr.length; j++){
			//#4 When found the sum push it into the result array and quit the loop
			if (arr[j] + arr[i] === num) {
				result.push(arr[i], arr[j]);
				break;
			}

		}
		//#5 If the result array has 2 or more numbers than quit the loop		
		if(result.length >= 2) break;
	}	
	//#6 Return result array 
	return result;
}

func(array, 17);


