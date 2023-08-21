const vehicleNumber = {
  type: 'number',
  errors: true,
  validate: function validate(schema, data, parent, key) {
    validate.errors = [
      {
        keyword: 'vehicleNumber',
        message: 'VIN должен быть длинной 17 символов и содержать только 0-9 и A,B,C,D,E,F,G,H,J,K,L,M,N,P,R,S,T,U,V,W,X,Y,Z',
        params: { keyword: 'vehicleNumber' },
      },
    ];

    return /^([0-9ABCDEFGHJKLMNPRSTUVWXYZ]{17})$/.test(data);
  },
}

export default vehicleNumber;
