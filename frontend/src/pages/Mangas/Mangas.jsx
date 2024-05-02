import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/bookService";
import Book from "../../components/Book/Book";
import "./Mangas.css"

const Mangas = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {

    const getLibros = async () => {
      const books = await getAllBooks();
      
      let books_ = []

      for (let i = 0; i < books.data.length; i++) {

        if(books.data[i].genres.includes("Manga")){
          books_.push(books.data[i])
        }
      }
      setLibros(books_);
    }
    getLibros();
  }, []);

  const getFilteredBooks = async () => {
    const allBooks = await getAllBooks();

    const books = allBooks.data.filter(book => {
      if(book.genres.includes("Manga")){
        return book
      }
    })

    let filteredBooks = books.filter((book) => {
      return book.name.toLowerCase().includes(document.getElementById("search").value.toLowerCase())
    })

    const filteredBooksByGenre = filteredBooks.filter((book) => {
      if (document.getElementById("genre").value === "All") {
        return book
      }
      if(book.genres.includes(document.getElementById("genre").value)){
        return book
      }
       
      
    })

    setLibros(filteredBooksByGenre);
  }


  return (
    <div id="mangas">
      <h1>Mangas</h1>
      
      <div><input type="text" id="search" placeholder="Search..."></input>
      
      <select name="genre" id="genre">
        <option value="All">Select genre</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Aventura">Aventura</option>
        <option value="Acción">Acción</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Superhéroes">Superhéroes</option>
        <option value="Terror">Terror</option>
        <option value="Música">Música</option>
        <option value="Psicológico">Psicológico</option>
        <option value="Misterio">Misterio</option>
        <option value="Comedia Romántica">Comedia Romántica</option>
        <option value="Comedia">Comedia</option>

      </select>
      
      <button id="search-button" onClick={() => {
        getFilteredBooks()
      }} style={{marginLeft: "10px"}}>Search</button></div>
      
      <div id="books" style={{marginTop: "50px"}}>
        {libros ? libros.map((libro) => (<Book book={libro} key={libro.id}/>)) : "Loading..."}
      </div>
      
    </div>
  )

}

export default Mangas
