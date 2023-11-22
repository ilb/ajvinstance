import Ajv from 'ajv';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import localize from 'ajv-i18n';
import registerAjvKeywords from './src/registerAjvKeywords.js';

import ajv_keywords from 'ajv-keywords';

export const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  coerceTypes: true,
  strict: false,
  removeAdditional: true,
  $data: true,
});

ajv_keywords(ajv, ["transform"]);

ajv.addKeyword('uniforms');
ajv.addKeyword('options');

// email or empty string
ajv.addFormat(
  'email',
  /(^[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$)|(^$)/i
);

registerAjvKeywords(ajv);

function createValidator(schema, additionalValidator) {
  const validator = ajv.compile(schema);

  return (model) => {
    let errors = [];

    validator(model);

    if (validator.errors && validator.errors.length) {
      errors = validator.errors;
    }

    errors.length && localize.ru(errors);

    if (additionalValidator) {
      errors = errors.concat(additionalValidator(model));
    }

    if (errors.length) {
      return { details: errors };
    }
  };
}

export function createSchemaBridge(schema, additionalValidator) {
  return new JSONSchemaBridge(schema, createValidator(schema, additionalValidator));
}
