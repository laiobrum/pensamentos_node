/*FIZ O PROJETO COM TUDO QUE EU SABIA. FALTA DESCOBRIR NA AULA:
1. Página inicial:
    Colocar o user dono no pensamento;
    Conseguir fazer a busca
    Conseguir fazer as ordenações
2. Entrar/Pensamentos:
    Conseguir ficar logado, para puxar o user que está logado, quando cria o pensamento */

import express, { urlencoded } from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'
import thoughtRoutes from './routes/thoughtRoutes.js'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.use('/', thoughtRoutes)

conn.sync()
    .then((result) => {
        app.listen(3000, ()=>console.log('App listening on port 3000'))
    }).catch((err) => {
        console.log(err)
    })

