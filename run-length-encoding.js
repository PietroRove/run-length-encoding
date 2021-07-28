//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  if (text == '' || text == undefined) {
    return '';
  }
  let result = '';
  let length = text.length;
  for (var i = 0; i < length; i++) {

    let count = 1;

    while (i < length && text[i] == text[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      result = result + count + text[i];
    }
    else
      result = result + text[i];
  }
  return result;
};

export const decode = (text) => {
  if (text == '' || text == undefined) {
    return '';
  }

  let result = '';
  for (var i = 0; i < text.length; i++) {
    let char = text[i];
    if (text[i] >= '0' && text[i] <= '9') {

      //devo considerare i numeri a due cifre
      let substring = '';
      let number = '';
      while (i < text.length && text[i] >= '0' && text[i] <= '9') {
        number = number + text[i];
        console.log("text ", text[i]);
        i++;
      }
      console.log("number ", number);
      for (let j = 0; j < number; j++)
        result = result + text[i];
      console.log("result ", result);
    }
    else {
      result = result + char;
    }
  }
  return result;
};
