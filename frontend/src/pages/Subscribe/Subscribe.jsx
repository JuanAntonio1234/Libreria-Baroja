import "./Subscribe.css"
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { updateUser } from "../../services/userService";
import {loadStripe} from '@stripe/stripe-js';
import { createPaymentIntent } from "../../services/stripeService";

const stripePromise = loadStripe("pk_test_51PAbaRDXx7hljuINjThdceo3btOeQnRVGRfbLpWu0t5dVlGn1y1m1g4rHpjuHW7yZs61o7vEmO4sVS2Q670U4Gc6003DuXoUJT")


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            
        })

        if(!error){

            const { id } = paymentMethod;

            try {
                const { data } = await createPaymentIntent({
                    id,
                    amount: 500
                })

                if(data === "Successfull payment"){
                    const token = localStorage.getItem("token")
                    await updateUser(token)
                    alert("Gracias por su compra.")
                    window.location = "/home"
                }
                else{
                    alert("Payment failed")
                }

            } catch(err){
                console.log(err)
            }
        }
    }

    return <form onSubmit={handleSubmit} className="card card-body">
        <img src="public/stripe/premium.jpg" alt="premium" style={{marginTop: '10px'}}/>
        <h3 style={{textAlign: 'center'}}>Suscripción</h3>
        <h4 style={{textAlign: 'center'}}>5.00€</h4>
        <CardElement className="form-control"/>
        <button className="btn">Buy</button>
    </form>
}


const Subscribe = () => {
    
  return (
    <Elements stripe={stripePromise}>
        <div id="subscribe">
            <CheckoutForm/>
            <h2>Ventajas</h2>
            <ul>
                <li>Acceso ilimitado al catálogo desde cualquier dispositivo, estés donde estés.</li>
                
                <li>Crea tu biblioteca personal y accede a todos tus libros por solo 5€ al mes.</li>
                
                <li>Sin compromiso de permanencia.</li>
            </ul>
            <p></p>
        </div>
        
    </Elements>
  )
}

export default Subscribe