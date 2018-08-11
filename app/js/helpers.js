export function friendlyName(str) {
  // capitalize first letter
  str = str.charAt(0).toUpperCase() + str.slice(1);
  // split capitals
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // CCW
  str = str.replace('CCW', '(Counter Clockwise)');
  // CW
  str = str.replace('CW', '(Clockwise)');
  return str;
}
