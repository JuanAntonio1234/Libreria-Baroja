import "./AddBookPersonalLibrary.css";
import { getAllUserBooks } from "../../services/userBookService"
import { addBookToUserLibrary } from "../../services/userBookService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/bookService";


const AddBookPersonalLibrary = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getBookById(id).then((data) => {
      setBook(data.data);

    });
  }, []);

  const AddBookPersonalLibrary = async () => {

    const bookAdd = {
      status: "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      bookId: book.id,
    }

    const existingBooks = await getAllUserBooks(token);
    
    for (let i = 0; i < existingBooks.data.length; i++) {
      if (existingBooks.data[i].bookId === book.id) {
        alert("The book is already in your library");
        return;
      }
    }

      addBookToUserLibrary(bookAdd, token).then((data) => {
      if (data.data.message) {
        alert(data.data.message);
      } else {
        alert("The book has been added to your library");
      }
    });
    
  };

  return (
    <button
      className="add-book"
      onClick={() => AddBookPersonalLibrary()}
    >
      Añadir a mi biblioteca
    </button>
  );
};

export default AddBookPersonalLibrary;
