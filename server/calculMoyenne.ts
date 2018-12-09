export function calculMoyenne(nbr: number[]): number {

	let accumulator: number = 0

	nbr.forEach(n => {
		if (typeof n !== "number") {
			throw new Error("un ou plusieurs éléments ne sont pas des nombres") // cas impossible normalement
		}
		return accumulator += n
	})

	return accumulator / nbr.length
}