/**
 * Validation for email Input Plugin
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} input.target - the triggering input's name and value as {String}
 * @param {String} input.target.name - the triggering input's name
 * @param {String|Bool} input.target.value - the triggering input's value
 * @param {Object} input.all - all inputs in this plugin's instance
 * @param {String|Bool} input.all.email - value of input email
 * @param {Object} [settings] - settings for this input plugin instance
 * @param {Object} [settings.target] - the triggering input's settings as an {Object}
 * @param {Object} [settings.all] - all settings in this plugin instance as an {Object}
 * @param {Object} [settings.all.email] - settings of input email {Object}
 *
 * @returns {Bool|String} true or a string with the text describing the error
 *
 * @module emailValidation
 */
module.exports = function emailValidation(input, settings) {
  'use strict';
  let domains;

  domains = settings.target.domains || ['foo.com', 'bar.com', 'baz.com'];
  if (!Array.isArray(domains)) {
    domains = [String(domains)];
  }

  if (!settings.target.regex.test(input.target.value)) {
    return 'Not a valid e-mail address.';
  }

  if (!domains.some(domain => (input.target.value.indexOf(domain, input.target.value.length - domain.length) !== -1))) {
    return `Email must be within the following domains: ${domains.toString()}`;
  }

  return true;
};
