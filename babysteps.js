var sum = 0;
var l = (progress.argv).length;
for (var i=2; i<l; i++) {
    var x = Number(process.argv[i])
    sum +=x;
}
console.log(sum);