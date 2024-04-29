const router = require("express").Router();
const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51PAbaRDXx7hljuINFtcN7uv6bfoysmPxlIMJR5zFfeKsqKW9wkaBEO9r5CJiimE9Dok76HqDsDpJGteUmjwk05HM00V2Kbg3rV"
);

router.post("/subscribe", async (req, res) => {
  try {
    const { amount, id } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      description: "Subscription",
      payment_method: id,
      confirm: true,
      return_url: "https://localhost:5173/home"
    });

  } catch (error) {
    console.log("PETÓ --> " + error);
    res.json({message: error.message})
  }

  res.send("Successfull payment");
});

module.exports = router;
