export const indexBikes = () => {
	return fetch(`http://localhost:8000/bikes`)
}

export const createBike = (data) => {
	return fetch(`http://localhost:8000/bikes`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const showBike = (id) => {
	return fetch(`http://localhost:8000/bikes/${id}`)
}

export const updateBike = (data, id) => {
    return fetch(`http://localhost:8000/bikes/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const deleteBike = (id) => {
    return fetch(`http://localhost:8000/bikes/${id}`, {
        method: 'DELETE'
    })
}
