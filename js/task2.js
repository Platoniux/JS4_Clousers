var pass = comparePassword('qwerty');
console.log(pass('ytytyt'));
console.log(pass('ytytyt'));
console.log(pass('ytytyt'));
console.log(pass('ytytyt'));
console.log(pass('ytytyt'));
console.log(pass('ytytyt'));

function comparePassword(x) {
  var attempt = 0;
  return function(a) {
    attempt++;
    var attention = 'I think, you aren\'t a member';
    return (attempt > 5) ? attention : x === a;
  }
}