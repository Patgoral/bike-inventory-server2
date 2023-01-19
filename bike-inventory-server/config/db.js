const bikeInventoryTracker = 'bike-inventory-tracker'

const database = {
	development: `mongodb://localhost/${bikeInventoryTracker}-development`,
	test: `mongodb://localhost/${bikeInventoryTracker}-test`,
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
