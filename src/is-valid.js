export default (VALIDATORS) => {
  return (value, rule) => {
    if (
      rule === null ||
      typeof rule !== 'object' ||
      typeof rule.type !== 'string'
    ) {
      return false;
    }

    const { type } = rule;

    if (!Object.hasOwn(VALIDATORS, type)) {
      return false;
    }

    const validator = VALIDATORS[type];
    return validator(value, rule);
  };
};
