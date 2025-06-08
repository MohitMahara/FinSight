import TransCard from "./TransCard"

export default function RecentTrans() {
    
    const transactions = [
        {
            id: 1,
            status: "Received",
            title: "Salary",
            amount: 5000.78,
            date: "2025-01-01"
        },
        {
            id: 2,
            status: "Sent",
            title: "Groceries",
            amount: 300.78,
            date: "2025-01-02"
        },
        {
            id: 3,
            status: "Sent",
            title: "Utilities",
            amount: 260.78,
            date: "2025-01-03"
        },
        {
            id: 4,
            status: "Sent",
            title: "Rent",
            amount: 540.78,
            date: "2025-01-04"
        }
    ]
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md h-[400px] w-full max-w-screen-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

        <div className="flex flex-col space-y-4 overflow-y-scroll max-h-[80%]">
          {transactions.map((transaction) => (
            <TransCard transcation={transaction} key={transaction.id} />
          ))}
        </div>
      </div>
    )
} 