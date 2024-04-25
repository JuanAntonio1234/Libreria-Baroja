import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/bookService";
import Book from "../../components/Book/Book";
import "./Library.css"

const Library = () => {

  const [libros, setLibros] = useState([]);

  useEffect(() => {

    const getLibros = async () => {
      const books = await getAllBooks();
      setLibros(books.data);
    }
    getLibros();
  }, []);

  const getFilteredBooks = async () => {
    const books = await getAllBooks();

    let filteredBooks = books.data.filter((book) => {
      return book.name.toLowerCase().includes(document.getElementById("search").value.toLowerCase())
    })

    const filteredBooksByGenre = filteredBooks.filter((book) => {
      if (document.getElementById("genre").value === "All") {
        return book
      }
      return book.genres.includes(document.getElementById("genre").value)
      
    })

    setLibros(filteredBooksByGenre);
  }


  return (
    <div id="library">
      <h1>Library</h1>
      
      <input type="text" id="search" placeholder="Search..."></input>
      
      <select name="genre" id="genre">
        <option value="All">Select genre</option>
        <option value="Drama">Drama</option>
        <option value="Acción">Acción</option>
        <option value="Romance">Romance</option>
        <option value="Aventura">Aventura</option>
        <option value="Comedia">Comedia</option>
        <option value="Terror">Terror</option>
        <option value="Novela">Novela</option>
      </select>
      
      <button id="search-button" onClick={() => {
        getFilteredBooks()
      }}>Search</button>
      <div id="books">
        {libros ? libros.map((libro) => (<Book book={libro} key={libro.id}/>)) : "Loading..."}
      </div>
      
    </div>
  )
}

export default Library
