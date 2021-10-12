export function round(number) {
  return Math.round(number * 10000) / 10000;
}

export function calculateAPR(starterTokens, finalTokens, startDate, finalDate) {
  // calculate elapsed time in minutes

  startDate = new Date(startDate);
  startDate = startDate.getTime();
  finalDate = new Date(finalDate);
  finalDate = finalDate.getTime();
  let elapsedMinutes = (finalDate - startDate) / 60000;
  elapsedMinutes = Math.round(elapsedMinutes);

  // calculate revenue

  let revenue = (finalTokens * 100) / starterTokens - 100;

  // calcuale apr

  let result = (525600 * revenue) / elapsedMinutes;
  result = Math.round(result * 100) / 100;

  // validate result

  if (result === Infinity || result === -Infinity) {
    result = 0;
  } else if (isNaN(result)) {
    result = 0;
  }

  return result;
}

//////////////////////////////

export function calculateFutureTokens(starterTokens, startDate, finalDate, apr) {
  // calculate elapsed time in minutes

  startDate = new Date(startDate);
  startDate = startDate.getTime();
  finalDate = new Date(finalDate);
  finalDate = finalDate.getTime();
  let elapsedMinutes = (finalDate - startDate) / 60000;
  elapsedMinutes = Math.round(elapsedMinutes);

  // calculate actual apr

  let actualApr = (apr * elapsedMinutes) / 525600;
  actualApr = actualApr / 100;

  //calculate profit

  let profit = starterTokens * actualApr;

  // calcuale final tokens

  let result = parseFloat(starterTokens) + profit;
  result = Math.round(result * 100) / 100;

  // validate result

  if (result === Infinity || result === -Infinity) {
    result = 0;
  } else if (isNaN(result)) {
    result = 0;
  }

  return result;
}

/////////////////////////////

export function calculateTime(starterTokens, finalTokens, apr) {
  // calculate time
  let anualRevenue = starterTokens * (apr / 100);
  let days = (finalTokens * 365) / anualRevenue;
  days = Math.round(days * 100) / 100;

  // validate result
  if (days === Infinity || days === -Infinity) {
    days = 0;
  } else if (isNaN(days)) {
    days = 0;
  }

  return days;
}

export function calculateNecessaryTokens(finalTokens, apr, necessaryTime) {
  let necessaryTokens = (100 / ((apr / 365) * necessaryTime)) * finalTokens;

  // validate result
  if (necessaryTokens === Infinity || necessaryTokens === -Infinity) {
    necessaryTokens = 0;
  } else if (isNaN(necessaryTokens)) {
    necessaryTokens = 0;
  }

  return necessaryTokens;
}
