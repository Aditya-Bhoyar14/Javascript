// Array is a colection of items
//const fruit = [banana,mango,orange,annar]
// it will store in index formate

/*const arr = [1,2,3,4,5,6]; // 0 1 2 3 4
console.log(arr[0]);*/
// two ways
//1. array literal

//const arr =  []
const newArr = [1,2,3,4,5];
//  variable.lenght;
console.log(newArr.length)
// constructor
const conArr = new Array()

const colors = ['red','green','yellow'];
console.log(colors.length);

console.log(colors,"before update")

colors[2] = 'blue';
console.log(colors,"after update")

const arr1 = [];
console.log(arr1);
arr1[0] = 1;
arr1[1] = 2;
console.log(arr1)

console.log(arr1.length, "===arr1")
arr1[arr1.length] = 3;