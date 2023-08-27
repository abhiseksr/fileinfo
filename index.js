const express = require("express");
const multer = require('multer');
const { exec } = require('child_process');
const path = require("path");
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.post('/', upload.single('file'), (req, res) => {
    try {
        // console.log("hello");
        const uploadedFile = req.file;
        console.log(req.headers["accept"]);
        if (req.headers["accept"]=="application/json"){
            return res.send(uploadedFile);
        }
        // console.log(uploadedFile);
        res.render("show.ejs", {info: uploadedFile});
    }
    catch (err) {
        console.log(err);
        res.render("home.ejs");
    }
});

app.get('*',(req,res)=>{
    res.send("Invalid Route");
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
});