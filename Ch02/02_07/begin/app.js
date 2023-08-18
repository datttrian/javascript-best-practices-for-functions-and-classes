"use strict";

const values = [16, 7, 55];
const projection = (array) => {
  let outcome;
  const max = array.reduce((a, b) => Math.max(a, b));
  if (max < 10) {
    outcome = "Poor";
  } else if (max < 100) {
    outcome = "Fair";
  } else {
    outcome = "Good";
  }
  return outcome;
};

console.log(projection(values));
