//user input
var seniority = prompt("Insert seniority (year):");
var ot = prompt("Insert overtime hour:");

const ot_multiplier1 = 2;
const ot_multiplier2 = 2.1;
const ot_multiplier3 = 3;

const senior_multiplier1 = 1;
const senior_multiplier2 = 1.1;
const senior_multiplier3 = 1.2;
const senior_multiplier4 = 1.7;

//function to calculate 1st hour
function first_hour(firstTier, seniorMultiplier, otMultiplier) {
  var first_hour = firstTier * seniorMultiplier * ot_multiplier1 * 20;
  return first_hour;
}

//function to calculate 2nd hour
function second_hour(secondTier, seniorMultiplier, otMultiplier) {
  var second_hour = secondTier * seniorMultiplier * ot_multiplier2 * 20;
  return second_hour;
}

//function to calcute 3rd or more hour
function third_hour(thirdTier, seniorMultiplier, otMultiplier) {
  var third_hour = thirdTier * seniorMultiplier * ot_multiplier3 * 20;
  return third_hour;
}

//function to send relevant data when OT input is filtered
function filterOT(ot) {
  var firstValue = 0;
  var secondValue = 0;
  var thirdValue = 0;
  var values;

  if (ot >= 4) {
    firstValue = 1;
    secondValue = 3;
    thirdValue = ot - 4;
  } else if (ot >= 2 && ot < 4) {
    firstValue = 1;
    secondValue = ot - 1;
    thirdValue = 0;
  } else if (ot > 0 && ot < 2) {
    firstValue = ot;
    secondValue = 0;
    thridValue = 0;
  }
  values = {
    firstValue: firstValue,
    secondValue: secondValue,
    thirdValue: thirdValue,
  };
  return values;
}

//function to send relevant data when seniority input is filtered
function filterSeniority(seniority) {
  var senior = 0;

  if (seniority >= 6) {
    senior = senior_multiplier4;
  } else if (seniority >= 4 && seniority < 6) {
    senior = senior_multiplier3;
  } else if (seniority >= 2 && seniority < 4) {
    senior = senior_multiplier2;
  } else if (seniority > 0 && seniority < 2) {
    senior = senior_multiplier1;
  }
  return senior;
}

//function to calculate total overtime wages
function totalOTwages(otTime, yearsWorked) {
  var value = filterOT(otTime);
  var seniority = filterSeniority(yearsWorked);

  var totalOTwage =
    first_hour(value.firstValue, seniority, ot) +
    second_hour(value.secondValue, seniority, ot) +
    third_hour(value.thirdValue, seniority, ot);

  return totalOTwage;
}

console.log(
  "Total overtime wages for the day is " + totalOTwages(ot, seniority)
);
