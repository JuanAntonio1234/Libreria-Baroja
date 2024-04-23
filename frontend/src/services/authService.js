import api from './config'

export const login = async (data) => {
    try{
        localStorage.clear()
        const response = await api.post('/auth/login', data)

        if(response.data.message){
            alert(response.data.message)
        }

        else{
            localStorage.setItem('token', response.data.token)
            alert("You have logged in successfully")
            window.location = '/home'
        }
        return response
    }
    catch (err) {
        console.log(err)
    }
}

export const signUp = async (data) => {
    try{
        const response = await api.post('/auth/signUp', data)

        if(response.data.message){
            //usuario ya existe
            alert(response.data.message)
        }
        else{
            //usuario no existe.
            alert("User has been created successfully")
            window.location = '/'
        }

        return response
    }
    catch (err) {
        console.log(err)
    }
}