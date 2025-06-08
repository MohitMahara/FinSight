export default function TransCard({ transcation }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="">
            <p className="text-md font-semibold">{transcation.title}</p>
            <p className="text-gray-600 text-sm">{new Date(transcation.date).toLocaleDateString()}</p>    
        </div>
      <p className={`text-md font-bold mt-2 ${transcation.status == "Sent" ? "text-red-500" : "text-green-500"} `}> {formatCurrency(transcation.amount)} </p>
    </div>
  );
}
