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

    <form data-id="${bike._id}">
    <input type="text" name="brandName" value="${bike.brandName}">
    <input type="text" name="modelName" value="${bike.modelName}">
    <input type="text" name="style" value="${bike.style}">
    <input type="number" name="size" value="${bike.size}">
    <input type="submit" value="Update Bike">
  </form>

  <button data-id="${bike._id}">DELETE BIKE</button>
    `
	showBikeContainer.appendChild(div)
}

export const onUpdateBikeSuccess = () => {
	messageContainer.innerText = 'Successful Update!'
}

export const onDeleteBikeSuccess = () => {
	messageContainer.innerText = 'DELETED!!!'
}
