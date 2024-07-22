import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
} from "../controllers/orderControllers.js";

const userRouter = express.Router();
userRouter.post("/orders", createOrder);
userRouter.get("/orders", getOrders);
userRouter.put("/orders/:id", updateOrder);

export default userRouter;
