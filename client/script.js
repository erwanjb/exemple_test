const submitNumber = document.getElementById("submitNumber")
const submitText = document.getElementById("submitText")

submitNumber.addEventListener('click', (e) => {

	e.preventDefault()
	const nbr = {}
	nbr.nbr1 = document.getElementById("nbr1").value
	nbr.nbr2 = document.getElementById("nbr2").value
	nbr.nbr3 = document.getElementById("nbr3").value
	nbr.nbr4 = document.getElementById("nbr4").value
	const nbrTotal = []
	const resultat = document.getElementById("resultatNumber")

	if (nbr.nbr1 === '' && nbr.nbr2 === '' && nbr.nbr3 === '' && nbr.nbr4 === '') {

		resultat.innerHTML = 'veuiller remplir au moins un champ pour le calcul de la moyenne'

	} else {

		for (let i = 1; i <= 4; i++) {
			if (nbr["nbr" + i] != "") {
				nbrTotal.push(nbr["nbr" + i])
			}
		}

		axios({
			method: "post",
			url: "http://localhost:4444/accueil/moyenne",
			data: nbrTotal
		}).then(res => {
			resultat.innerHTML = res.data
		})
	}
})

submitText.addEventListener('click', (e) => {

	e.preventDefault()
	const text = document.getElementById('text').value
	const old = document.getElementById('old').value
	const newExpression = document.getElementById('new').value
	const resultat = document.getElementById('resultatText')

	if (text === '' || old === '') {

		resultat.innerHTML = "veuillez au moins remplir la zone de texte et l'expression à remplacer"

	} else {

		axios({
			method: "post",
			url: 'http://localhost:4444/accueil/remplace',
			data: {
				text, // équivaut à text: text
				old, // équivaut à old: old
				newExpression // équivaut à newExpression: newExpression
			}
		}).then(res => {
			resultat.innerHTML = res.data
		})
	}
})