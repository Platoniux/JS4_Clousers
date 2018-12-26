/*FD*/
(function(food) {
  if (food === 'cookies') {
    console.log('More please :)');
  } else {
    console.log('Some food please :)');
  }
})('cookies');

/*FE*/
var checkFood = function(food) {
  if (food === 'cookies') {
    console.log('More please :)');
  } else {
    console.log('Some food please :)');
  }
};

checkFood('cookies');