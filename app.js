const express = require('express');
const app = express();
const path = require("path");
const mainRouter = require ('./router/mainRouter')



// drive static
const publicPath = "public";
app.use(express.static(publicPath));

// templates view
app.set("view engine", "ejs");






// Routes
app.use('/',mainRouter)




// server
app.listen(process.env.PORT || 3000, () => {
    console.log("el servidor esta corriendo en el puerto 3000")
});

