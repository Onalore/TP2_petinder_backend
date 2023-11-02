import express from "express"
//import router from "./routes/adoptanteRoutes.js"

const app = express()

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

app.get("/", (req, res)=>{
    res.send("Esto es Petinder")
})

//app.use("/routes/adoptanteRoutes", router)