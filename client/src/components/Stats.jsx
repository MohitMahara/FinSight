export default function Stats() {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const statsOverview = [
    {
      title: "Total Income",
      amount: 30000,
    },
    {
      title: "Total Expenses",
      amount: 15000.78,
    },
    {
      title: "Total Transaction",
      amount: 20,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsOverview.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-full shadow-md text-center">
          <p className="text-2xl font-bold">{formatCurrency(stat.amount)}</p>
          <p className="text-gray-700 text-md pt-1">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
