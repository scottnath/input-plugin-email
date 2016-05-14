/**
 * email Input Plugin
 *
 *
 * An email input with domain validation
 */
const validation = require('./lib/validation.js');

/**
 * Single email Input Plugin
 * @module emailInputPlugin
 */
module.exports = {
  name: 'email',
  description: 'An email input with domain validation',
  validation: {
    emailValidation: validation,
  },
  inputs: {
    email: {
      validation: {
        function: 'emailValidation',
        on: 'blur',
      },
      type: 'email',
      label: 'email',
      placeholder: 'add your email',
      settings: {
        'domains': ['foo.com', 'bar.com', 'baz.com'],
        'regex': /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
      },
    },
  },
  html: '<label for="{{email.id}}">{{email.label}}</label><input type="{{email.type}}" id="{{email.id}}" name="{{email.name}}" value="{{email.value}}" placeholder="{{email.placeholder}}" />',
};
