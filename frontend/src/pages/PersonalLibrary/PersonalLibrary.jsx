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
      <h1>Mi biblioteca</h1>
      <div><input type="text" id="search" placeholder="Search..."></input>
      <button id="search-button" onClick={() => {
        getFilteredBooks()
      }}>Search</button></div>
      <div id="book-display">
      {libros ? libros.map((libro, idx) => {
        return <div className="book-info"><Book book={libro}/> <h2>{libro.name}</h2> <p className="textAttribute">{librosTablaIntermedia[idx].status}</p> <p className="textAttribute">{librosTablaIntermedia[idx].createdAt.substr(0, 10)}</p></div>
      }) : "loading..."}
      </div>
    </div>
  )
}

export default PersonalLibrary
