const maskedNumberLengthStrict = {
  type: 'string',
  errors: true,
  validate: function validate(length, data) {
    validate.errors = [
      {
        keyword: 'maskedNumberLengthStrict',
        message: 'должно быть длинной ' + length + ' символов',
        params: { keyword: 'maskedNumberLengthStrict' },
      },
    ];

    const numsLength = data.replace(/\D/g, '').length;

    return numsLength === length;
  },
}

export default maskedNumberLengthStrict;
