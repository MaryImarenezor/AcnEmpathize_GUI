// DEPENDENCIES/CONFIGURATION
require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

////////////       ROUTES      /////////////

//// PAGES (update later)

// Home Page: a READ route that renders the home page
app.get('/', (req, res) => {
    res.send('Welcome to the AcnEmpathize GUI!')
})

// Search Page: a READ route that renders the home page.
// the route path would receive the query request
// from the user via req.params
app.get("/search", (req, res) => {
    res.send("you have entered the search page");
})

// Details Page: a READ route that renders the details page
// the route path will have the idea of the datarow
app.get("/details", (req, res) => {
    res.send("you have entered the details page");
})




//// DATA RETRIEVAL

// to be added ....



////////////////////

// LISTENING PORT
app.listen(process.env.BE_PORT, () => {
    console.log("listening at port", process.env.BE_PORT);
});