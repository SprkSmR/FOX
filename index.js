import express from "express";
import axios from "axios";

const app = express();

const PORT = 3000;
const URL = "https://randomfox.ca/floof/";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/get-fox", async (req, res) => {
    try {
        const response = await axios.get(URL);
        res.render("fox.ejs", { image: response.data["image"]})
    } catch(error){
        res.render("error.ejs", { errorMessage: error.response.data});
    }
});

app.listen(PORT, () => {
    console.log("Now hosting!")
});