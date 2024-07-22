import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderNumber: { type: Number, required: true },
  userName: { type: String, required: true },
  userAddress: { type: String, required: true },
  userOrder: { type: String, required: true },
  productSize: { type: String, required: true },
  orderCost: { type: Number, required: true },
  quantity: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

export default model("Order", orderSchema);
