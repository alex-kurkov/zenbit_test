const regExpEmail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;

export default (values) => {
  const errors = {};

  const validateEmail = (value) => {
    if (regExpEmail.test(value)) {
      errors.email = false;
    } else if (!value) {
      errors.email = 'Обязательное поле';
    } else {
      errors.email = 'Должен быть корректный Email адрес';
    }
  };

  const validateName = (value) => {
    if (value && (value.length > 1 && value.length < 31)) {
      errors.name = false;
    } else if (!value) {
      errors.name = 'Обязательное поле';
    } else {
      errors.name = 'Не меньше 2 и не больше 30 символов';
    }
  };

  if (Object.prototype.hasOwnProperty.call(values, 'email')) validateEmail(values.email);
  if (Object.prototype.hasOwnProperty.call(values, 'name')) validateName(values.name);
  return errors;
};