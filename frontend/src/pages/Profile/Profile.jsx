import "./Profile.css"
import { useEffect, useState } from "react"
import { validateUser } from "../../services/userService"

const Profile = () => {

    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            setUser(await validateUser(token));
        };
    
        getUser();
    }, []);
    

    return (
        <div id="profile">
          {user && user.data ? 
          <>
            <h1>Name: {user.data.name}</h1>
            <p>Email: {user.data.email}</p>
            <p>Rol: {user.data.rol}</p>
          </>
          
            
           : <h1>Inicia sesión</h1>}
        </div>
      );
      
}

export default Profile
