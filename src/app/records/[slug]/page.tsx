"use client";
import { useEffect, useState } from "react";

export default function DetailRecordPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/nft/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("frontend", data);
        setRecord(data);
      })
      .catch((err) => {
        console.error("Error fetching record:", err);
      });
  }, [slug]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Medical Record #{slug}</h1>
      {record ? (
        <pre>{JSON.stringify(record, null, 2)}</pre>
      ) : (
        <p>Loading record...</p>
      )}
    </div>
  );
}
