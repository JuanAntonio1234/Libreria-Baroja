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

      <h1 id="h1title">HOME</h1>

      <div>
        <h1>Libros más populares</h1>
        <div>
          {libros ? <Book book={libros[0]}/> : "Loading..."}
          
        </div>
      </div>

    </div>;

};

export default Home;
