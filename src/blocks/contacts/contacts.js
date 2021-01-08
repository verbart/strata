import axios from 'axios';
import Noty from 'noty';
import { getFormFields } from '../../helpers/getFormFields';

const formElement = document.querySelector('.contacts__form');

formElement.addEventListener('submit', (event) =>  {
  event.preventDefault();

  const formFields = getFormFields(formElement);

  if (formFields._gotcha) {
    return;
  }

  axios.post('https://formspree.io/f/mknpkrbp', {
    _subject: 'From strata',
    _format: 'plain',
    page: window.location.href,

    ...formFields
  }).then(() => {
    new Noty({
      text: 'Your message is successfully sent!',
      type: 'success'
    }).show();
  }).catch(() => {
    new Noty({
      text: 'Your message not sent!',
      type: 'error'
    }).show();
  }).finally(() => {
    formElement.reset();
  });
});
