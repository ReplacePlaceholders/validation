import validators from './validators.js';
import factory from './is-valid.js';

const isValid = factory(validators);

export default isValid;