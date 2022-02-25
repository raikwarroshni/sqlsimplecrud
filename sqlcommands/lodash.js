//# why lodash 
//   lodash use for utility liberary, delivering, modularity and  for fast performance;


//_.filter method
var _  = require('lodash')

// var users = [
//     {name : "rose",age:20,active:true},
//     {name:"ruhi",age:25,active:false},
//     {name:"rachna",age:30,active:true}
// ]
// let result = _.filter(users, function(user){
//     return !user.active;
// });

// let result = _.filter(users, 'active')

// let result = _.filter(users,{age:25})

// let result = _.filter(users, ["age",20])
// console.log(result);


//_.sum method for compute the value of array

// let arr = [2,3,4,5,6]
// let result1 = _.sum(arr)
// console.log(result1,'result _sum');

// let arr = [{a:1},{a:20},{a:20,b:"hello"}]
// let result1 = _.sumBy(arr,function(o){return o.a;})
// console.log(result1,"result _sumby");

//_.isEmpty(value) method for check if value is an empty array, object, connection or map

// let obj={a:0}
// console.log(_.isEmpty(true),"booleans values");
// console.log(_.isEmpty(null),"for null value");
// console.log(_.isEmpty(obj),"for object");

// _.find method use for search match array of object and resturn only first match
 
// let arr1 = [
//     {name:"rose",active:true},
//     {name:"ruhi",active:true}
// ]
// console.log(_.find(arr1,function(o){return o.active;}));
// console.log(_.find(arr1,{'active':true}));
// console.log(_.find(arr1,['active',true]));
// console.log(_.find(arr1,'active'));


// _.map() method runing each element in collection thru iteratee.

function square(n){
    return n*n;
}
// let arr1 = [4,8]
// let sequare = _.map(arr1,square)

let sequare = _.map({a:4,b:5},square);
//  console.log(sequare,"sequare");

//_.reduce()
let value = _.reduce([1,2],function(sum, n){
    return sum+n;
},0)

// console.log(value,"value");

//_.chunk method

 let data = [1,2,3,4,5,6,7,8,9]
// let result = _.chunk(data,3)

//_.concat method
let result = _.concat(data,["suru"],["prajapat"])
console.log(result);

let boj = {ok:1,inserted:1}
console.log(boj.ok);
