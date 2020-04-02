import axios from 'axios'
const baseUrl = `http://localhost:3001/persons`

const getResponseData = (request) => {
    return request.then(response => response.data)
}

const getAll = () => {
    return getResponseData(axios.get(baseUrl))
}

const create = (newPerson) => {
    return getResponseData(axios.post(baseUrl, newPerson))
}

const update = (id, newPerson) => {
    return getResponseData(axios.put(`${baseUrl}/${id}`, newPerson))
}

export default {getAll, create, update}