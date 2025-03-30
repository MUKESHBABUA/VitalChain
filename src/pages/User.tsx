import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Calendar, 
  Clock,
  LogOut,
  Edit,
  ChevronLeft,
  Save,
  X,
  FileText,
  Mail,
  Phone,
  MapPin,
  UserPlus,
  Lock,
  HelpCircle,
  Moon
} from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  // Mock data loading
  useEffect(() => {
    // Simulate API call
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Mock user data
        const mockUser = {
          id: "usr-12345",
          name: "Dr. Vinoth",
          role: "Cardiologist",
          department: "Cardiology",
          email: "vinoth007@vitalchain.com",
          phone: "+91 9876543210",
          address: "Apollo Hospital, 767 Road, Anna Nagar, Chennai",
          profileImage: null, // In real app, this would be an image URL
          joinDate: "January 15, 2023",
          lastActive: "Today at 09:45 AM",
          recentPatients: [
            { id: "p-001", name: "Nalini", date: "March 28, 2025" },
            { id: "p-002", name: "Raja Rajan", date: "March 27, 2025" },
            { id: "p-003", name: "Janarthan", date: "March 25, 2025" }
          ],
          upcomingAppointments: [
            { id: "apt-001", patientName: "Nalini", date: "April 5, 2025", time: "10:30 AM" },
            { id: "apt-002", patientName: "", date: "April 6, 2025", time: "2:15 PM" }
          ],
          notifications: {
            emailNotifications: true,
            appointmentReminders: true,
            systemUpdates: false,
            newPatientAlerts: true
          },
          theme: "light",
          language: "English",
          timezone: "Asia/Kolkata"
        };
        
        // Simulate network delay
        setTimeout(() => {
          setUser(mockUser);
          setFormData(mockUser);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleToggleChange = (settingName) => {
    setFormData({
      ...formData,
      notifications: {
        ...formData.notifications,
        [settingName]: !formData.notifications[settingName]
      }
    });
  };

  const handleSaveProfile = () => {
    // In a real app, you would send this data to an API
    setUser(formData);
    setEditMode(false);
    // Show success message
    alert("Profile updated successfully!");
  };

  const handleCancelEdit = () => {
    setFormData(user);
    setEditMode(false);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex items-center">
            <X className="text-red-500 mr-3" />
            <p className="text-red-700">User profile could not be loaded.</p>
          </div>
          <Link to="/dashboard" className="mt-4 inline-flex items-center text-red-600 hover:text-red-800">
            <ChevronLeft size={16} className="mr-1" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <div className="mb-6">
        <Link to="/dashboard" className="inline-flex items-center text-red-600 hover:text-red-800">
          <ChevronLeft size={16} className="mr-1" />
          Back to Dashboard
        </Link>
      </div>
      
      {/* User Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-red-100 p-4 rounded-full">
              <User className="h-12 w-12 text-red-700" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center mt-1 text-gray-600">
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {user.role}
                </span>
                <span className="hidden sm:block mx-2">•</span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined: {user.joinDate}
                </span>
                <span className="hidden sm:block mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Last active: {user.lastActive}
                </span>
              </div>
            </div>
          </div>
          {!editMode && (
            <div className="flex gap-3">
              <button 
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-md flex items-center hover:bg-red-200 transition-colors"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md flex items-center hover:bg-red-200 transition-colors">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <TabButton 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')}
            icon={<User className="h-5 w-5" />}
            label="Profile"
          />
          <TabButton 
            active={activeTab === 'appointments'} 
            onClick={() => setActiveTab('appointments')}
            icon={<Calendar className="h-5 w-5" />}
            label="Appointments"
          />
          <TabButton 
            active={activeTab === 'notifications'} 
            onClick={() => setActiveTab('notifications')}
            icon={<Bell className="h-5 w-5" />}
            label="Notifications"
          />
          <TabButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
          />
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {activeTab === 'profile' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              {editMode && (
                <div className="flex gap-2">
                  <button 
                    onClick={handleSaveProfile}
                    className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                  <button 
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ProfileField 
                  label="Full Name" 
                  value={formData.name} 
                  name="name"
                  icon={<User className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
                <ProfileField 
                  label="Email Address" 
                  value={formData.email} 
                  name="email"
                  icon={<Mail className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
                <ProfileField 
                  label="Phone Number" 
                  value={formData.phone} 
                  name="phone"
                  icon={<Phone className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
                <ProfileField 
                  label="Address" 
                  value={formData.address} 
                  name="address"
                  icon={<MapPin className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <ProfileField 
                  label="Department" 
                  value={formData.department} 
                  name="department"
                  icon={<FileText className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
                <ProfileField 
                  label="Role" 
                  value={formData.role} 
                  name="role"
                  icon={<UserPlus className="h-5 w-5 text-gray-400" />}
                  editMode={editMode}
                  onChange={handleInputChange}
                />
                
                {!editMode && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-3 text-gray-900">Recent Patients</h3>
                    <div className="space-y-3">
                      {user.recentPatients.map((patient, index) => (
                        <Link key={index} to={`/patients/${patient.id}`}>
                          <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors">
                            <div className="flex justify-between">
                              <div className="font-medium text-red-900">{patient.name}</div>
                              <div className="text-sm text-gray-600">{patient.date}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'appointments' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center hover:bg-red-700 transition-colors">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule New
              </button>
            </div>
            
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {user.upcomingAppointments.map((appointment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link to={`/patients/${appointment.id}`} className="text-red-600 hover:text-red-800">
                          {appointment.patientName}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <button className="text-red-600 hover:text-red-800">Reschedule</button>
                        <button className="text-red-600 hover:text-red-800">Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 text-gray-900">Calendar View</h3>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-gray-500">Calendar integration will be shown here</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
            
            <div className="space-y-6">
              <NotificationSetting 
                title="Email Notifications" 
                description="Receive notifications about patient updates via email"
                checked={formData.notifications.emailNotifications}
                onChange={() => handleToggleChange('emailNotifications')}
              />
              
              <NotificationSetting 
                title="Appointment Reminders" 
                description="Get reminders before your scheduled appointments"
                checked={formData.notifications.appointmentReminders}
                onChange={() => handleToggleChange('appointmentReminders')}
              />
              
              <NotificationSetting 
                title="System Updates" 
                description="Be notified about system maintenance and updates"
                checked={formData.notifications.systemUpdates}
                onChange={() => handleToggleChange('systemUpdates')}
              />
              
              <NotificationSetting 
                title="New Patient Alerts" 
                description="Get notified when new patients are assigned to you"
                checked={formData.notifications.newPatientAlerts}
                onChange={() => handleToggleChange('newPatientAlerts')}
              />
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900">Appearance</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
                  <select 
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    value={formData.theme}
                    onChange={(e) => setFormData({...formData, theme: e.target.value})}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System Default</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <select 
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    value={formData.language}
                    onChange={(e) => setFormData({...formData, language: e.target.value})}
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                  <select 
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    value={formData.timezone}
                    onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                  >
                    <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                    <option value="America/New_York">America/New_York (GMT-4:00)</option>
                    <option value="Europe/London">Europe/London (GMT+1:00)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (GMT+9:00)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900">Security</h3>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-gray-400 mr-3" />
                      <span>Change Password</span>
                    </div>
                    <ChevronLeft className="h-5 w-5 text-gray-400 rotate-180" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-400 mr-3" />
                      <span>Two-Factor Authentication</span>
                    </div>
                    <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Not Enabled
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 text-gray-400 mr-3" />
                      <span>Get Help</span>
                    </div>
                    <ChevronLeft className="h-5 w-5 text-gray-400 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, name, icon, editMode, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      {editMode ? (
        <input
          type="text"
          name={name}
          className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          value={value}
          onChange={onChange}
        />
      ) : (
        <div className="py-2 bg-gray-50 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md">
          {value}
        </div>
      )}
    </div>
  </div>
);

const NotificationSetting = ({ title, description, checked, onChange }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
    <div>
      <h4 className="text-base font-medium text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <label className="inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className={`relative w-14 h-7 rounded-full transition-colors ${
        checked ? 'bg-red-600' : 'bg-gray-200'
      }`}>
        <div className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform transform ${
          checked ? 'translate-x-7' : ''
        }`}></div>
      </div>
    </label>
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

export default UserProfile;