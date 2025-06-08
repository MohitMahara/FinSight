export default function Stats(){
    
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat("en-IN", {
         style: "currency",
         currency: "INR",
         maximumFractionDigits: 2,
         }).format(amount);
    }

    return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-full shadow-md text-center">
                <p className="text-2xl font-bold">{formatCurrency(30000)}</p>
                <p className="text-gray-700 text-md pt-1">Total Income</p>
              </div>

              <div className="bg-white p-6 rounded-full shadow-md text-center">
                <p className="text-2xl font-bold">{formatCurrency(15000.78)}</p>
                <p className="text-gray-700 text-md pt-1">Total Expenses</p>
              </div>

              <div className="bg-white p-6 rounded-full shadow-md text-center">
                <p className="text-2xl font-bold">20</p>
                <p className="text-gray-700 text-md pt-1">Total Transaction</p>
              </div>
            </div>
);
}