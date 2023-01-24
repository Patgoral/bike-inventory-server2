const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const db = require('./config/db')

const PORT = 8000

const bikeRoutes = require('./routes/bike-routes')
const userRoutes = require('./routes/user-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5503` }))

app.use(express.json())

app.use(bikeRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})

module.exports = app
