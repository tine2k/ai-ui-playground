import StatusBadge from "./StatusBadge";

const activities = [
  { name: "John Smith", initials: "JS", status: "Completed" as const, date: "Jan 12", amount: "$250.00" },
  { name: "Jane Doe", initials: "JD", status: "Pending" as const, date: "Jan 11", amount: "$180.00" },
  { name: "Bob Wilson", initials: "BW", status: "Failed" as const, date: "Jan 10", amount: "$320.00" },
  { name: "Alice Brown", initials: "AB", status: "Completed" as const, date: "Jan 09", amount: "$410.00" },
  { name: "Charlie Davis", initials: "CD", status: "Completed" as const, date: "Jan 08", amount: "$95.00" },
];

export default function ActivityTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <h2 className="text-base font-semibold text-gray-900">
          Recent Activity
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-blue-500 no-underline hover:underline"
        >
          View All
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Date
              </th>
              <th className="border-b border-gray-200 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((row, i) => (
              <tr
                key={row.name}
                className={`border-b border-gray-100 transition-colors duration-100 ease-in-out hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-500">
                      {row.initials}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {row.date}
                </td>
                <td className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
