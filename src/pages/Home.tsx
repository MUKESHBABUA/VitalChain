import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, LifeBuoy, CheckCircle, Database, AlertTriangle } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full mx-auto py-12">
      {/* Enhanced Hero Section - Full width with improved visuals */}
      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('Assests/pexels-tomfisk-1692693.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-transparent"></div>
        <motion.div 
          className="relative z-10 text-center px-6 md:px-16 lg:px-24 text-white max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            Ensuring Efficient Healthcare Management
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            A comprehensive solution for real-time patient data access, ensuring timely medical interventions and efficient record-keeping.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Link
              to="/registration"
              className="px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/30"
            >
              Get Started
            </Link>
            <Link
              to="/Statistics"
              className="px-10 py-4 text-lg font-semibold text-blue-700 bg-white rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Problem We Solve Section - Enhanced with animations */}
      <div className="mt-24 text-center px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Problem We Solve
        </motion.h2>
        <motion.p 
          className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          In government hospitals, the lack of a centralized patient record system results in delayed treatments, loss of patient history, and inefficiencies in emergency care.
        </motion.p>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<AlertTriangle className="text-red-600 w-16 h-16 mb-4" />}
              title="Treatment Delays"
              description="Doctors often struggle to access patient history, leading to unnecessary delays in diagnosis and treatment."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<Database className="text-blue-600 w-16 h-16 mb-4" />}
              title="No Unified Data"
              description="Each hospital maintains separate records, making it impossible to transfer patient data efficiently."
            />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section - Enhanced with better cards */}
      <div className="mt-32 text-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We provide a secure, unified digital system for real-time patient data access, ensuring seamless medical care and data-driven healthcare Statistics.
        </motion.p>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<ShieldCheck className="text-blue-600 w-16 h-16 mb-4" />}
              title="Centralized Data"
              description="A single digital record accessible from any hospital in the network."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<Heart className="text-red-600 w-16 h-16 mb-4" />}
              title="Faster Treatment"
              description="Doctors can access patient history instantly, reducing treatment time."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<LifeBuoy className="text-green-600 w-16 h-16 mb-4" />}
              title="Emergency Ready"
              description="Seamless access to critical health data for quick decision-making in emergencies."
            />
          </motion.div>
        </div>
      </div>

      {/* How It Works Section - With enhanced step cards */}
      <div className="mt-24 text-center px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Simple steps to get real-time access to patient health records.
        </motion.p>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StepCard number="1" title="Register" description="Sign up to access the system securely." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StepCard number="2" title="Upload Data" description="Hospitals update patient records in real time." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StepCard number="3" title="Access Anytime" description="Doctors & hospitals can retrieve patient history anytime." />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full border border-gray-100">
    <div className="bg-gray-50 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-center text-lg">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-100 relative overflow-hidden h-full">
    <div className="absolute -right-4 -top-4 bg-blue-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full">
      {number}
    </div>
    <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-center text-lg">{description}</p>
  </div>
);

export default Home;