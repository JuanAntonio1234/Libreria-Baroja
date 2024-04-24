import api from './config'

export const getAllBooks = () => {
    return api.get('/book')
}

