const app = require("./app");
const connectDatabase = require("./database/database");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

// connect db
connectDatabase();


// create server
app.listen(process.env.PORT, () => {
    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    );
});