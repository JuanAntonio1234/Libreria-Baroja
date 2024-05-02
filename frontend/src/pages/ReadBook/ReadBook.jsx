import "./ReadBook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateUser } from "../../services/userService";

const ReadBook = () => {
  const [book, setBook] = useState("");
  const [bookTitle , setBookTitle] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      const user = await validateUser(token);
      if (user.data.rol === "user") {
        alert("Debes suscribirte para acceder a esta sección.");
        window.location.href = "/home";
      } else {
        import(`/public/books/${id}.js`).then((module) => {
          setBook(module.default.book);
          setBookTitle(module.default.title);
          console.log(book);
          console.log(bookTitle);
        });
      }
    };

    getUser();
  }, [book]);

  return (
    <div id="read-book">
      <h1>{bookTitle ? bookTitle : "Loading..."}</h1>
      <p id="book"> {book ? book : "Loading..."} </p>
    </div>
  );
};

export default ReadBook;
