export default function Table({ children }: { children: React.ReactNode }) {
  const style =
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
  return (
    <table className="w-full">
      <thead className="bg-pink-50">
        <tr>
          <th className={style}>Doctor</th>
          <th className={style}>Hospital</th>
          <th className={style}>Access Level</th>
          <th className={style}>Status</th>
          <th className={style}>Actions</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
