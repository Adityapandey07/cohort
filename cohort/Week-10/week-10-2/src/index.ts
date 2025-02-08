import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, firstName: string, lastName: string, password: string){

        const res = await prisma.users.create({
                data:{
                        email,
                        firstName,
                        lastName,
                        password
                },
                select:{
                        firstName: true,
                        lastName: true,
                        email: true,
                        password: true
                }
        })

        console.log(res)
}

interface UpdateParams{
        firstName: string;
        lastName: string;
}

async function updateUser(email: string, {
        firstName,
        lastName
}: UpdateParams){
const res = await prisma.users.update({
        where:{
                email
        },
        data:{
                firstName,
                lastName
        }
})
console.log(res);
}

async function getUser(email: string){
        const res = await prisma.users.findFirst({
                where:{
                        email
                }
        })

        console.log(res)
}


///insertUser("ap7302@gmail.com","aditya","pandey","adityakapassword")
// updateUser("ap7302@gmail.com",{
//         firstName: "adi",
//         lastName: "pande"
// })
getUser("ap7302@gmail.com")