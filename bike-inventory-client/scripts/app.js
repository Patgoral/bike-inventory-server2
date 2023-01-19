import { indexBikes, createBike, showBike, updateBike, deleteBike } from './api.js'
import {
	onIndexBikeSuccess,
	onFailure,
	onCreateBikeSuccess,
	onShowBikeSuccess,
	onUpdateBikeSuccess,
    onDeleteBikeSuccess
} from './ui.js'

const createBikeForm = document.querySelector('#create-bike-form')
const indexBikeContainer = document.querySelector('#index-bike-container')

const showBikeContainer = document.querySelector('#show-bike-container')

indexBikes()
	.then((res) => res.json())
	.then((res) => {
		console.log(res)
		onIndexBikeSuccess(res.bikes)
	})
	.catch(onFailure)

createBikeForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const bikeData = {
		bike: {
			brandName: event.target['brandName'].value,
			modelName: event.target['modelName'].value,
			style: event.target['style'].value,
			size: event.target['size'].value,
		},
	}
	createBike(bikeData).then(onCreateBikeSuccess).catch(onFailure)
})

indexBikeContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	showBike(id)
		.then((res) => res.json())
		.then((res) => {
			onShowBikeSuccess(res.bike)
		})
		.catch(onFailure)
})

showBikeContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const bikeData = {
		bike: {
			brandName: event.target['brandName'].value,
			modelName: event.target['modelName'].value,
			style: event.target['style'].value,
			size: event.target['size'].value,
		},
	}
	updateBike(bikeData, id).then(onUpdateBikeSuccess).catch(onFailure)
})

showBikeContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    deleteBike(id)
    .then(onDeleteBikeSuccess)
    .catch(onFailure)
})