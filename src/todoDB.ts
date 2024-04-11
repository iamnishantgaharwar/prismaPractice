import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertTodo(title: string, description: string, done: boolean, userId: number){
    const insertData = await prisma.todos.create({
        data:{
            title,
            description,
            done,
            userId,
        }
    })
    console.log(insertData);   
}

async function getUserData(userId: number){
    const response = await prisma.todos.findMany({
        where: {
            userId
        },
        select:{
            user: false,
            title: true,
            description: true,
            done: true,
        },
    })
    console.log(response);
}
getUserData(2)
