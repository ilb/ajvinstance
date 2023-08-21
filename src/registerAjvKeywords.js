import isNotEmpty from './keywords/isNotEmpty.js';
import countWords from './keywords/countWords.js';
import latin from './keywords/latin.js';
import cyrillic from './keywords/cyrillic.js';
import snils from './keywords/snils.js';
import inn from './keywords/inn.js';
import maskedNumberLengthStrict from './keywords/maskedNumberLengthStrict.js';
import maskedNumberLength from './keywords/maskedNumberLength.js';
import minNumber from './keywords/minNumber.js';
import maxNumber from './keywords/maxNumber.js';
import vehicleNumber from './keywords/vehicleNumber.js';

export default (ajv) => {
  ajv.addKeyword('isNotEmpty', isNotEmpty);
  ajv.addKeyword('maskedNumberLength', maskedNumberLength);
  ajv.addKeyword('maskedNumberLengthStrict', maskedNumberLengthStrict);
  ajv.addKeyword('inn', inn);
  ajv.addKeyword('snils', snils);
  ajv.addKeyword('cyrillic', cyrillic);
  ajv.addKeyword('latin', latin);
  ajv.addKeyword('countWords', countWords);
  ajv.addKeyword('minNumber', minNumber);
  ajv.addKeyword('maxNumber', maxNumber);
  ajv.addKeyword('vehicleNumber', vehicleNumber);

  return ajv;
};
