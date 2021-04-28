' use strict';
var fs = require('fs'); 
buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
str2 =str.split("\n");
L=str2.length;
console.log(L-1);