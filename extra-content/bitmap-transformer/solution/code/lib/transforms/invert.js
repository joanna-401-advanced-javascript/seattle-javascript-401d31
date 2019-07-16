'use strict';

module.exports = (bmp) => {

  if( ! bmp.colorArray.length ) throw 'must pass valid bmp object';

  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = Math.abs(255 - bmp.colorArray[i]);
    bmp.colorArray[i + 1] = Math.abs(255 - bmp.colorArray[i + 1]);
    bmp.colorArray[i + 2] = Math.abs(255 - bmp.colorArray[i + 2]);
  }

};