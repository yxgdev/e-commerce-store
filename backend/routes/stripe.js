import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

// const stripe = Stripe(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = Stripe(KEY);
const router = express.Router();

router.post("/payment", (req, res) => {
  console.log(KEY);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
