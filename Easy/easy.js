//one way it works
// function exercise() {
//   let workout = prompt("Pick today's workout!");
//   if (workout === "running") {
//     let run = "running";
//     console.log(`Today's exercise is: ${run}!`);
//     alert("˖ ࣪⭑ Get ready to run!˖ ࣪⭑");
//   } else if (workout === "swimming") {
//     let swim = "swimming";
//     console.log(`Today's exercise is: ${swim}!`);
//     alert("˖ ࣪⭑ Get ready to swim!˖ ࣪⭑");
//   } else {
//     console.log("Nope. Looks like we're not exercising today.");
//     alert(" Let's not do that.");
//   }
// }
// let choice = exercise();
// console.log(choice);

function exercise(x) {
  return "˖ ࣪⭑Today's exercise is:" + x + "!˖ ࣪⭑";
}

function run() {
  var run = exercise("running");
  return run;
}

function swim() {
  var swim = exercise("swimming");
  return swim;
}

console.log(run());
console.log(swim());
