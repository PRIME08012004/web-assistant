import { prisma } from "@repo/db"
import { WebSocketServer } from "ws";
const Server= new WebSocketServer({
    port:3001
})



Server.on("connection",async(socket)=>{
    await prisma.user.create({
        data:{
            email:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    
    socket.emit("Hello")
})