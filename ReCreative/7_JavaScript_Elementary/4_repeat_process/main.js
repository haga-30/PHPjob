console.log(1);
console.log(2);
console.log(3);

//while文
let number = 1;
while (number <= 100) {
  console.log(number);
  number++;
}

//do...while文
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 100);

//for文
for (let number = 1; number <= 100; number++) {
  console.log(number);
}

//break
let number = 0;
while (number < 5) {
    if (number === 3) {
        break;
    }
    console.log(number);
    number++;
}

//continue
let number = 0;
while (number < 5) {
    if (number === 3) {
        number++;
        continue;
    }
    console.log(number);
    number++;
}