const isNotEmpty = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data, parent, key) {
    validate.errors = [
      {
        keyword: 'isNotEmpty',
        message: 'Поле обязательно для заполнения',
        params: { keyword: 'isNotEmpty' },
      },
    ];

    return typeof data === 'string' && data.trim() !== '';
  },
}

export default isNotEmpty;
