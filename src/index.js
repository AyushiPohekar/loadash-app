const _ = require("lodash");

//1)Chunk:Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
//Syntax:_.chunk(array, [size=1])

//1)Filter

var resultChunk = _.chunk(["a", "b", "c", "d"], 2);
console.log('Chunk:',resultChunk);

//2)reduce:Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
   //Syntax:_.reduce(collection, [iteratee=_.identity], [accumulator])

   var resultReduce=_.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0);
  console.log('Reduce:',resultReduce);

//3)Filter:Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
//Syntax:_.filter(collection, [predicate=_.identity])

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];
var result = _.filter(users, function (o) {
  return !o.active;
});
console.log('Filter:',result);

//4)find:Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
  //Syntax:_.find(collection, [predicate=_.identity], [fromIndex=0])

  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  
 var resultFind= _.find(users, { 'age': 1, 'active': true });
 console.log('resultFind:',resultFind);


 //5)sum:Computes the sum of the values in array.
   //Syntax:_.sum(array)

   var resultSum=_.sum([4, 2, 8, 6]);
   console.log('Sum:',resultSum);