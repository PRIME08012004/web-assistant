import express from "express"
import { prisma } from "@repo/db"
const app=express();
app.use(express.json())


app.get("/", (req,res)=>{
    res.json({
        msg:"Testing"
    })
})
app.get("signinn",async( req ,res )=>{
    const email=req.body.email;
    const password=req.body.password
    await prisma.user.findFirst({
         where:{
            email:email
         }
    })
})
app.post("/signup", async(req ,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    await prisma.user.create({
        data:{
            email:email,
            password:password
        }
    })
    res.json({
        msg:"Success"
    })


})
app.listen(3002);