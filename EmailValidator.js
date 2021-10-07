let arguments= process.argv;
arguments.splice(0,2);
let emailRegEx = RegExp('^[a-zA-z][.@a-zA-Z]*$')
arguments.forEach(element => {
console.log(element+"",emailRegEx.test(element))
 });

