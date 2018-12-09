import { calculMoyenne } from './calculMoyenne'
import { remplaceTexte, Obj } from './remplaceTexte'
export function accueil(app) {

	app.post("/accueil/moyenne", (req, res) => {

		const data: string[] = req.body

		const nbr: number[] = data.map(d => +d /* équivaut à mettre Number(d)*/)

		const moyenne = calculMoyenne(nbr)

		res.send('' + moyenne)
	})

	app.post("/accueil/remplace", (req, res) => {

		const obj: Obj = req.body
		const newText = remplaceTexte(obj)

		res.send(newText)
	})
} 
