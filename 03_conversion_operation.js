let score = 33
console.log(score);
console.log(typeof score);

score = String(score); // converting number to string
console.log(score);
console.log(typeof score);

score = "33aa"
score = Number(score); // converting string to number, NaN = Not a Number
console.log(score);
console.log(typeof score);

score = null // converting null to number, 0 = zero
score = Number(score);
console.log(score);
console.log(typeof score);

score = undefined // converting undefined to number, NaN = Not a Number
score = Number(score);
console.log(score);
console.log(typeof score);

score = true // converting boolean to number, 1 = true, 0 = false
score = Number(score);
console.log(score);
console.log(typeof score);

score = "satish" // converting string to number, NaN = Not a Number
score = Number(score);
console.log(score);
console.log(typeof score);