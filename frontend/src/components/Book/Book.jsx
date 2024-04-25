import { useEffect, useState } from "react"
import "./Book.css"

const Book = (props) => {

    const [book, setBook] = useState({})

    
    useEffect(() => {
        setBook(props.book)
    }, [props.book])


  return (
    <div className="book">
      {book ? <>
        <img className="book-image" src={book.image} alt=""/>      </> : "Loading..."}
    </div>
  )
}

export default Book
