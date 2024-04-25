import api from './config'

export const getAllBooks = () => {
    return api.get('/book')
}

export const getBookById = (id) => {
    return api.get(`/book/${id}`)
}
