function frog(jumps) {
  // Your code here
let arr = new Array(jumps.length);
arr[0] = 0;
 
for (let i = 1; i < jumps.length; i++) {    
  if (i === 1) {
    arr[1] = Math.abs(jumps[0] - jumps[1]);
  } else {
    arr[i] = Math.min(
      arr[i - 1] + Math.abs(jumps[i] - jumps[i - 1]),
      arr[i - 2] + Math.abs(jumps[i] - jumps[i - 2])
    );
  }
}
 
return(arr[jumps.length - 1]);
}
console.log(frog([10, 30, 40, 20])) // 30
console.log(frog([30, 10, 60, 10, 60, 50])) // 40

module.exports = frog;
