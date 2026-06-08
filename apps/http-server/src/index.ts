import express from "express"
import { prisma } from "@repo/db/client"
const app=express();
app.use(express.json())


app.get("/", (req,res)=>{
    res.json({
        msg:"Testing"
    })
})
app.post("/signup", async(req ,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user =await prisma.user.create({
        data:{
            email:email,
            password:password
        }
    })
    res.json({
        user
    })


})
app.listen(3000);