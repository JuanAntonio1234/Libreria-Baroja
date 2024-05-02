import "./ReadBook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateUser } from "../../services/userService";

const ReadBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      const user = await validateUser(token);
      console.log(user.data.rol);
      if (user.data.rol === "user") {
        alert("Debes suscribirte para acceder a esta sección.");
        window.location.href = "/home";
      } else {
        import(`/public/books/${id}.js`).then((module) => {
          setBook(module);
        });
      }
    };

    getUser();
  }, []);

  return (
    <div id="read-book">
      <h1>Soy el libro con ID {id}</h1>
      <p>{book ? book.default : "Loading..."}</p>
    </div>
  );
};

export default ReadBook;
