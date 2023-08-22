const countWords = {
  type: 'string',
  errors: true,
  validate: function validate(condition, data) {
    validate.errors = [
      {
        keyword: 'countWords',
        message:( () => {
          let errorMessage = 'Должно быть минимум ' + condition + ' слов';

          if (condition >= 2 && condition <= 4) {
            errorMessage += "а";
          } else if (condition !== 1) {
            errorMessage += "ов";
          }

          return errorMessage;
        })(),
        params: { keyword: 'countWords' },
      },
    ];

    return !(data.trim().split(' ').length < condition);
  },
}

export default countWords;
