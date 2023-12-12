import moment from 'moment';

const maxDate = {
  type: ['string', 'object'],
  errors: true,
  validate: function validate(max, data) {
    validate.errors = [
      {
        keyword: 'maxDate',
        message: 'Выберите дату до ' + moment.utc(max).format('DD.MM.YYYY'),
        params: { keyword: 'maxDate' }
      }
    ];

    return !data || moment(data).isBefore(moment.utc(max).add(1, 'day'));
  }
};

export default maxDate;
