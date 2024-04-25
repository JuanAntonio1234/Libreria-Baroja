import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBookById } from "../../services/bookService"
import "./Book.css"
import AddBookPersonalLibrary from "../../components/AddBookPersonalLibrary/AddBookPersonalLibrary"

const Book = () => {

    const { id } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        getBookById(id).then((data) => {
            setBook(data.data)
        })
    }, [])

  return (
    <div>
    <h1>{book ? book.name : "Loading..."}</h1>
    <h2>{book ? book.author : "Loading..."}</h2>
    <img src={book ? book.image : "Loading..."} alt=""/>
    <p>{book ? book.description : "Loading..."}</p>
    <p>{book ? book.price+"€" : "Loading..."}</p>
    <p>{book ? book.editorial : "Loading..."}</p>
    <p>{book ? book.genres : "Loading..."}</p>
    <AddBookPersonalLibrary book={book}/>
    </div>
  )
}

export default Book
