import React, { useState } from "react";
import { Mail, Lock, Phone, Home, User, Loader2, LogIn } from "lucide-react";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (isRegistering) {
      if (!formData.firstName) newErrors.firstName = "First name is required.";
      if (!formData.lastName) newErrors.lastName = "Last name is required.";
      if (!formData.phone.match(/^\d{10}$/))
        newErrors.phone = "Enter a valid 10-digit phone number.";
      if (!formData.address) newErrors.address = "Address cannot be empty.";
    }
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      alert(`${isRegistering ? "Registration" : "Login"} successful!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F0F8FF] p-8">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
        {/* Toggle Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {isRegistering ? "Register" : "Login"}
          </h1>
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Already have an account? Login" : "New here? Register"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="mr-2 text-blue-500" /> First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="mr-2 text-blue-500" /> Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="mr-2 text-blue-500" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Lock className="mr-2 text-blue-500" /> Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <LogIn className="mr-2" />} 
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
