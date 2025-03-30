import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Statistics = () => {
  // Dummy data for policy impact statistics
  const diseaseDistribution = [
    { name: "TB Cases", value: 250 },
    { name: "Leprosy Cases", value: 80 },
    { name: "HIV/AIDS Cases", value: 120 },
    { name: "Vector-Borne Diseases", value: 160 },
    { name: "Polio Cases", value: 20 },
  ];

  const ageWiseCases = [
    { age: "0-20", count: 50 },
    { age: "20-40", count: 200 },
    { age: "40-60", count: 300 },
    { age: "60+", count: 150 },
  ];

  const insuranceCoverage = [
    { name: "PM-JAY Beneficiaries", value: 12 },
    { name: "Elderly Insurance", value: 6 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Government Health Data Statistics
      </h1>

      {/* Pie Chart for Disease Distribution */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Disease Distribution (2024)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={diseaseDistribution}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {diseaseDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for Age-Wise Cases */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Age-Wise Disease Cases
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ageWiseCases}>
            <XAxis dataKey="age" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8042" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Insurance Coverage */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Health Insurance Coverage (in Crores)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={insuranceCoverage}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#00C49F"
              dataKey="value"
              label
            >
              {insuranceCoverage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Government Statistics Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Government Statistics</h2>
        <ul className="space-y-4 text-gray-600">
          <li>
            <strong>Revised National Tuberculosis Control Programme (RNTCP):</strong> 
            Launched to detect and treat TB using the DOTS strategy.
          </li>
          <li>
            <strong>National Leprosy Eradication Programme (NLEP):</strong> 
            Provides free multidrug therapy and early detection strategies.
          </li>
          <li>
            <strong>National AIDS Control Programme (NACP):</strong> 
            Focuses on HIV/AIDS prevention and reducing social stigma.
          </li>
          <li>
            <strong>National Vector Borne Disease Control Programme (NVBDCP):</strong> 
            Controls malaria, dengue, and other vector-borne diseases.
          </li>
          <li>
            <strong>Pulse Polio Programme:</strong> 
            Ensures immunization for children under five years to eradicate polio.
          </li>
        </ul>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Initiatives & Developments
        </h2>
        <p className="text-gray-700">
          In 2024, the Indian government expanded healthcare coverage for citizens above 70 years,
          providing an annual insurance of ₹5 lakh per family. This move benefits an additional 60 million people.
        </p>
      </div>
    </div>
  );
};

export default Statistics;
