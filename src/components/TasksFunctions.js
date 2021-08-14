export function calculateAPR(starterTokens, finalTokens, startDate, finalDate) {
	// calculate elapsed time in minutes

	startDate = new Date(startDate)
	startDate = startDate.getTime()
	finalDate = new Date(finalDate)
	finalDate = finalDate.getTime()
	let elapsedMinutes = (finalDate - startDate) / 60000
	elapsedMinutes = Math.round(elapsedMinutes)

	// calculate revenue

	let revenue = (finalTokens.amount * 100) / starterTokens.amount - 100

	// calcuale apr

	let result = (525600 * revenue) / elapsedMinutes
	result = Math.round(result * 100) / 100

	// validate result

	if (result === Infinity || result === -Infinity) {
		result = 0
	} else if (isNaN(result)) {
		result = 0
	}

	return result
}

//////////////////////////////

export function calculateFutureTokens(
	starterTokens,
	startDate,
	finalDate,
	apr,
) {
	// calculate elapsed time in minutes
	//console.log(starterTokens)
	//console.log(startDate)
	//console.log(finalDate)
	//console.log(apr)

	startDate = new Date(startDate)
	startDate = startDate.getTime()
	finalDate = new Date(finalDate)
	finalDate = finalDate.getTime()
	let elapsedMinutes = (finalDate - startDate) / 60000
	elapsedMinutes = Math.round(elapsedMinutes)

	// calculate actual apr

	let actualApr = (apr * elapsedMinutes) / 525600
	actualApr = actualApr / 100

	//calculate profit

	let profit = starterTokens.amount * actualApr
	profit = Math.round(profit * 100) / 100

	//console.log(profit)

	// calcuale final tokens

	let result = parseInt(starterTokens.amount) + parseInt(profit)

	// validate result

	if (result === Infinity || result === -Infinity) {
		result = 0
	} else if (isNaN(result)) {
		result = 0
	}

	return result
}

/////////////////////////////

export function calculateTime(starterTokens, finalTokens, apr) {
	console.log(starterTokens)
	console.log(finalTokens)
	console.log(apr)

	// calculate time
	let anualRevenue = starterTokens * (apr / 100)
	console.log(anualRevenue)
	let days = (finalTokens * 365) / anualRevenue
	console.log(days)
	days = Math.round(days * 100) / 100

	// validate result

	return days
}
