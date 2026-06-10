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
  
  // Object
const vehical ={
    brand:"TATA",
    model:"Nexon",
    type:"car",
    typeOfVehical:"two wheelr",
    color:"red",
    detail:{
        date:8,
        month:5,
        year:2026
    }
}
 //function car( {typeOfVehical,color})
function car(value){
    //console.log(values, "===values");
    
    const{typeOfVehical, color,isEngine="Good"} = value;
    
    console.log(typeOfVehical,"===typeOfVehical")
    console.log(color,"===color")
    console.log(isEngine,"===isEngine")
};
car(vehical);

function keyExtraction(key){
    const {[key]: returnValue} = vehical;
    return returnValue;
};

const carBrand1 = keyExtraction('brand')
const modal1 = keyExtraction('modal')
console.log("===============")
console.log(carBrand1,"carbrand1")
console.log(modal1,"modal1")

const {brand,modal,...rest}= vehical;
const{details:date } = rest;
const{brand:carbrand} = vehical

console.log("=================")
console.log(brand,"====brand")
console.log(modal,"====modal")
console.log("=================")
console.log(rest,"=== rest operator")
console.log("==================")
console.log(date)
console.log("==================")
console.log(carBrand1,"=====carBrand")

// spread operator - to combine two object / array(...)
// object

const obj1 ={
    a:'a1',
    b:'b1'
}
const obj2 ={
    c:'c1',
    d:'d1'
    
}
const obj3 = {...obj1,...obj2};
console.log(obj3)

// array

const arr1 =[1,2.3,4,5]
const arr2 =[6,7,8,9];
const arr3 = [...arr1,arr2];
const arr4 = [...arr1,arr2];

console.log(arr3);
console.log(arr4);

//Promise
//three state
//1.fulfiled - operation is complete
//2.pending - operation is not complete
//3.rejected - an error occurs

/*let promise = new promise(function(resolve,recject)){
// do operation
})*/

const count = false;

let countValue = new Promise((res,rej) =>{
    if (count){
        res("yes count is there")
    } else{
        rej("no count is not there")
    }
})
countValue.then(function(result){
    console.log(result,"===")
})
.catch(function(result){
    console.log(result)
});

//finally - resolve or rejected
// let countValue = newPromise(function(resolve,reject){
// reject ('promise rejected')
//})

// countValue,finally( () =>{
    //console.log('this code is executed')
//})

const userData = {
    isActive:true,
    name:"Hellow",
    age:30
}
let userDetails = new Promise ( (res, rej)=> {
    if(!userData.isActive){
        res(userData)
    }else{
        rej('user data is not isActive')
    }
})
userDetails.then((result) => {
    console.log(result, '====result then block')
})

.then((result) => {
    console.log(result, '====result catch block')
})
.finally( () => {
    console.log("===finally block")
})
// for api- 
//1. api suu -> api -> api ->

/*api(function(result){
    //api1(function(result){
      //  api2(function(result){
        //    api3(function(result){
          //      if (err){
            //       // do
              //  } else{
                   // print rsponse
                //}
            //})
        //})
    //})
})*/

//api(),then(() => {
  //  return api1()
//}).then( () => {
  //  return api2();
//}).catch (error)=>{
//}
//promise.all();
//promise.allsettled()
//promise.race()
//promise.any()
//promise.resolve()
//promise.reject()
//promise.catch()
//promise.finally()
//promise.them()

// -all promise are success - then it success -
// - any promise failed - then it will first reject resaon
// promise.all([promise1,promise2])
console.log("=================")
let api1 = new Promise((res, rej) => {
    setTimeout( () => rej(new Error ("api1 is an error")),1000 )
});
console.log("=================")
let api2 = new Promise((res, rej) => {
    setTimeout( () => rej(new Error('Api2 is an error')), 2000)
});

console.log("=================")
let api3 = new Promise((res, rej) => {
    setTimeout( () => res("Resolved API3"), 2000)
});

Promise.all([api1,api2,api3]).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error.message)
});

Promise.allSettled([api1,api2,api3]).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error.message)
});

Promise.race([api1,api2,api3]).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error.message)
});

Promise.any([api1,api2,api3]).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error.message)
});

// closures

function outerfunc(){
    let outervar = "I am outside"
    function innerFunc(){
        console.log(outervar);
    }
    return innerFunc
}

function exec(){
    const myInnerFun = outerFunc();
    myInnerFun();
}
exec();

function outerFun(x){
    return function innerFuc(y){
        return function innerFuc1(z){
            return x+y+z;
        }
    }
};

const value =outerFun(2)(3)(4);

// IIFE(immediately invoked function expression)
//syntax
/*
(function (){
    //logic
})()*/

function names(){
    console.log("Hellow")
};

names();

(function () {
    console.log("IIFE")
}) ();

// call() apply() bind()
// call method
//call(1,2,3)
//apply([1,2,3,4])
//bind(1.[])













  