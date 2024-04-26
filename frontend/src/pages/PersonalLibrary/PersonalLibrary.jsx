import "./PersonalLibrary.css"
import { useState, useEffect } from "react"
import { getAllUserBooks } from "../../services/userBookService"
import Book from "../../components/Book/Book"
import { getBookById } from "../../services/bookService"

const PersonalLibrary = () => {

  const [librosTablaIntermedia, setLibrosTablaIntermedia] = useState([]);
  const [libros, setLibros] = useState([])

  let libros_ = []

  const getlibrosTablaIntermedia = async () => {
    try {
      const token = localStorage.getItem("token")
      const books = await getAllUserBooks(token);
      if(librosTablaIntermedia.length === 0){
        setLibrosTablaIntermedia(books.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getLibros = async () => {
    for (let i = 0; i < librosTablaIntermedia.length; i++) {
      const book = await getBookById(librosTablaIntermedia[i].bookId)
      libros_.push(book.data)
    }
    setLibros(libros_)
  }

  const getlibros = async () => {
    await getlibrosTablaIntermedia();
    await getLibros();
  }

  useEffect(() => {
      getlibros();
  }, [librosTablaIntermedia])


  return (
    <div id="personal-library">
      <h1 id="h1title">Soy tu librería</h1>

      {libros ? libros.map((libro, idx) => {
        return <Book book={libro} key={idx}/>
      }) : "loading..."}
    </div>
  )
}

export default PersonalLibrary
