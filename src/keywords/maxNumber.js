const maxNumber = {
  type: 'number',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'maxNumber',
        message: 'Значение должно быть не больше ' + schema,
        params: { keyword: 'maxNumber' },
      },
    ];

    return data <= schema;
  },
}

export default maxNumber;
