var countMe = counter();
console.log(countMe());
console.log(countMe());
console.log(countMe());
console.log(countMe());

function counter() {
  var time = 0;
  return function() {
    return ++time;
  }
}