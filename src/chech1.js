const express = require("express");
const app = express();

const cors = require("cors");


app.use(express.json());
//!to overcome bodyParse
app.use(express.urlencoded({ extended: false }));
//!crbss origin resource sharing
app.use(cors());

const mongoose = require("mongoose");
//!port number
const PORT = 4001;
//!to clear warnings
mongoose.set("strictQuery", false);

//!database url
const dburl = "mongodb://localhost:27017/stud1";

//!connecting to data base and login page usin 
mongoose.connect(dburl).then(() => {
    console.log("connected to database");
});

//!creating schema 
const postSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    branch: {
        type: String,
    },
    college: {
        type: String,
    },
    location: {
        type: String,
    }
})


let Post = new mongoose.model('Post', postSchema)

app.post('/post', async(req, res) => {
    let postData = new Post({
        name: req.body.name,
        branch: req.body.branch,
        college: req.body.summary,
        location: req.body.location
    })
    try {
        await postData.save()
        res.send({ message: "Post added SuccessFully" })
    } catch (err) {
        res.send({ message: "Failed to add post" })
        console.log(err);
    }

})

app.put('/post', async(req, res) => {
    let postData = {
        name: req.body.name,
        branch: req.body.branch,
        college: req.body.summary,
        location: req.body.location
    }
    try {
        await postData.save()
        res.send({ message: "Post update SuccessFully" })
    } catch (err) {
        res.send({ message: "Failed to update post" })
        console.log(err);
    }

})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});