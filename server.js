import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});
