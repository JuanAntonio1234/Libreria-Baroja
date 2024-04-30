import "./PersonalLibrary.css";
import { useState, useEffect } from "react";
import { getAllUserBooks } from "../../services/userBookService";
import Book from "../../components/Book/Book";
import { getBookById } from "../../services/bookService";
import { deleteBookFromUserLibrary } from "../../services/userBookService";

const PersonalLibrary = () => {
  let librosTablaIntermedia = []
  const [libros, setLibros] = useState([]);
  const [hasbeenset , setHasbeenset] = useState(true);

  let libros_ = [];

  const getlibrosTablaIntermedia = async () => {
    try {
      const token = localStorage.getItem("token");
      const books = await getAllUserBooks(token);

      librosTablaIntermedia.push(...books.data);
    } catch (error) {
      console.log(error);
    }
  };
  
   const getLibros = async () => {


  for(let i = 0; i < librosTablaIntermedia.length; i++){
    const book = await getBookById(librosTablaIntermedia[i].bookId);
    libros_.push(book.data);
  }
   if(libros.length === 0 && librosTablaIntermedia.length !== 0){
     setLibros(libros_)
   }

   };

  const getlibros = async () => {
    await getlibrosTablaIntermedia();
    await getLibros();
  };

  useEffect( () => {
       getlibros();
  }, [libros]);

  return (
    <div id="personal-library">
      <h1>Mi biblioteca</h1>
      <div>
        <input type="text" id="search" placeholder="Search..."></input>
        <button
          id="search-button"
          onClick={() => {
            getFilteredBooks();
          }}
        >
          Search
        </button>
      </div>
      <div id="book-display">
        {libros ? libros.map((libro, idx) => {
              return (
                <div className="book-info" key={idx}>
                  <Book book={libro} />
                  <h2>{libro.name}</h2>
                  <p>{libro.author}</p>
                  <h3>{libro.price + "€"}</h3>
                  <p>{/*librosTablaIntermedia[idx].status*/}</p>
                  <button className="delete-book" onClick={() => {
                    console.log(librosTablaIntermedia[idx].bookId)
                    deleteBookFromUserLibrary(librosTablaIntermedia[idx].bookId).then(()=>{
                      setLibros([]) // Modificamos el estado para que se actualice la lista de libros y se re renderice la página.
                    })
                    
                  }}>
                    Eliminar libro
                  </button>
                </div>
              );
            })
          : "No books available"}
      </div>
    </div>
  );
};

export default PersonalLibrary;
