const latin = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'latin',
        message: 'Для ввода доступна только латиница.',
        params: { keyword: 'latin' },
      },
    ];

    return !data || /^[0-9a-z.,:!?()";_/\\'\-\s]+$/i.test(data); // латиница, цифры и знаки препинания
  },
}

export default latin;
