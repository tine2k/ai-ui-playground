export default function StatusBadge({
  status,
}: {
  status: "Completed" | "Pending" | "Failed";
}) {
  const styles: Record<string, { bg: string; text: string; border: string }> = {
    Completed: {
      bg: "#ECFDF5",
      text: "#065F46",
      border: "1px solid #D1FAE5",
    },
    Pending: {
      bg: "#FFFBEB",
      text: "#92400E",
      border: "1px solid #FEF3C7",
    },
    Failed: {
      bg: "#FEF2F2",
      text: "#991B1B",
      border: "1px solid #FECACA",
    },
  };

  const s = styles[status];

  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[12px] font-medium"
      style={{
        backgroundColor: s.bg,
        color: s.text,
        border: s.border,
      }}
    >
      {status}
    </span>
  );
}
