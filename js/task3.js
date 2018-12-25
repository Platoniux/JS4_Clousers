var multi3 = multiA(3);
var multi4 = multiA(4);

console.log(multi3(10));
console.log(multi4(10));

function multiA(a) {
  return function(b) {
    return a * b;
  }
}