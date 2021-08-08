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
