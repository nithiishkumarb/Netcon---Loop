const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const port = 6001;
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//mongoose connect
mongoose.connect(process.env.MONGODB_URL, {})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
});

app.use("/api/dashboard", require("./routes/dashboard_main"));
app.use("/api/user", require("./routes/auth.js"));
app.use("/api/industries" , require("./routes/industries.js"));
app.use("/api/managewater",require("./routes/managewater.js"))
app.listen(port, () => {
    console.log(`Server running in ${port}`);
});
