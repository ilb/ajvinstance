const minNumber = {
  type: 'number',
  errors: true,
  validate: function validate(schema, data, parent, key) {
    validate.errors = [
      {
        keyword: 'minNumber',
        message: 'Значение должно быть не меньше ' + schema,
        params: { keyword: 'minNumber' },
      },
    ];

    return data >= schema;
  },
}

export default minNumber;
