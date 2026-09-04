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
    <div
      className="rounded-xl border border-[#E5E7EB] bg-white"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
      }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
        <h2 className="text-[16px] font-semibold text-[#111827]">
          Recent Activity
        </h2>
        <a
          href="#"
          className="text-[14px] font-medium text-[#3B82F6] no-underline hover:underline"
        >
          View All
        </a>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#E5E7EB] px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-[#6B7280]">
                Name
              </th>
              <th className="border-b border-[#E5E7EB] px-4 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-[#6B7280]">
                Status
              </th>
              <th className="border-b border-[#E5E7EB] px-4 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-[#6B7280]">
                Date
              </th>
              <th className="border-b border-[#E5E7EB] px-6 py-3 text-right text-[12px] font-medium uppercase tracking-wider text-[#6B7280]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((row, i) => (
              <tr
                key={row.name}
                className="border-b border-[#F3F4F6] transition-colors duration-100 ease-in-out hover:bg-[#F9FAFB]"
                style={{
                  backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                }}
              >
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-[12px] font-semibold text-[#6B7280]">
                      {row.initials}
                    </div>
                    <span className="text-[14px] font-medium text-[#111827]">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3 text-[14px] text-[#6B7280]">
                  {row.date}
                </td>
                <td className="px-6 py-3 text-right text-[14px] font-medium text-[#111827]">
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
