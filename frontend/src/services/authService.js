import api from './config'

export const login = async (data) => {
    try{
        const response = await api.post('/login', data)

        return response
    }
    catch (err) {
        console.log(err)
    }
}

export const signUp = async (data) => {
    console.log(data)
    try{
        const response = await api.post('/auth/signUp', data)
        const response2 = await api.post('/user', data)


        return response
    }
    catch (err) {
        console.log(err)
    }
}
