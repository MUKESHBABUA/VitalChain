import React, { useState } from "react";
import { Mail, Lock, Phone, Home, User, Briefcase, Loader2, LogIn, Users } from "lucide-react";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);
  const [role, setRole] = useState("user"); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    qualification: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    if (isRegistering) {
      if (!formData.name) newErrors.name = "Name is required.";
      
      if (role === "user") {
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
        if (!formData.address) newErrors.address = "Address cannot be empty.";
      } 
      
      if (role === "admin") {
        if (!formData.qualification) newErrors.qualification = "Qualification is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      alert(`${isRegistering ? "Signup" : "Login"} successful as ${role === "admin" ? "Admin" : "User"}!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 m-4 p-8">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 transition duration-500 hover:scale-105 m-4">
        {/* Role Selection */}
        <div className="flex justify-between items-center mb-6">
          <button
            className={`px-4 py-2 text-sm font-bold rounded-lg ${role === "user" ? "bg-red-600 text-white" : "bg-gray-200"}`}
            onClick={() => setRole("user")}
          >
            <Users className="inline mr-1" size={16} /> User
          </button>
          <button
            className={`px-4 py-2 text-sm font-bold rounded-lg ${role === "admin" ? "bg-red-600 text-white" : "bg-gray-200"}`}
            onClick={() => setRole("admin")}
          >
            <Briefcase className="inline mr-1" size={16} /> Admin
          </button>
        </div>

        {/* Form Title & Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{isRegistering ? "Signup" : "Login"} as {role === "admin" ? "Admin" : "User"}</h1>
          <button className="text-red-600 hover:underline" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Already have an account? Login" : "New here? Signup"}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <User className="mr-2 text-red-500" /> Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="mr-2 text-red-500" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Lock className="mr-2 text-red-500" /> Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center" disabled={loading}>
            {loading ? <Loader2 className="animate-spin mr-2" /> : <LogIn className="mr-2" />}
            {isRegistering ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
