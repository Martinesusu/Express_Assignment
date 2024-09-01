import express from "express";

const app = express();
const port = 4000;

app.get("/profiles", (req, res) => {
    const userProfile = {
        data: {
            name: "john",
            age: 20
        }
    };
    return res.status(200).json(userProfile);
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});