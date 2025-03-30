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
  // Updated data for better visualization
  const diseaseDistribution = [
    { name: "Tuberculosis", value: 450 },
    { name: "Leprosy", value: 120 },
    { name: "HIV/AIDS", value: 300 },
    { name: "Dengue", value: 200 },
    { name: "Malaria", value: 280 },
    { name: "Polio", value: 50 },
  ];

  const ageWiseCases = [
    { age: "0-20", count: 80 },
    { age: "20-40", count: 350 },
    { age: "40-60", count: 420 },
    { age: "60+", count: 250 },
  ];

  const COLORS = ["#007BFF", "#00C49F", "#FFBB28", "#FF6347", "#8A2BE2", "#20B2AA"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10 bg-[#F0F8FF]">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10 tracking-wide">
        Disease Statistics Visualization
      </h1>

      {/* Pie Chart for Disease Distribution */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center uppercase">
          Disease Distribution (2024)
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={diseaseDistribution}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {diseaseDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for Age-Wise Cases */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center uppercase">
          Age-Wise Disease Cases
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={ageWiseCases} barCategoryGap="25%">
            <XAxis dataKey="age" stroke="#333" fontSize={14} />
            <YAxis stroke="#333" fontSize={14} />
            <Tooltip />
            <Bar dataKey="count" fill="#FF4500" barSize={50} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;