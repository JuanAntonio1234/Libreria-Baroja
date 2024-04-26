import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/bookService";
import Book from "../../components/Book/Book";
import "./Home.css";

const Home= () => {
  
  const [libros, setLibros] = useState([]);

  useEffect(() => {

    const getLibros = async () => {
      const books = await getAllBooks();
      setLibros(books.data);
    }
    getLibros();
  }, []);

  return <div id="home">

      <h1>COLECCIONES</h1>

      {/* <div className="row-display">
        <h1 id="popular-books-title">Libros más populares</h1>
        <div id="book-display">
          {libros ? <Book book={libros[0]}/> : "Loading..."}
          {libros ? <Book book={libros[1]}/> : "Loading..."}
          {libros ? <Book book={libros[7]}/> : "Loading..."}
          {libros ? <Book book={libros[3]}/> : "Loading..."}
          {libros ? <Book book={libros[4]}/> : "Loading..."}
          {libros ? <Book book={libros[5]}/> : "Loading..."}
          {libros ? <Book book={libros[11]}/> : "Loading..."}
          {libros ? <Book book={libros[38]}/> : "Loading..."}
          {libros ? <Book book={libros[27]}/> : "Loading..."}
          {libros ? <Book book={libros[23]}/> : "Loading..."}
        </div>
      </div>

      <div className="row-display">
        <h1 id="popular-books-title">Libros más vendidos</h1>
        <div id="book-display">
          {libros ? <Book book={libros[20]}/> : "Loading..."}
          {libros ? <Book book={libros[31]}/> : "Loading..."}
          {libros ? <Book book={libros[17]}/> : "Loading..."}
          {libros ? <Book book={libros[33]}/> : "Loading..."}
          {libros ? <Book book={libros[24]}/> : "Loading..."}
          {libros ? <Book book={libros[15]}/> : "Loading..."}
          {libros ? <Book book={libros[8]}/> : "Loading..."}
          {libros ? <Book book={libros[32]}/> : "Loading..."}

        </div>
      </div> */}


      <div id="categories">
        <div className="category" id="category-1" onClick={() => window.location.href = "/library"}><p className="category-text">LIBROS</p></div>
        <div className="category" id="category-2" onClick={() => window.location.href = "/comics"}> <p className="category-text">COMICS</p></div>
        <div className="category" id="category-3" onClick={() => window.location.href = "/mangas"}> <p className="category-text">MANGAS</p></div>
      </div>
        


    </div>;

};

export default Home;
