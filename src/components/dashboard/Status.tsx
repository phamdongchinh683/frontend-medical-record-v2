export default function Status({
  object,
  status,
}: {
  object: any ;
  status: string;
}) {
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${
        object === status
          ? "bg-green-100 text-green-800"
          : object.status === "Pending"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      {object}
    </span>
  );
}
