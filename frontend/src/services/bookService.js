import api from './config'

export const getAllBooks = async () => {
    return await api.get('/book')
}

export const getBookById = async (id) => {
    return  await api.get(`/book/${id}`)
}
