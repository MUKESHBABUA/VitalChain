import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Clock, 
  User, 
  Pill, 
  Activity, 
  FileText, 
  AlertTriangle, 
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  FileBarChart,
  FileClock,
  Syringe,
  Thermometer
} from 'lucide-react';

const PatientDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - In a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    const fetchPatient = async () => {
      setLoading(true);
      try {
        // Mock patient data
        const mockPatient = {
          id: id,
          name: "Ram",
          age: 42,
          gender: "Male",
          bloodType: "O+",
          contact: {
            phone: "+91 9876543210",
            email: "Ram@gmail.com",
            address: "123 Main Street, Bengaluru"
          },
          vitalSigns: {
            heartRate: 75,
            bloodPressure: "120/80",
            temperature: "98.6°F",
            respiratoryRate: 16,
            oxygenSaturation: "98%"
          },
          recentVisit: "March 25, 2025",
          currentMedications: [
            { name: "Metformin", dosage: "500mg", frequency: "Twice daily", purpose: "Type 2 Diabetes" },
            { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", purpose: "Hypertension" }
          ],
          allergies: ["Penicillin", "Shellfish"],
          medicalHistory: [
            { condition: "Type 2 Diabetes", diagnosedDate: "2020-04-15", status: "Active" },
            { condition: "Hypertension", diagnosedDate: "2019-02-10", status: "Active" },
            { condition: "Appendectomy", diagnosedDate: "2010-07-22", status: "Resolved" }
          ],
          recentTests: [
            { test: "Complete Blood Count", date: "2025-03-15", result: "Normal", report: "#CBC-2025-0315" },
            { test: "HbA1c", date: "2025-03-15", result: "6.7%", report: "#HBA1C-2025-0315" },
            { test: "Lipid Panel", date: "2025-03-15", result: "Borderline", report: "#LP-2025-0315" }
          ],
          upcomingAppointments: [
            { doctor: "Dr. Patel", department: "Endocrinology", date: "April 10, 2025", time: "10:30 AM" }
          ],
          emergencyContact: {
            name: "Rani",
            relation: "Spouse",
            phone: "+91 9876543211"
          }
        };
        
        // Simulate network delay
        setTimeout(() => {
          setPatient(mockPatient);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching patient:", error);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-3" />
            <p className="text-red-700">Patient with ID {id} not found.</p>
          </div>
          <Link to="/patients" className="mt-4 inline-flex items-center text-red-600 hover:text-red-800">
            <ChevronLeft size={16} className="mr-1" />
            Back to Patients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <div className="mb-6">
        <Link to="/patients" className="inline-flex items-center text-red-600 hover:text-red-800">
          <ChevronLeft size={16} className="mr-1" />
          Back to Patients
        </Link>
      </div>
      
      {/* Patient Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-red-100 p-4 rounded-full">
              <User className="h-12 w-12 text-red-700" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">{patient.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center mt-1 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {patient.age} years
                </span>
                <span className="hidden sm:block mx-2">•</span>
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  {patient.bloodType}
                </span>
                <span className="hidden sm:block mx-2">•</span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {patient.gender}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md flex items-center hover:bg-red-200 transition-colors">
              <FileText className="h-4 w-4 mr-2" />
              Print Records
            </button>
            <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md flex items-center hover:bg-green-200 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Contact Patient
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-1">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">Phone</span>
            </div>
            <p className="text-gray-900 font-medium">{patient.contact.phone}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-1">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">Email</span>
            </div>
            <p className="text-gray-900 font-medium">{patient.contact.email}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-600 mb-1">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Address</span>
            </div>
            <p className="text-gray-900 font-medium">{patient.contact.address}</p>
          </div>
        </div>
      </div>
      
      {/* Vitals Summary */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <VitalCard 
          icon={<Heart className="h-5 w-5 text-red-500" />} 
          title="Heart Rate" 
          value={patient.vitalSigns.heartRate} 
          unit="bpm" 
        />
        <VitalCard 
          icon={<Activity className="h-5 w-5 text-red-500" />} 
          title="Blood Pressure" 
          value={patient.vitalSigns.bloodPressure} 
          unit="" 
        />
        <VitalCard 
          icon={<Thermometer className="h-5 w-5 text-orange-500" />} 
          title="Temperature" 
          value={patient.vitalSigns.temperature} 
          unit="" 
        />
        <VitalCard 
          icon={<Activity className="h-5 w-5 text-green-500" />} 
          title="Respiratory Rate" 
          value={patient.vitalSigns.respiratoryRate} 
          unit="rpm" 
        />
        <VitalCard 
          icon={<Activity className="h-5 w-5 text-purple-500" />} 
          title="Oxygen Saturation" 
          value={patient.vitalSigns.oxygenSaturation} 
          unit="" 
        />
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
            icon={<FileBarChart className="h-5 w-5" />}
            label="Overview"
          />
          <TabButton 
            active={activeTab === 'medications'} 
            onClick={() => setActiveTab('medications')}
            icon={<Pill className="h-5 w-5" />}
            label="Medications"
          />
          <TabButton 
            active={activeTab === 'history'} 
            onClick={() => setActiveTab('history')}
            icon={<FileClock className="h-5 w-5" />}
            label="Medical History"
          />
          <TabButton 
            active={activeTab === 'tests'} 
            onClick={() => setActiveTab('tests')}
            icon={<FileText className="h-5 w-5" />}
            label="Lab Results"
          />
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Patient Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Current Medications</h3>
                <div className="space-y-3">
                  {patient.currentMedications.map((med, index) => (
                    <div key={index} className="bg-red-50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-medium text-red-900">{med.name}</div>
                        <div className="text-sm bg-red-200 text-red-800 px-2 rounded">{med.dosage}</div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{med.frequency} - {med.purpose}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Allergies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {patient.allergies.map((allergy, index) => (
                    <div key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {allergy}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-medium mb-3 text-gray-900">Emergency Contact</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">{patient.emergencyContact.name}</div>
                  <div className="text-sm text-gray-600">{patient.emergencyContact.relation}</div>
                  <div className="text-sm text-gray-600 mt-1">{patient.emergencyContact.phone}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">Upcoming Appointments</h3>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patient.upcomingAppointments.map((appointment, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.doctor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-red-600 hover:text-red-800">Reschedule</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'medications' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Current Medications</h2>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center hover:bg-red-700 transition-colors">
                <Syringe className="h-4 w-4 mr-2" />
                Prescribe New
              </button>
            </div>
            
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patient.currentMedications.map((med, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{med.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{med.dosage}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{med.frequency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{med.purpose}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Medical History</h2>
            
            <div className="space-y-4">
              {patient.medicalHistory.map((item, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-lg text-gray-900">{item.condition}</h3>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'Active' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Diagnosed on: {new Date(item.diagnosedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'tests' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Test Results</h2>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center hover:bg-red-700 transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                Order New Test
              </button>
            </div>
            
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patient.recentTests.map((test, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.test}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{test.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          test.result === 'Normal' ? 'bg-green-100 text-green-800' :
                          test.result === 'Borderline' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {test.result}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{test.report}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-red-600 hover:text-red-800 mr-3">View</button>
                        <button className="text-red-600 hover:text-red-800">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const VitalCard = ({ icon, title, value, unit }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105">
    <div className="mb-2">
      {icon}
    </div>
    <p className="text-xs text-gray-500 uppercase tracking-wide">{title}</p>
    <p className="text-xl font-bold mt-1">
      {value} <span className="text-sm font-normal text-gray-500">{unit}</span>
    </p>
  </div>
);

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
      active 
        ? 'border-red-600 text-red-600' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </button>
);

export default PatientDetails;