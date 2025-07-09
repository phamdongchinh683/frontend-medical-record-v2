"use client";

import Loading from "@/components/Loading";
import RecordList from "@/components/RecordList";
import SelectOption from "@/components/SelectOption";
import { usePatientMedicalRecords } from "@/hooks/useMedicalRecords";
export default function RecordsPage() {
  const { data: tokenIds, isLoading, error } = usePatientMedicalRecords();

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              My Medical Records
            </h2>
            <p className="text-gray-600">
              View and download your complete medical history
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-pink-100">
          <div className="flex items-center justify-between p-6 border-b border-pink-100">
            <h3 className="text-lg font-semibold text-gray-900">
              Medical History
            </h3>
            <SelectOption options={["All", "Completed", "Pending"]} />
          </div>
          <div className="space-y-4 p-6">
            {tokenIds && tokenIds.length === 0 && (
              <Loading text="No records found" />
            )}
            {isLoading && <Loading className="p-8 bg-gray-50 rounded-lg" />}
            {error && <Loading className="p-8 bg-red-50 rounded-lg" />}
            {!isLoading && tokenIds && <RecordList tokenIds={tokenIds} />}
          </div>
        </div>
      </div>
    </>
  );
}
