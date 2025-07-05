"use client";

import {
  Activity,
  Bell,
  Calendar,
  Clock,
  Download,
  Edit,
  Eye,
  FileText,
  Heart,
  LogOut,
  Plus,
  Shield,
  User,
  UserCheck,
  UserX,
} from "lucide-react";
import React, { useState } from "react";

interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  doctor: string;
  diagnosis: string;
  treatment: string;
  notes: string;
  status: "completed" | "pending" | "scheduled";
}

interface DoctorPermission {
  id: string;
  doctorName: string;
  specialization: string;
  hospital: string;
  accessLevel: "full" | "limited" | "emergency";
  grantedDate: string;
  status: "active" | "pending" | "revoked";
}

const PatientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  // Mock data
  const medicalRecords: MedicalRecord[] = [
    {
      id: "1",
      date: "2025-01-15",
      type: "Consultation",
      doctor: "Dr. Sarah Wilson",
      diagnosis: "Hypertension Stage 1",
      treatment: "Lisinopril 10mg daily",
      notes: "Blood pressure stable. Continue medication.",
      status: "completed",
    },
    {
      id: "2",
      date: "2025-01-10",
      type: "Lab Results",
      doctor: "Dr. Michael Chen",
      diagnosis: "Annual Health Check",
      treatment: "No treatment required",
      notes: "All lab values within normal range.",
      status: "completed",
    },
    {
      id: "3",
      date: "2025-01-20",
      type: "Follow-up",
      doctor: "Dr. Sarah Wilson",
      diagnosis: "Hypertension Follow-up",
      treatment: "Continue current medication",
      notes: "Scheduled follow-up appointment.",
      status: "scheduled",
    },
  ];

  const doctorPermissions: DoctorPermission[] = [
    {
      id: "1",
      doctorName: "Dr. Sarah Wilson",
      specialization: "Cardiologist",
      hospital: "Metro General Hospital",
      accessLevel: "full",
      grantedDate: "2024-12-01",
      status: "active",
    },
    {
      id: "2",
      doctorName: "Dr. Michael Chen",
      specialization: "Internal Medicine",
      hospital: "City Medical Center",
      accessLevel: "limited",
      grantedDate: "2024-11-15",
      status: "active",
    },
    {
      id: "3",
      doctorName: "Dr. Emily Rodriguez",
      specialization: "Emergency Medicine",
      hospital: "Emergency Care Unit",
      accessLevel: "emergency",
      grantedDate: "2024-10-20",
      status: "pending",
    },
  ];

  const stats = [
    { label: "Total Records", value: "24", icon: FileText, color: "pink" },
    { label: "Active Doctors", value: "3", icon: UserCheck, color: "rose" },
    {
      label: "Upcoming Appointments",
      value: "2",
      icon: Calendar,
      color: "pink",
    },
    { label: "Pending Results", value: "1", icon: Clock, color: "rose" },
  ];

  const PermissionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Grant Doctor Permission
          </h3>
          <button
            onClick={() => setShowPermissionModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor's Email or License Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter doctor's email or license"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Access Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option value="limited">Limited Access</option>
              <option value="full">Full Access</option>
              <option value="emergency">Emergency Only</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="180">6 months</option>
              <option value="365">1 year</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowPermissionModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600"
            >
              Grant Permission
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-pink-100 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MedRecords</h1>
                <p className="text-sm text-gray-500">Patient Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-pink-600 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    John Smith
                  </p>
                  <p className="text-xs text-gray-500">Patient ID: P-12345</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-pink-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-pink-100 min-h-screen">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <Activity className="h-5 w-5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab("records")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "records"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>My Records</span>
            </button>
            <button
              onClick={() => setActiveTab("permissions")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "permissions"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <Shield className="h-5 w-5" />
              <span>Doctor Permissions</span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === "profile"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome Back, John
                </h2>
                <p className="text-gray-600">
                  Here's an overview of your health information.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-pink-100"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200`}
                      >
                        <stat.icon
                          className={`h-6 w-6 text-${stat.color}-600`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-pink-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Records
                  </h3>
                  <div className="space-y-3">
                    {medicalRecords.slice(0, 3).map((record) => (
                      <div
                        key={record.id}
                        className="flex items-center justify-between p-3 bg-pink-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {record.type}
                            </p>
                            <p className="text-sm text-gray-500">
                              {record.doctor} - {record.date}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : record.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {record.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-pink-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Active Permissions
                  </h3>
                  <div className="space-y-3">
                    {doctorPermissions
                      .filter((p) => p.status === "active")
                      .map((permission) => (
                        <div
                          key={permission.id}
                          className="flex items-center justify-between p-3 bg-rose-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                              <UserCheck className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {permission.doctorName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {permission.specialization}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              permission.accessLevel === "full"
                                ? "bg-green-100 text-green-800"
                                : permission.accessLevel === "limited"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {permission.accessLevel}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "records" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    My Medical Records
                  </h2>
                  <p className="text-gray-600">
                    View and download your complete medical history
                  </p>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export All</span>
                </button>
              </div>

              <div className="bg-white rounded-lg border border-pink-100">
                <div className="p-6 border-b border-pink-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Medical History
                    </h3>
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                        <option>All Records</option>
                        <option>Consultations</option>
                        <option>Lab Results</option>
                        <option>Prescriptions</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  {medicalRecords.map((record) => (
                    <div
                      key={record.id}
                      className="border border-pink-100 rounded-lg p-4 hover:bg-pink-50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {record.type}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {record.doctor} - {record.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              record.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : record.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {record.status}
                          </span>
                          <button className="p-2 text-pink-600 hover:bg-pink-100 rounded">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-pink-600 hover:bg-pink-100 rounded">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">
                            Diagnosis:
                          </span>
                          <p className="text-gray-600">{record.diagnosis}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">
                            Treatment:
                          </span>
                          <p className="text-gray-600">{record.treatment}</p>
                        </div>
                      </div>
                      {record.notes && (
                        <div className="mt-3 text-sm">
                          <span className="font-medium text-gray-700">
                            Notes:
                          </span>
                          <p className="text-gray-600">{record.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "permissions" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Doctor Permissions
                  </h2>
                  <p className="text-gray-600">
                    Manage which doctors can access your medical records
                  </p>
                </div>
                <button
                  onClick={() => setShowPermissionModal(true)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Grant Permission</span>
                </button>
              </div>

              <div className="bg-white rounded-lg border border-pink-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-pink-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Hospital
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Access Level
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Granted Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {doctorPermissions.map((permission) => (
                        <tr key={permission.id} className="hover:bg-pink-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-white" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {permission.doctorName}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {permission.specialization}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {permission.hospital}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                permission.accessLevel === "full"
                                  ? "bg-green-100 text-green-800"
                                  : permission.accessLevel === "limited"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {permission.accessLevel}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {permission.grantedDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                permission.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : permission.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {permission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-pink-600 hover:text-pink-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <UserX className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Patient Profile
                </h2>
                <p className="text-gray-600">
                  Manage your personal information
                </p>
              </div>

              <div className="bg-white rounded-lg border border-pink-100 p-6">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      John Smith
                    </h3>
                    <p className="text-gray-600">Patient ID: P-12345</p>
                    <p className="text-sm text-gray-500">
                      Member since: January 2024
                    </p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Smith"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        defaultValue="1985-06-15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.smith@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 987-6543"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="123 Main Street, Anytown, ST 12345"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact
                    </label>
                    <input
                      type="text"
                      defaultValue="Jane Smith - +1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>

      {showPermissionModal && <PermissionModal />}
    </div>
  );
};

export default PatientDashboard;
