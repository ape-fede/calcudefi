export function calculateAPR(starterTokens, finalTokens, startDate, finalDate) {
	console.clear()
	console.log('aca toy aca toy aca toy')
	console.log(`starterTokens: ${starterTokens.amount}`)
	console.log(`finalTokens: ${finalTokens.amount}`)
	console.log(`startDate: ${startDate}`)
	console.log(`finalDate: ${finalDate}`)

	// Cálculo tiempo transcurrido

	startDate = new Date(startDate)
	startDate = startDate.getTime()
	console.log(startDate)
	finalDate = new Date(finalDate)
	finalDate = finalDate.getTime()
	console.log(finalDate)
	let elapsedMinutes = (finalDate - startDate) / 60000
	elapsedMinutes = Math.round(elapsedMinutes)
	console.log(elapsedMinutes)

	// Cálculo rendimiento

	let revenue = (finalTokens.amount * 100) / starterTokens.amount - 100
	console.log(revenue)

	// Resultado

	let result = (525600 * revenue) / elapsedMinutes
	result = Math.round(result * 100) / 100
	console.log(`${result}%`)
	return result
}
