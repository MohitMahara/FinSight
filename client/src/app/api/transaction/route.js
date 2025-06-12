import { prisma } from '@/lib/prisma';

export async function GET() {
  const transactions = await prisma.transaction.findMany();

  return new Response(
    JSON.stringify({ msg: "All Transaction", success: true , transactions}),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}


export async function POST(req) {
  const data = await req.json();

  if(!data.title || !data.amount || !data.date || !data.status) {
    return new Response(
      JSON.stringify({ msg: "All fields are required", success: false }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transaction = await prisma.transaction.create({
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
    JSON.stringify({ msg: "Transaction successful", success: true }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );;
}

