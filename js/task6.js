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

var validator = validator();
console.log(validator(form));

function validator(obj) {
  function validation(obj) {
    return (validation.validName(obj) && validation.validEmail(obj));
  }
  validation.validName = function(obj) {
    var nameLength = obj.name.value.length;
    var requireMinLength = obj.name.validationRules.minLength;
    var requireMaxLength = obj.name.validationRules.maxLength;
    return (nameLength >= requireMinLength && nameLength <= requireMaxLength); 
  };
  validation.validEmail = function(obj) {
    var email = obj.email.value;
    var ruOrUa = email.slice(-3);
    var comOrOrg = email.slice(-4);
    return (email.indexOf('@') !== -1 && (ruOrUa === '.ru' || ruOrUa === '.ua' || comOrOrg === '.com' || comOrOrg === '.org')); 
  };
  return validation;
}