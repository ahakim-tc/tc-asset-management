
import { PrismaClient } from './generated/prisma/index.js'

const client = new PrismaClient();

const main = async () => {
    const res= await client.event.findMany(
        {
            take: 1
        }
    )

    console.log(res);
}

main();