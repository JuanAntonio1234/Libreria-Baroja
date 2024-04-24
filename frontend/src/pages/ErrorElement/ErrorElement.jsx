import "./ErrorElement.css"

const ErrorElement = () => {
  return (
    <div id="page-not-found">
        <h1 style={{margin: "20px"}}>This page does not exist.</h1>
        <button id="go-back" onClick={() => window.history.back()}>Go back</button>
    </div>
  )
}

export default ErrorElement
