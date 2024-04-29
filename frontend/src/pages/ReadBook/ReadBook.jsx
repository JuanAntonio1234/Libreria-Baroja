import "./ReadBook.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { validateUser } from "../../services/userService"

const ReadBook = () => {

    const { id } = useParams()
    const token = localStorage.getItem("token")

    useEffect(() => {

        const getUser = async () => {
            const user = await validateUser(token)
            console.log(user.data.rol)
            if(user.data.rol === "user"){
                alert("Debes suscribirte para acceder a esta sección.")
                window.location.href = "/home"
            }

        }

        getUser();

        
    }, [])

  return (
    <div>
      <h1>Soy el libro con ID { id }</h1>
    </div>
  )
}

export default ReadBook
