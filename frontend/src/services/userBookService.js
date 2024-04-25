import api from './config'

export const getAllUserBooks = (idUser) => {
    return api.get(`user-book/${idUser}`)
}

export const addBookToUserLibrary = (data) => {
    return api.post('/user-book', data, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
}