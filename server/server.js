import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    res.status(200).send("Você tem 15 anotações");
});
app.post("/api/notes", (req,res) => {
    res.status(201).send("Sua nota foi criada com sucesso");
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
