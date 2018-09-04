export const isEmpty = (input) => {
    return input === undefined && input.length === 0;
}

export function isAddress(address) {
    return true;
}

export function lengthInRange(input, number1, number2) {
    return input.length >= number1 && input.length <= number2;
}

export const lettersOnly = (input) => {
  return /^[a-zA-Z]+$/.test(input);
};

export const isZipcode = (input) => {
    return /^[0-9\-]+$/.test(input);
};

export const isEmail = (input) => {
    return input.indexOf("@") > 0 && input.indexOf(".") > 0;
};

export const passwordsEqual = (pass1, pass2) => {
    return pass1 === pass2;
};