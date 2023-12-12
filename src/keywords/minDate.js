import moment from 'moment';

const minDate = {
  type: ['string', 'object'],
  errors: true,
  validate: function validate(min, data) {
    validate.errors = [
      {
        keyword: 'minDate',
        message: 'Выберите дату после ' + moment(min).format('DD.MM.YYYY'),
        params: { keyword: 'minDate' }
      }
    ];

    return !data || moment(data).isAfter(moment(min).subtract(1, 'day'));
  }
};

export default minDate;
