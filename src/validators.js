export default Object.freeze(
  Object.assign(
    Object.create(null),
    {
      string: (value) => typeof value === 'string',

      object: (value, rule) => {
        if (value === null) {
          return rule.allowNull === true;
        }

        return typeof value === 'object';
      },

      'non-empty-string': (value) => {
        return typeof value === 'string' && value.length > 0;
      },
    },
  ),
);
