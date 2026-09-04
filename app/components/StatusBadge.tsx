export default function StatusBadge({
  status,
}: {
  status: "Completed" | "Pending" | "Failed";
}) {
  const styles: Record<
    string,
    { classes: string }
  > = {
    Completed: {
      classes:
        "bg-status-completed-bg text-status-completed-text border-status-completed-border",
    },
    Pending: {
      classes:
        "bg-status-pending-bg text-status-pending-text border-status-pending-border",
    },
    Failed: {
      classes:
        "bg-status-failed-bg text-status-failed-text border-status-failed-border",
    },
  };

  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status].classes}`}
    >
      {status}
    </span>
  );
}
