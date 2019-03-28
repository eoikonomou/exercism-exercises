const { colorCode } = require('../resistor-color/resistor-color')

export const value = (colorArray) => {
  return Number(colorArray.reduce((sum, color) => sum + colorCode(color), ''));
}
