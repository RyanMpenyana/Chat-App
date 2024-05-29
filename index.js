const express = require("express");
const cors = require("cors");
const {default : axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username} = req.body;
    try{
        const response = await axios.put('https://api.chatengine.io/users/', 
            {username : username, secret : username},
            { headers : {
                    "Content-Type" : "application/json",
                    "private-key" : "5d13cb51-4209-48bb-b756-7abcb16d23fe"
            }}
        )
        return res.status(response.status).json(response.data)
    }
    catch (e) {
            return res.status(e.response.status).json(e.response.status)
    }
  
});

app.listen(3001);