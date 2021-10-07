let arguments= process.argv;
arguments.splice(0,2);

let emailRegEx = RegExp('^[a-zA-z][.@a-zA-Z]*$')
arguments.forEach(email => {
console.log(email+"",emailRegEx.test(email))
 });

emailRegEx = RegExp('^[a-zA-z]*[@][.a-zA-Z]*$')
arguments.forEach(email => {
console.log(email+"",emailRegEx.test(email))
 });

 emailRegEx = RegExp('^[a-zA-z]*[@][.a-z0-9]+[.]{1}[.a-z]*$')
arguments.forEach(email => {
console.log(email+"",emailRegEx.test(email))
 });

