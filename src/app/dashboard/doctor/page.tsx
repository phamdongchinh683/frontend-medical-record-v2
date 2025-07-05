'use client'
import React, { useState } from 'react';
import {
  User,
  FileText,
  Search,
  Plus,
  Calendar,
  Activity,
  Users,
  Settings,
  Bell,
  LogOut,
  Heart,
  ChevronRight,
  Edit,
  Eye,
  Download,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  identityNumber: string;
  age: number;
  gender: string;
  lastVisit: string;
  condition: string;
  status: 'active' | 'inactive' | 'critical';
}

interface MedicalRecord {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  type: string;
  diagnosis: string;
  treatment: string;
  notes: string;
}

const DoctorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showAddRecord, setShowAddRecord] = useState(false);

  // Mock data
  const recentPatients: Patient[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      identityNumber: '123456789',
      age: 34,
      gender: 'Female',
      lastVisit: '2025-01-15',
      condition: 'Hypertension',
      status: 'active'
    },
    {
      id: '2',
      name: 'Michael Chen',
      identityNumber: '987654321',
      age: 45,
      gender: 'Male',
      lastVisit: '2025-01-14',
      condition: 'Diabetes Type 2',
      status: 'active'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      identityNumber: '456789123',
      age: 28,
      gender: 'Female',
      lastVisit: '2025-01-13',
      condition: 'Asthma',
      status: 'critical'
    }
  ];

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      patientId: '1',
      patientName: 'Sarah Johnson',
      date: '2025-01-15',
      type: 'Consultation',
      diagnosis: 'Hypertension Stage 1',
      treatment: 'Lisinopril 10mg daily',
      notes: 'Patient responding well to medication. Blood pressure stable.'
    },
    {
      id: '2',
      patientId: '2',
      patientName: 'Michael Chen',
      date: '2025-01-14',
      type: 'Lab Results',
      diagnosis: 'Diabetes Type 2',
      treatment: 'Metformin 500mg twice daily',
      notes: 'HbA1c levels improved. Continue current medication.'
    }
  ];

  const stats = [
    { label: 'Total Patients', value: '1,247', icon: Users, color: 'pink' },
    { label: 'Today\'s Appointments', value: '12', icon: Calendar, color: 'rose' },
    { label: 'Pending Records', value: '8', icon: FileText, color: 'pink' },
    { label: 'Critical Cases', value: '3', icon: AlertCircle, color: 'rose' }
  ];

  const filteredPatients = recentPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.identityNumber.includes(searchQuery)
  );

  const AddRecordForm = () => (
    <div className="bg-white rounded-lg border border-pink-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Add Medical Record</h3>
        <button
          onClick={() => setShowAddRecord(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Patient ID
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter patient ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Record Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option>Consultation</option>
              <option>Lab Results</option>
              <option>Prescription</option>
              <option>Surgery</option>
              <option>Follow-up</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Diagnosis
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter diagnosis"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Treatment
          </label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter treatment details"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Additional notes"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setShowAddRecord(false)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600"
          >
            Save Record
          </button>
        </div>
      </form>
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
                <p className="text-sm text-gray-500">Doctor Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-pink-600 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dr. Sarah Wilson</p>
                  <p className="text-xs text-gray-500">Cardiologist</p>
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
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <Activity className="h-5 w-5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'patients'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Patients</span>
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'records'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Medical Records</span>
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'search'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <Search className="h-5 w-5" />
              <span>Search Patient</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
                <p className="text-gray-600">Welcome back, Dr. Wilson. Here's your practice summary.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-pink-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200`}>
                        <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-pink-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Patients</h3>
                  <div className="space-y-3">
                    {recentPatients.slice(0, 5).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-500">{patient.condition}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-pink-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-rose-50 rounded-lg">
                      <Clock className="h-5 w-5 text-rose-600" />
                      <div>
                        <p className="font-medium text-gray-900">9:00 AM - Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Follow-up consultation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                      <Clock className="h-5 w-5 text-pink-600" />
                      <div>
                        <p className="font-medium text-gray-900">10:30 AM - Michael Chen</p>
                        <p className="text-sm text-gray-500">Lab results review</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-rose-50 rounded-lg">
                      <Clock className="h-5 w-5 text-rose-600" />
                      <div>
                        <p className="font-medium text-gray-900">2:00 PM - Emily Rodriguez</p>
                        <p className="text-sm text-gray-500">Emergency consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Patients</h2>
                  <p className="text-gray-600">Manage your patient records</p>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Patient</span>
                </button>
              </div>

              <div className="bg-white rounded-lg border border-pink-100">
                <div className="p-6 border-b border-pink-100">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search patients..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-pink-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPatients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-pink-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-white" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                                <div className="text-sm text-gray-500">{patient.gender}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.identityNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.age}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.lastVisit}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              patient.status === 'active' ? 'bg-green-100 text-green-800' :
                              patient.status === 'critical' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-pink-600 hover:text-pink-900">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-pink-600 hover:text-pink-900">
                                <Edit className="h-4 w-4" />
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

          {activeTab === 'records' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
                  <p className="text-gray-600">View and manage patient medical records</p>
                </div>
                <button
                  onClick={() => setShowAddRecord(true)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Record</span>
                </button>
              </div>

              {showAddRecord && <AddRecordForm />}

              <div className="bg-white rounded-lg border border-pink-100">
                <div className="p-6 border-b border-pink-100">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search records..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border border-pink-100 rounded-lg p-4 hover:bg-pink-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{record.patientName}</h4>
                            <p className="text-sm text-gray-500">{record.type} - {record.date}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
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
                          <span className="font-medium text-gray-700">Diagnosis:</span>
                          <p className="text-gray-600">{record.diagnosis}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Treatment:</span>
                          <p className="text-gray-600">{record.treatment}</p>
                        </div>
                      </div>
                      {record.notes && (
                        <div className="mt-3 text-sm">
                          <span className="font-medium text-gray-700">Notes:</span>
                          <p className="text-gray-600">{record.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'search' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Search Patient</h2>
                <p className="text-gray-600">Find patient records by identity number</p>
              </div>

              <div className="bg-white rounded-lg border border-pink-100 p-6">
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Identity Number
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Enter identity number"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="bg-white rounded-lg border border-pink-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Results</h3>
                <div className="text-center py-8 text-gray-500">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Enter an identity number to search for patient records</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Doctor Profile</h2>
                <p className="text-gray-600">Manage your professional information</p>
              </div>

              <div className="bg-white rounded-lg border border-pink-100 p-6">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Wilson</h3>
                    <p className="text-gray-600">Cardiologist</p>
                    <p className="text-sm text-gray-500">License: MD-12345</p>
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
                        defaultValue="Sarah"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Wilson"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization
                    </label>
                    <input
                      type="text"
                      defaultValue="Cardiologist"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      License Number
                    </label>
                    <input
                      type="text"
                      defaultValue="MD-12345"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="sarah.wilson@hospital.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
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
    </div>
  );
};

export default DoctorDashboard;