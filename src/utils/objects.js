export function map(obj, callback) {
  return Object.keys(obj).map(key =>
    callback(obj[key], key, Object.keys(obj).map(v => v)));
}
export function reduce(obj, callback) {
  return Object.keys(obj).reduce(callback);
}
