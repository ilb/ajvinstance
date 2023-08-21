const cyrillic = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'cyrillic',
        message: 'Для ввода доступна только кириллица.',
        params: { keyword: 'cyrillic' },
      },
    ];
    return !data || /^[0-9а-яё.,:!?()";_/\\'\-\s]+$/i.test(data); // кириллица, цифры и знаки препинания
  },
}

export default cyrillic;
