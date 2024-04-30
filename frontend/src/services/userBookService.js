import api from './config'

export const getAllUserBooks = async (token) => {
    const response = await api.get(`/user-book/user`, {
        headers: {
            "authorization": `${token}`
        }
    })
    return response
}

export const addBookToUserLibrary = async (data, token) => {
    const response = await api.post('/user-book', data, {
        headers: {
            "authorization": `${token}`
        }
    })
    return response
}

export const deleteBookFromUserLibrary = async (id) => {
    return await api.delete(`/user-book/${id}`)
}