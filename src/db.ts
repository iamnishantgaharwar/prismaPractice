import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser (username: string, password: string, firstname: string, lastname: string) {
    const res = await prisma.users.create({
        data:{
            email: username,
            password,
            firstname,
            lastname,
        }
    })
    console.log(res); 
}

interface UpdateParams{
    firstname: string,
    lastname: string
}

async function updateUser (email: string, { firstname, lastname}: UpdateParams) {
    const updateUserData = await prisma.users.update({
        where: {
            email,
        },
        data: {
            firstname,
            lastname
        }
    })
    console.log(updateUserData);
    
}

async function deleteUser(email: string ) {
    const deleteUser = await prisma.users.delete({
        where: { email }
    })
    console.log(deleteUser);
}
deleteUser('nishant@gmail.com')