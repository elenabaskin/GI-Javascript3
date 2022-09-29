function sharePizza(x) {
  let people = x;
  let cutPizzaSlices = 8;
  let result = cutPizzaSlices / people;
  console.log(`Each person gets ${result} slice(s) of pizza.`);
}
sharePizza();

console.log(sharePizza(4));
console.log(sharePizza(20));
console.log(sharePizza(1));
console.log(sharePizza(8));
