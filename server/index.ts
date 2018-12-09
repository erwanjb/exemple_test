import * as express from 'express'
import * as bodyParser from 'body-parser'
const app = express() 

const port = 4444

app.use(bodyParser.json())

app.use('/', express.static('client'))

import { accueil } from "./accueil"
accueil(app)

app.listen(port)