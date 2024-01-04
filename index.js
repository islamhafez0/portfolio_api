const express = require("express");
const appRoute = require("./routes/route.js");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(
  "/project-images",
  express.static(path.join(__dirname, "project-images"))
);

// Mount the router at /api
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
