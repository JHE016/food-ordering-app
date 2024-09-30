import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";

const router = express.Router();

// Routes that require JWT checks
router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);
router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, OrderController.createCheckoutSession);

// Webhook route (No JWT, uses raw body parsing)
router.post(
  "/checkout/webhook", 
  express.raw({ type: "application/json" }), // Ensure raw body parsing for Stripe webhook
  OrderController.stripeWebhookHandler
);

export default router;
