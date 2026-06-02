const data = [
    {
        id:1,
        title:'Firt',
        age:20
    },
    {
        is:2,
        title: 'second',
        age:30
    },
    { 
        id:3,
        title:'third',
        age:40
    }
];

const userTitle = data.map((item) => item.title.toUpperCase());
console.log(userTitle);
console.table(userTitle);

const filterData = data.filter( (item) => item.age >20);
console.log(filterData)

// find
 const findItem = data.find( (item) => item.age ===20);
 console.log(findItem)
 
 // findIndex
 const itemIndex = data.findIndex( (item) => item.age ===40);
 console.log(itemIndex)
 
 // Concat 
 const arr = [1,2,3,4,5];
 const arr2 = [6,7,8];
 const arr3 = [9,0];
 // 1,2,3,4,5,6,7,8,9,0
 
 const concatArr = arr.concat(arr2,arr3)
 //[1,2,3,4,5,]. concat([6,7,8],[9,0])
 console.log(concatArr)
 
 const filterArray = [20,30,40,50,60];
 
 const filterArrgrathan30 = filterArray.filter( (item) => {
     return item > 30
 });
 
 console.log(filterArrgrathan30)
 
 let sum = 0;
 for( let i = 0; i<arr.length; i++)
 {
     sum += arr[i]
 }
 console.log(sum)
 
 // reduce arr.reduce(acc,cur,index, arr) => {}.intial value
 
 const newArr = [1,2,3,4,5];
 
 const sumArr = newArr.reduce( (acc,cur,index) => {
     console.log('acc is ', acc)
     console.log('cur is ', cur)
     console.log('index is ', index)
     return acc + cur
     
 },0);
 
 const normalFunSum = newArr.reduce (function(acc,cur){
     return acc+cur
 },0)
 console.log(sumArr)
 console.log(normalFunSum)
 
 const iniitalval = 0
 const dataAgeSum = data.reduce((total,item) => {
     console.log({total})
     console.log({item})
     return total + item.age
 }, iniitalval );
 
 console.log(dataAgeSum)
 
 const multiArr = [[1,2,3],[4,5,6],[7,8,9]]
 //[1,2,3,4,5,6,7,8,9]
 const flatenArr = multiArr.reduce ((acc,cur ) => {
     return acc.concat(cur)
 },[]);
 
 console.log(flatenArr)
 
 
 
 
 
 
 
 
 
 
 
 