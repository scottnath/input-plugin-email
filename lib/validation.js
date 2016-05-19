'use strict';

/**
 * Validation for email Input Plugin
 *
 * @param {object} input - inputs in this plugin's instance and their values as {string}
 * @param {object} input.target - the triggering input's name and value as {string}
 * @param {string} input.target.name - the triggering input's name
 * @param {string|bool} input.target.value - the triggering input's value
 * @param {object} input.all - all inputs in this plugin's instance
 * @param {string|bool} input.all.email - value of input email
 * @param {object} [settings] - settings for this input plugin instance
 * @param {object} [settings.target] - the triggering input's settings as an {object}
 * @param {object} [settings.all] - all settings in this plugin instance as an {object}
 * @param {object} [settings.all.email] - settings of input email {object}
 *
 * @returns {bool|string} true or a string with the text describing the error
 *
 * @module emailValidation
 */

const validator = require('validator');

module.exports = function emailValidation(input) {
  validator.isEmail(input.target.value);

  if (!validator.isEmail(input.target.value)) {
    return 'Not a valid e-mail address.';
  }

  return true;
};
