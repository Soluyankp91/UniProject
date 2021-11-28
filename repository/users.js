const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {

    async createUser(user) {
        return prisma.user.create({
            data: user,
            select: {
                id: true,
                name: true,
                surname: true,
                middlename: true,
                role: true,
                email:true
            }
        });
    },

    async getUserByIpnPassport(ipn,passport) {
        return prisma.user.findFirst({
            where: {
                ipn:ipn,
                passport:passport
            },
            select: {
                id: true,
                name: true,
                surname: true,
                middlename: true,
                role: true
            }
        });
    },

    async updateUser(user) {
        return prisma.user.update({
            where: {
                id: user.id
            },
            data: user,
            select: {
                id: true,
                name: true,
                surname: true,
                middlename: true,
                role: true
            }
        });
    }
}