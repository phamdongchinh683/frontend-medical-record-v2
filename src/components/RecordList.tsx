import Record from "./Record";

export default function RecordList({ tokenIds }: { tokenIds: bigint[] }) {
  return (
    <>
      {tokenIds.map((record, index) => (
        <Record key={index} tokenId={record.toString()} timestamp={new Date().toISOString()} />
      ))}
    </>
  );
}
