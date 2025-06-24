"use client";
import { usePatientMedicalRecords } from "@/hooks/useMedicalRecords";
import Link from "next/link";

export default function PatientRecordListPage() {
  const { data: tokenIds, isLoading, error } = usePatientMedicalRecords();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Patient Token IDs</h1>

      {isLoading && <p>Loading records...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {!isLoading &&
      tokenIds &&
      Array.isArray(tokenIds) &&
      tokenIds.length > 0 ? (
        <ul className="list-disc list-inside">
          {tokenIds.map((id: bigint, idx: number) => (
            <Link href={`/records/${id.toString()}`} key={idx}>
              <li>Token #{id.toString()}</li>
            </Link>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No records found.</p>
      )}
    </div>
  );
}
