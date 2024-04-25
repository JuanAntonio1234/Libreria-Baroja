import "./PersonalLibrary.css"
import { useState, useEffect } from "react"
import { getAllUserBooks } from "../../services/userBookService"


const PersonalLibrary = () => {

  const [libros, setLibros] = useState([]);

  useEffect(() => {

    const getLibros = async () => {
      const books = await getAllUserBooks("31");
      console.log(books)
      setLibros(books.data);
    }
    getLibros();
  }, [])


  return (
    <div id="personal-library">
      <h1 id="h1title">Soy tu librería</h1>

      {libros ? libros.map((libro, idx) => {
        return <div key={idx}>{libro.status}</div>
      }) : "loading..."}
    </div>
  )
}

export default PersonalLibrary
