function DefaultPara(a,b){
     console.log(a,b)
  }
 
  DefaultPara(20,30)
 
 function area(height,width){
     return height * width;
     height = height || 20;
     widht =  width  || 30;
 }
 console.log(area(20,30))
 
 function arrfun(a,b =  10){
     console.log(a,b);
     arrfun(50)
 }
 
 //Template Literals
 //ES6
 const fname = 'Hi';
 const lname = 'Hellow';
 const fullName = `you name ${fname} ${lname}`;
 console.log(fullName);
 
 //ES5
 var name = 'your name ' + fname + ' ' + lname;
 console.log(name)
 
 // muti - line string 
 // es5
 
 var promot = 'Hello  \n' + 'Hi \n' + 'welcome'
 console.log(promot)
 
 //es6
 
 const userPromot =`Hellow
 
 hhh
 
 test`
  console.log(userPromot)
  
  //Destructing 
  //es6
  const arr = [1,2,3,4,5];
  const index0 = arr[0] //1
  const index1 = arr[1] //2
  const index2 = arr[2] //3
  console.log(index0)
  console.log(index1)
  console.log(index2)

//es6
const[a,b] = arr;
console.log(a,b);
  
const[d,,,e]= arr
console.log(d,e);

const [ar1,ar2,ar3,ar4,ar5,ar6 =10] = arr;
console.log(ar5, ar6)

const userName = ['Test1','Test2'];
const [user1,user2,user3 = 'Test']  = ['Test4','Test5'];

console.log(user1)
console.log(user2)
console.log(user3)

let [userVal1,userVal2] = ['new1','new2'];
  
//swaping item
console.log(userVal1,userVal2, "===before swapping");

[userVal1, userVal2] = [userVal2, userVal1];

console.log(userVal1,userVal2, "===before swapping");
  
  
  
  
  