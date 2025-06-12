import { prisma } from "@/lib/prisma";

export async function PUT(req, {params}) {

  const data = await req.json();
  const id = params.id;

    if(!id){
      return new Response(
       JSON.stringify({ msg: "Transaction id not found", success: false }),
       {
         status: 404,
         headers: { "Content-Type": "application/json" },
       }
      );
   }

  const transaction = await prisma.transaction.update({
    where: {
      id: id,
    },
    data: {
      amount: data.amount,
      title : data.title,
      status: data.status,
      date: new Date(data.date),
      category: data.category,
      description: data.description,
    },
  });

  return new Response(
    JSON.stringify({ msg: "Transaction updated successfully", success: true }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}


export async function DELETE(req, {params}) {
   const id = params.id;  

   if(!id){
      return new Response(
       JSON.stringify({ msg: "Transaction id not found", success: false }),
       {
         status: 404,
         headers: { "Content-Type": "application/json" },
       }
      );
   }

   const trans = await prisma.transaction.delete({
     where :{
        id : id
     }
   })

  return new Response(
    JSON.stringify({ msg: "Transaction deleted successfully", success: true }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
