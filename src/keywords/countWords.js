const countWords = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data, parent, key) {
    validate.errors = [
      {
        keyword: 'countWords',
        message: 'Должно быть минимум ' + schema + 'слов',
        params: { keyword: 'countWords' },
      },
    ];
    // if()
    return !(data.trim().split(' ').length < schema);
  },
}

export default countWords;
