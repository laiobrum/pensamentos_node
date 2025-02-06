import express, { urlencoded } from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home')
})

conn.sync()
    .then((result) => {
        app.listen(3000, ()=>console.log('App listening on port 3000'))
    }).catch((err) => {
        console.log(err)
    })