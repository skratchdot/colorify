import * as colorify from '../../../lib/colorify';
import lastInWorkerHelper from './last-in-worker-helper';

const combinationFunctionNames = colorify.getCombinationFunctionNames();
const getFlags = function() {
  const ret = [];
  for (let i = 7; i > 0; i--) {
    const flags = i
      .toString(2)
      .split('')
      .map(parseFloat);
    while (flags.length < 3) {
      flags.unshift(0);
    }
    ret.push(flags);
  }
  return ret;
};
const getStringValues = function(color1, color2, fnName) {
  const regex = /^.*\(([^,]+),([^,]+),([^,]+)(.*\).*)$/;
  const values1 = color1[fnName]().string().match(regex);
  const values2 = color2[fnName]().string().match(regex);
  return [values1, values2];
};

lastInWorkerHelper(function(hex1, hex2, farbtasticSetColor) {
  const data = {
    hex1: hex1,
    hex2: hex2,
    farbtasticSetColor: farbtasticSetColor,
    RGB: {},
    HSL: {}
  };
  const color1 = colorify.lib.onecolor(hex1);
  const color2 = colorify.lib.onecolor(hex2);
  const libColor1 = colorify.lib.color(hex1);
  const libColor2 = colorify.lib.color(hex2);
  data.rgbString1 = libColor1.rgb().string();
  data.rgbString2 = libColor2.rgb().string();
  data.valuesRGB = getStringValues(libColor1, libColor2, 'rgb');
  data.valuesHSL = getStringValues(libColor1, libColor2, 'hsl');
  ['RGB', 'HSL'].map(function(colorSpace) {
    data[colorSpace] = [];
    getFlags().forEach(function(flags) {
      const row = {
        flags: flags,
        type: colorSpace,
        labels: colorSpace.split(''),
        cols: []
      };
      combinationFunctionNames.map(function(fnName) {
        const color = colorify.combineColors(
          color1,
          color2,
          colorSpace,
          flags,
          fnName
        );
        row.cols.push({
          fnName: fnName,
          hex: color.hex()
        });
      });
      data[colorSpace].push(row);
    });
  });
  return data;
});
