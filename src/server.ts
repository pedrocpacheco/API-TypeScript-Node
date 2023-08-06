import express from "express";

const app = express();
                    // ? Nome
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json( { message: "Hello World!" } );
});

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`) );