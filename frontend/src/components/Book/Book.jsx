import { useEffect, useState } from "react"
import "./Book.css"

const Book = (props) => {

    const [book, setBook] = useState({})

    
    useEffect(() => {
        setBook(props.book)
        console.log(props.book && props.book.image)
    }, [props.book])


  return (
    <div className="book">
      {book ? <>
        <h3>{book.name}</h3>
        <img className="book-image" src={"../../" + book.image} alt={book.name} />
        <p>{book.description}</p>
      </> : "Loading..."}
    </div>
  )
}

export default Book
