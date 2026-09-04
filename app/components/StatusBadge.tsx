type Status = "Completed" | "Pending" | "Failed";

const styles: Record<Status, string> = {
  Completed:
    "bg-status-completed-bg text-status-completed-text border-status-completed-border",
  Pending:
    "bg-status-pending-bg text-status-pending-text border-status-pending-border",
  Failed:
    "bg-status-failed-bg text-status-failed-text border-status-failed-border",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
