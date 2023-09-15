const express = require("express");
const app = express();
const port = 3001;

const tareas = [
    {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
    },
    {
    id: "1234567",
    isCompleted: true,
    description: "Buy groceries",
    },
    {
    id: "12345678",
    isCompleted: true,
    description: "Wash the car",
    },
];

app.get("/tareas", (req, res) => {
    res.json(tareas);
    });

app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});

