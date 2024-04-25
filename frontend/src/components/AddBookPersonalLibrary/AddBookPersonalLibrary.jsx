import "./AddBookPersonalLibrary.css"
import { addBookToUserLibrary } from "../../services/userBookService";
const AddBookPersonalLibrary = (props) => {
  
  const AddBookPersonalLibrary = (props) => {
    const token = localStorage.getItem("token")
    
    addBookToUserLibrary(props.book).then((data) => {
        if(data.data.message){
            alert(data.data.message)
        }
        else{
            alert("The book has been added to your library")
        }
    })

  }


  return (
    <button className="add-book" onClick={() => AddBookPersonalLibrary(props.book)}>
        Añadir a mi biblioteca
    </button>
  )
}

export default AddBookPersonalLibrary
