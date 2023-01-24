const express = require('express')

const Bike = require('../models/bike')


const router = express.Router()
const { requireToken } = require('../config/auth')

// SHOW
router.get('/bikes', requireToken, (req, res, next) => {
	Bike.find()
		.then((bikes) => {
			return bikes.map((bike) => bike)
		})
		.then((bikes) => {
			res.status(200).json({ bikes: bikes })
		})
		.catch(next)
})

// INDEX
router.get('/bikes/:id', requireToken, (req, res, next) => {
	Bike.findById(req.params.id)
		.then((bike) => res.status(200).json({ bike: bike }))
		.catch(next)
})

// CREATE
router.post('/bikes', requireToken, (req, res, next) => {
	Bike.create(req.body.bike)
		.then((bike) => {
			res.status(201).json({ bike: bike })
		})
		.catch(next)
})

// UPDATE
router.patch('/bikes/:id', requireToken, (req, res, next) => {
	Bike.findById(req.params.id)
		.then((bike) => {
			return bike.updateOne(req.body.bike)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

//  DELETE
router.delete('/bikes/:id', requireToken, (req, res, next) => {
	Bike.findById(req.params.id)
		.then((bike) => {
			return bike.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router
