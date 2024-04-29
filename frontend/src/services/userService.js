import api from './config'

export const updateUser = (token) => {
    return api.put('/user/update', null, {
        headers: {
            "authorization": `${token}`
          },
    })
}
