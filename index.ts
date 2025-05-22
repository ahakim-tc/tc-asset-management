import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient();

const main = async () => {
  const res = await client.event.findFirst({
    take: 10,
    where: {
      event_type_id: 2,
    },
    // select: {
    //     id: true
    // }
  });

  console.log(res);

//   await client.assetAssignmentRequest.findFirst({
//     where: {
//       id: 1,
//     },
//     include: {
//       Asset: true,
//       Event: true,
//       Employee: {
//         select: {
//           id: true,
//           firstname: true,
//           lastname: true,
//         },
//       },
//     },
//     // cursor
//     // distinct
//     // omit
//     // orderBy
//     // select
//     // skip
//     // take
//   });

//   {
//     asssignmentRequestDetails,
//     Asset: {
//         assetDetails,
//     },
//     Event: {
//         eventDetails,
//     },
//     Employee: {
//         id: 1,
//         firstname: "John",
//         lastname: "Doe",
//     },
//   }

//   client.assetAssignmentRequest.update({
//     where: {
//       id: 1,
//     },
//     data: {
      
//     },
//   })

//   client.assetAssignmentRequest.
};

main();
