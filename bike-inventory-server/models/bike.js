const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bikeSchema = new Schema(
	{
		brandName: {
			type: String,
			required: true,
		},
		modelName: {
			type: String,
			required: true,
		},
		style: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			required: true,
			min: 46,
			max: 64,
		},
	},
	{
		timestamps: true,
	}
)

const Bike = mongoose.model('Bike', bikeSchema)

module.exports = Bike
