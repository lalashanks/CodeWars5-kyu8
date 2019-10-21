// 1. Remove First and Last Character

let a = "test";

a = a.slice(1, -1);

console.log(a); // console.log est


// 2. Removing Elements

let myList = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep']

myList = myList.filter(function(remove) {
  console.log(myList[0])
});


// 3. Counting Sheep

const (countSheep) = (arrayOfSheep) =>
arrayOfSheep.filter(Boolean).length


// 4. Get Number From String

const string = "abcd3fghijklmn0pqrstuvwxy5"

getNumberFromString(string)


// 5. Basic Mathematical Operations
function basicOp(operation, value1, value2){
  if(operation === "+"){
    return value1 + value2;
  } else if(operation === "-"){
    return value1 - value2;
  } else if(operation === "*"){
    return value1 * value2;
  } else if(operation === "/"){
    return value1 / value2;
  }
}
