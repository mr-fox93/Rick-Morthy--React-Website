export const statusColor = (status) => {
  if (status === "Alive") return "green";
  if (status === "Dead") return "red";
  if (status === "unknown") return "gray";
};
