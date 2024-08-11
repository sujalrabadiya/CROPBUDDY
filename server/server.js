require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const authRoute = require("./routes/auth-router");
const contactRoute = require("./routes/contact-router");
const userRoute = require("./routes/user-router");
const adminRoute = require("./routes/admin-router");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoute);

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


const PORT = 3030;

app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(PORT, () => { 
        console.log(`Listening on port ${PORT}...`);
    });
});
