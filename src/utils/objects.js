export const map = (obj, callback) => Object.keys(obj).map(key =>
  callback(obj[key], key, Object.keys(obj).map(v => v)));

export const reduce = (obj, callback) => Object.keys(obj).reduce(callback);

export const exists = (array, key, value) => array.reduce((acc, obj) => {
  if (obj[key] === value) {
    return true;
  }
  return acc;
}, false);

export const replace = (array, value, newObject) => array.map((obj) => {
  if (obj.name === value) {
    return {
      ...newObject,
    };
  }
  return obj;
});

export const remove = (array, value) => array.filter(obj => obj.name !== value);
