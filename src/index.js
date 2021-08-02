const express = require('express')
const path = require('path')
const app = express()

//Settings
app.set('title', 'Pokedex 1.0')
app.set('port', 80)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

//Rutas
app.get('/', (req, res) => {
    res.render('index')
})

//Ejecucion
app.listen(app.get('port'), () => {
    console.log(`Mi ${app.get('title')} esta corriendo en el puerto ${app.get('port')}`)
})