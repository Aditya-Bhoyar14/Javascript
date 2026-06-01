// value
const fruites = ['apple','banana','mango'];
const iter = fruites.values();
console.log(iter)

for (const val of iter){
    console.log(val)
}

// sort // a b c d
const sortfruites = ['mango','apple','banana','orange'];
sortfruites.sort();
console.log(sortfruites);

const numberSorting = [54,53,23,42,78,22,99,22];
numberSorting.sort();
console.log(numberSorting);

// reverse org ban app man

const reverseItem = [1,2,3,4,5];
reverseItem.reverse();
console.log(reverseItem)

// indexOf // 0,1,2,3,4,5
const arr = [1,2,3,4,5,5];
const index = arr.indexOf(5);
const index1 = arr.indexOf(6);

console.log(index);
console.log(index1);

// LastIndexOf [1,2,3,4,5,3,5,3];

const newArr = [1,2,3,4,5,3,5,3,2];
const lastIndex = newArr.lastIndexOf(5);
console.log(lastIndex);

