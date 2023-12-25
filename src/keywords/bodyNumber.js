const bodyNumber = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'bodyNumber',
        message: 'Номер кузова должен быть длинной 9-12 символов и содержать только цифры и латиницу',
        params: { keyword: 'bodyNumber' },
      },
    ];

    return /^([0-9A-Z]{9,12})?$/.test(data);
  },
}

export default bodyNumber;
