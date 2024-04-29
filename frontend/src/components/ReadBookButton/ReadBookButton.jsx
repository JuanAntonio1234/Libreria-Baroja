import "./ReadBookButton.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ReadBookButton = () => {

    const { id } = useParams();

  return (
    <button className="read-book" onClick={() => window.location.href = `/read-book/${id}`}>Leer libro</button>
  )
}

export default ReadBookButton
