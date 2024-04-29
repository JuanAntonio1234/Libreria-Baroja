import api from './config'

export const updateUser = (token) => {
    return api.put('/user/update', null, {
        headers: {
            "authorization": `${token}`
          },
    })
}

export const validateUser = (token) => {
    return api.get('/user/user', {
        headers: {
            "authorization": `${token}`
        }
    })
}