/*eslint prefer-template: 0*/
// config
const numSlices = 360;
const diameter = 290;
const radius = diameter / 2;
const usePhantom = false;

// libs
const fs = require('fs');
const phantom = require('phantom');

const getArcPath = function (startX, startY, startAngle, endAngle, radius) {
  const start = (Math.PI * startAngle) / 180;
  const end = (Math.PI * endAngle) / 180;
  const x1 = startX + radius * Math.cos(start);
  const y1 = startY + radius * Math.sin(start);
  const x2 = startX + radius * Math.cos(end);
  const y2 = startY + radius * Math.sin(end);
  return (
    'M' +
    startX +
    ' ' +
    startY +
    ' L' +
    x1 +
    ' ' +
    y1 +
    ' A' +
    radius +
    ' ' +
    radius +
    ' 0 0 1 ' +
    x2 +
    ' ' +
    y2 +
    ' z'
  );
};

const buildGradients = function (saturation) {
  let ret = '';
  for (let i = 0; i < numSlices; i++) {
    ret += '\n<radialGradient ';
    ret += 'id="gradient' + i + '"';
    ret += ' cx="50%" cy="50%" r="50%" fx="50%" fy="50%">';
    ret +=
      '\n<stop offset="0%" stop-color="hsl(' +
      i +
      ', ' +
      saturation +
      '%, 100%)"></stop>';
    ret +=
      '\n<stop offset="50%" stop-color="hsl(' +
      i +
      ', ' +
      saturation +
      '%, 50%)"></stop>';
    ret +=
      '\n<stop offset="100%" stop-color="hsl(' +
      i +
      ', ' +
      saturation +
      '%, 0%)"></stop>';
    ret += '\n</radialGradient>';
  }
  return ret;
};

const buildClipPaths = function (r) {
  let ret = '';
  for (let i = 0; i < numSlices; i++) {
    ret += '\n<clipPath id="clip' + i + '">';
    ret += '\n<path d="' + getArcPath(r, r, i, i + 2, r) + '" />';
    ret += '\n</clipPath>';
  }
  return ret;
};

const buildSlices = function (r) {
  let ret = '';
  for (let i = 0; i < numSlices; i++) {
    ret += '\n<circle cx="' + r + '" cy="' + r + '" r="' + r + '"';
    ret += ' fill="url(#gradient' + i + ')" clip-path="url(#clip' + i + ')" />';
  }
  return ret;
};

const buildSvg = function (saturation) {
  let ret = '';
  ret += '<svg width="' + diameter + 'px" height="' + diameter + 'px"';
  ret +=
    ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
  ret += '\n<defs>' + buildGradients(saturation) + '</defs>';
  ret += buildClipPaths(radius);
  ret += buildSlices(radius);
  ret += '</svg>';
  return ret;
};

const renderWheel = function (wheelNum) {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open('./app/svg/wheels/' + wheelNum + '.svg', function () {
        page.set('clipRect', {
          top: 0,
          left: 0,
          height: diameter,
          width: diameter,
        });
        page.render('./app/img/wheels/' + wheelNum + '.png');
        ph.exit();
      });
    });
  });
};

// build our color wheels
for (let i = 0; i < 100; i++) {
  const svg = buildSvg(i);
  fs.writeFileSync('./app/svg/wheels/' + i + '.svg', svg);
  if (usePhantom) {
    renderWheel(i);
  }
}
