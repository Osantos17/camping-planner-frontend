const dayjs = require('dayjs');

console.log(dayjs('2018-08-08'));

console.log(dayjs().startOf('month').add(5, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss'));


console.log(5);

console.log(1776);
console.log(77);

console.log(5);
console.log(775);
console.log(5);


function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.55, 16, 11.5, 21)); // returns: [4, 16, 56.25, 64, 132.25, 441]

// Interpolate variable bindings
var name = "Bob", time = "today";

console.log(`Hello ${name}, how are you ${time}?`);

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
