var objectCounter = counter();
console.log(objectCounter.miniCount());
console.log(objectCounter.miniCount());
console.log(objectCounter.miniCount());

function counter() {
  var count = 0;
  return {
    miniCount: function() {
      return ++count;
    }
  }
}