const ftoc = function(fTemp) {
  const formula = ((fTemp-32)*(5/9));
  const roundedConversion = Math.round(formula * 10) / 10;
  return roundedConversion;
};

const ctof = function(cTemp) {
  const formula = (((9/5)*cTemp)+32);
  const roundedConversion = Math.round(formula * 10) / 10;
  return roundedConversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
