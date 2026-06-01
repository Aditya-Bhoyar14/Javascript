// for loop
//for (let i = 1; i<=5; i++) {
  //  console.log("Hellow Aditya")
//}
// while loop
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log("Sum:", sum);
// do while loop
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

//Switch
var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd'
switch(d){
    case 'a':
        console.log('this is case a');
        break;
    case 'b':
        console.log('this is case b');
        break;
    case 'c':
        console.log('this is case c');
        break;
    default:
       console.log('Hi')
}
// for in loop
// for in used for object syntax
/*{
    'key';value
}
*/

const userData = {
   'name':'Aditya',
    'age':20,
    'isActive':true,
}
console.log(userData.name)
console.log(userData.age)

for (const key in userData){
    console.log(key, userData[key])
}

//for-each-loop
//syntax
/* arr.forEach(function(x)){
    //code here
})*/

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});