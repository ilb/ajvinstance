/**
 *
 * @param errors
 */
export default function ajvlocale(errors) {
  if (!(errors && errors.length)) {
    return;
  }
  for (const e of errors) {
    let out;
    let cond;

    switch (e.keyword) {
      case "additionalItems":
      case "items":
        out = "";
        let n = e.params.limit;

        out += `должно иметь не более, чем ${n} элемент`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "additionalProperties":
        out = "не должно иметь дополнительных полей";
        break;
      case "anyOf":
        out = "должно соответствовать одной их схем в \"anyOf\"";
        break;
      case "const":
        const getSubstringAfterLastChar = (str, char) => {
          let i = str.length;

          while (i > 0) {
            if (str[i - 1] === char) {
              break;
            }
            i--;
          }

          return i > 0 ? str.slice(Math.max(0, i)) : "";
        };

        if (getSubstringAfterLastChar(e.instancePath, "/") === "confirmPassword") {
          out = "Пароль не совпадает";
        } else {
          out = "должно быть равно заданному значению";
        }

        break;
      case "contains":
        out = "должно содержать значение соответствующее схеме";
        break;
      case "dependencies":
      case "dependentRequired":
        out = "";
        n = e.params.depsCount;
        out += "должно иметь пол";
        if (n === 1) {
          out += "е";
        } else {
          out += "я";
        }
        out +=
          ` ${e.params.deps}, когда присутствует поле ${e.params.property}`;
        break;
      case "discriminator":
        switch (e.params.error) {
          case "tag":
            out = `поле "${e.params.tag}" должно быть строкой`;
            break;
          case "mapping":
            out =
              `значение поля "${
                e.params.tag
              }" должно быть в одной из oneOf схем `;
            break;
          default:
            out = `должно соответствовать правилу "${e.keyword}"`;
        }
        break;
      case "enum":
        out = "должно быть равно одному из разрешенных значений";
        break;
      case "false schema":
        out = "схема равна false";
        break;
      case "format":
        if (e.params.format === "email") {
          out = "E-mail введен некорректно";
        } else {
          out = `должно соответствовать формату "${e.params.format}"`;
        }
        break;
      case "formatMaximum":
      case "formatExclusiveMaximum":
        out = "";
        cond = `${e.params.comparison} ${e.params.limit}`;
        out += `должно быть ${cond}`;
        break;
      case "formatMinimum":
      case "formatExclusiveMinimum":
        out = "";
        cond = `${e.params.comparison} ${e.params.limit}`;
        out += `должно быть ${cond}`;
        break;
      case "if":
        out = `должно соответствовать схемe "${e.params.failingKeyword}"`;
        break;
      case "maximum":
      case "exclusiveMaximum":
        out = "";
        cond = `${e.params.comparison} ${e.params.limit}`;
        out += `должно быть ${cond}`;
        break;
      case "maxItems":
        out = "";
        n = e.params.limit;
        out += `должно иметь не более, чем ${n} элемент`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "maxLength":
        out = "";
        n = e.params.limit;
        out += `должно быть не длиннее, чем ${n} символ`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "maxProperties":
        out = "";
        n = e.params.limit;
        out += `должно иметь не более, чем ${n} пол`;
        if (n === 1) {
          out += "е";
        } else if (n >= 2 && n <= 4) {
          out += "я";
        } else {
          out += "ей";
        }
        break;
      case "minimum":
      case "exclusiveMinimum":
        out = "";
        cond = `${e.params.comparison} ${e.params.limit}`;
        out += `должно быть ${cond}`;
        break;
      case "minItems":
        out = "";
        n = e.params.limit;
        out += `должно иметь не менее, чем ${n} элемент`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "minLength":
        out = "";
        n = e.params.limit;
        out += `должно быть не короче, чем ${n} символ`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "minProperties":
        out = "";
        n = e.params.limit;
        out += `должно иметь не менее, чем ${n} пол`;
        if (n === 1) {
          out += "е";
        } else if (n >= 2 && n <= 4) {
          out += "я";
        } else {
          out += "ей";
        }
        break;
      case "multipleOf":
        out = `должно быть кратным ${e.params.multipleOf}`;
        break;
      case "not":
        out = "должно не соответствовать схеме в \"not\"";
        break;
      case "oneOf":
        out = "должно соответствовать в точности одной схемe в \"oneOf\"";
        break;
      case "pattern":
        out = `должно соответствовать образцу "${e.params.pattern}"`;
        break;
      case "patternRequired":
        out =
          `должно иметь поле, соответствующее образцу "${
            e.params.missingPattern
          }"`;
        break;
      case "propertyNames":
        out = "имя поля не соответствует схеме";
        break;
      case "required":
      case "isNotEmpty":
        out = "Поле обязательно для заполнения";
        break;
      case "type":
        out = `должно быть ${e.params.type}`;
        break;
      case "unevaluatedItems":
        out = "";
        n = e.params.len;
        out += `должно иметь не более, чем ${n} элемент`;
        if (n >= 2 && n <= 4) {
          out += "а";
        } else if (n !== 1) {
          out += "ов";
        }
        break;
      case "unevaluatedProperties":
        out = "не должно иметь непроверенных полей";
        break;
      case "uniqueItems":
        out =
          `не должно иметь повторяющихся элементов (элементы ${
            e.params.j
          } и ${
            e.params.i
          } идентичны)`;
        break;
      default: {
        out = e.message;
      }
    }
    e.message = out;
  }
}
