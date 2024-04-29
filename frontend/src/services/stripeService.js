import api from "./config"

export const createPaymentIntent = (data) => {
    return api.post("/stripe/subscribe", data)
}
