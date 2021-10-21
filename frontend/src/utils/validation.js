const regExpEmail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;

export const validate = (type, value) => {
  let isOk = false;
  let errorText = `{type} is required`;

  switch(type) {
    case 'name':
      if (value.length < 3) {
        errorText = 'Name should contain at least 3 chars ';
      } else if (value.length > 31) {
        errorText = 'Name should be no longer than 31 chars ';
      } else {
        errorText = 'name is OK';
        isOk = true;
      }
      break;
      case 'email':
        if (!regExpEmail.test(value)) {
          errorText = 'Provided email is not valid ';
        } else {
        errorText = 'email is OK';
        isOk = true;
      }
      break;
      case 'message':
        if (value.length < 1) {
          errorText = 'Message should contain something :) ';
        } else if (value.length > 164) {
          errorText = 'Message should be no longer than 164 chars';
        } else {
        errorText = 'message is OK';
        isOk = true;
      }
      break;
    default:
      isOk = true;
  }
  return [isOk, errorText];
};
