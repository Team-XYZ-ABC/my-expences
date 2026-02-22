
import { ENV } from "./src/configs/env.config.js";
import app from "./src/app.js";
import connectDB from "./src/configs/db.config.js";

const PORT = ENV.PORT || 5000;
connectDB();


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
