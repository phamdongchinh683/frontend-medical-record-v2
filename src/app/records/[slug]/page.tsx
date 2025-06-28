"use client";
import type { Metadata } from "next";
import { useEffect, useState } from "react";

// This would be a server component function, but since this is a client component,
// we'll show the pattern for dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Medical Record #${slug} - Medical Records DApp`,
    description: `View and manage medical record #${slug}. Secure access to your healthcare information.`,
    keywords: `medical record, ${slug}, healthcare, patient data`,
  };
}

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
