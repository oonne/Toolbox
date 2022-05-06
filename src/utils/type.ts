const isString = (s): s is string => typeof s === 'string';

const isArray = (a): a is Array<any> => Array.isArray(a);

export default {
  isString,
  isArray,
};
