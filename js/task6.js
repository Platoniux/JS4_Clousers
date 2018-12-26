var form = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  },
};

var validForm = validation();
console.log(validForm(form));

function validation() {
  var results = [];
  function checkResults(obj) {
    for(key in obj) {
      if(obj[key].validationRules.required) {
        results.push(checkOnRequired(obj[key]));
      }
      if(obj[key].validationRules.minLength) {
        results.push(checkOnMinLength(obj[key]));
      }
      if(obj[key].validationRules.maxLength) {
        results.push(checkOnMaxLength(obj[key]));
      }
      if(obj[key].validationRules.email) {
        results.push(checkOnEmail(obj[key]));
      }
    }
    return results.every(checkOnResults);
  }

  function checkOnRequired(obj) {
    var value = obj.value;
    if ((value.length === 0) || value.split('').some(checkOnSpaces)) {
      obj.errorMessage = 'ERROR: This is required field';
      return false;
    }
    return true;
  }

  function checkOnMinLength(obj) {
    var value = obj.value;
    var requireMinLength = obj.validationRules.minLength;
    if (value.length >= requireMinLength) {
      return true;
    }
    obj.errorMessage = 'ERROR: Min length is ' + requireMinLength;
    return false;
  }

  function checkOnMaxLength(obj) {
    var value = obj.value;
    var requireMaxLength = obj.validationRules.maxLength;
    if (value.length <= requireMaxLength) {
      return true;
    }
    obj.errorMessage = 'ERROR: Max length is ' + requireMaxLength;
    return false;
  }

  function checkOnEmail(obj) {
    var email = obj.value;
    var ruOrUa = email.slice(-3);
    var comOrOrg = email.slice(-4);
    if (email.indexOf('@') !== -1 && (ruOrUa === '.ru' || ruOrUa === '.ua' || comOrOrg === '.com' || comOrOrg === '.org')) {
      return true;
    }
    obj.errorMessage = 'ERROR: Your email is invalid';
    return false;
  }

  function checkOnResults(item) {
    return item === true;
  }

  function checkOnSpaces(item) {
    return item === ' ';
  }

  return checkResults;
}