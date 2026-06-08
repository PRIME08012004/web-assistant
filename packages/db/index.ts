import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
dotenv.config({ path: "../../packages/db/.env" });

const connectionString= process.env.DB_URL

console.log(connectionString)
const adapter = new PrismaPg({
  connectionString
});


const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

 const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;



export { prisma }