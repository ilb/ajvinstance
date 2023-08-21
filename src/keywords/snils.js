const checkSnils = (checkedValue) => {
  checkedValue = checkedValue.replace(/\D/g, '');
  let checkSum = parseInt(checkedValue.slice(9), 10);

  //строка как массив(для старых браузеров)
  checkedValue = '' + checkedValue;
  checkedValue = checkedValue.split('');

  let sum =
    checkedValue[0] * 9 +
    checkedValue[1] * 8 +
    checkedValue[2] * 7 +
    checkedValue[3] * 6 +
    checkedValue[4] * 5 +
    checkedValue[5] * 4 +
    checkedValue[6] * 3 +
    checkedValue[7] * 2 +
    checkedValue[8] * 1;

  if (sum < 100 && sum === checkSum) {
    return true;
  } else if ((sum === 100 || sum === 101) && checkSum === 0) {
    return true;
  } else if (sum > 101 && (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0))) {
    return true;
  } else {
    return false;
  }
};

const snils = {
  type: 'string',
  errors: true,
  validate: function validate(length, data) {
    validate.errors = [
      {
        keyword: 'inn',
        message: 'СНИЛС введен некорректно',
        params: { keyword: 'snils' },
      },
    ];

    return !data || checkSnils(data);
  },
}

export default snils;
