export const getFormFields = (formElement) => {
  const formFields = Array.from(formElement.querySelectorAll('[name]'));

  return formFields.reduce((values, { name, value }) => {
    values[name] = value;

    return values;
  }, {});
};
