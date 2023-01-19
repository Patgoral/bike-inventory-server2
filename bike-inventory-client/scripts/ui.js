const indexBikeContainer = document.querySelector('#index-bike-container')
const messageContainer = document.querySelector('#message-container')
const showBikeContainer = document.querySelector('#show-bike-container')

export const onIndexBikeSuccess = (bikes) => {
	bikes.forEach((bike) => {
		const div = document.createElement('div')
		div.innerHTML = `
        <h3>${bike.brandName} ${bike.modelName}</h3>
        <button data-id="${bike._id}" >Show Bike</button>
        `
		indexBikeContainer.appendChild(div)
	})
}

export const onFailure = (error) => {
	messageContainer.innerHTML = `
    <h3>You've got an error! </h3>
    <p>${error}</p>
    `
	console.log(error)
}

export const onCreateBikeSuccess = () => {
	messageContainer.innerText = 'You have created a new bike!'
}

export const onShowBikeSuccess = (bike) => {
	const div = document.createElement('div')
	div.innerHTML = `
    <h3>${bike.brandName} ${bike.modelName}
    </h3>
    <p>${bike.style}</p>
    <p>${bike.size}</p>
    <p>${bike._id}</p>
    `
	showBikeContainer.appendChild(div)
}
