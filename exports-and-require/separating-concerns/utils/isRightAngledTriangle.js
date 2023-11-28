const mathFunctions = require('./mathFunctions.js');

function isRightAngledTriangle(sideA, sideB, sideC) {
  const sideASquared = mathFunctions.squareNumber(sideA);
  const sideBSquared = mathFunctions.squareNumber(sideB);
  const sideCSquared = mathFunctions.squareNumber(sideC);

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
