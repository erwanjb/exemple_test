const submitNumber = document.getElementById("submitNumber")
const submitText = document.getElementById("submitText")
const submitSalaire = document.getElementById("submitSalaire")

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

submitSalaire.addEventListener('click', (e) => {
	e.preventDefault()
	const salaire1 = {
		nom: document.getElementById('nom1').value,
		brut: document.getElementById('salaire1').value,
		taux: document.getElementById('taux1').value
	}
	const salaire2 = {
		nom: document.getElementById('nom2').value,
		brut: document.getElementById('salaire2').value,
		taux: document.getElementById('taux2').value
	}
	const salaire3 = {
		nom: document.getElementById('nom3').value,
		brut: document.getElementById('salaire3').value,
		taux: document.getElementById('taux3').value
	}
	const resultat = document.getElementById('resultatSalaire')

	if (!salaire1.nom || !salaire2.nom || !salaire3.nom || !salaire1.brut || !salaire2.brut || !salaire3.brut || !salaire1.taux || !salaire2.taux || !salaire3.taux) {

		resultat.innerHTML = 'veuiller remplir tous les champs'

	} else {

		axios({
			method: "post",
			url: 'http://localhost:4444/accueil/salaire',
			data: [salaire1, salaire2, salaire3]
		}).then(res => {
			resultat.innerHTML = res.data
		})
	}
})