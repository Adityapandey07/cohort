"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.create({
            data: {
                email,
                firstName,
                lastName,
                password
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                password: true
            }
        });
        console.log(res);
    });
}
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.users.update({
            where: {
                email
            },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.findFirst({
            where: {
                email
            }
        });
        console.log(res);
    });
}
///insertUser("ap7302@gmail.com","aditya","pandey","adityakapassword")
// updateUser("ap7302@gmail.com",{
//         firstName: "adi",
//         lastName: "pande"
// })
getUser("ap7302@gmail.com");
