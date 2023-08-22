const maskedNumberLength = {
  type: 'string',
  errors: true,
  validate: function validate(length, data) {
    validate.errors = [
      {
        keyword: 'maskedNumberLength',
        message: 'Значение должно быть длинной ' + length + ' символов',
        params: { keyword: 'maskedNumberLength' },
      },
    ];

    const numsLength = data.replace(/\D/g, '').length;

    return typeof data === 'string' && (numsLength === 0 || numsLength === length);
  },
};

export default maskedNumberLength;
