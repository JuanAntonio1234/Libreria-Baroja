import api from './config'

export const getAllUserBooks = (token) => {
    return api.get(`/user-book/user`, {
        headers: {
            "authorization": `${token}`
        }
    })
}

export const addBookToUserLibrary = (data, token) => {
    return api.post('/user-book', data, {
        headers: {
            "authorization": `${token}`
        }
    })
}