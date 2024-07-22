import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);
app.use(orderRoutes);
app.use(errorHandler);

connect("mongodb+srv://cafe:cafe1234@cluster0.hkwpdie.mongodb.net/poleo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
