function fizzBuzz(num) {
  let sumDigits = String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
  for (let i = 1; i <= sumDigits; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
fizzbuzz(8010035452)
