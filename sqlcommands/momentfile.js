const moment = require('moment')


//yeaar
let y = moment().year()
console.log(y,"y.....");

// let m = moment().month(3).format()
// let m=moment("2012-10-03").add(1,moment.MINUTE).format()
// let m = moment().format("MMM Do YY");
// let m = moment().format('LL')
let m = moment().startOf('minute').fromNow(); 
// console.log(m,"m......");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
console.log(moment().format('YYYY [escaped] YYYY'));
console.log(moment().format('YYYY MM DD'));