import React from 'react';
import Card1 from '../../assets/images/Card1.png';
import { LuTrendingUpDown } from 'react-icons/lu';

function AuthLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Auth Form Section */}
      <div className="w-full md:w-[60%] px-6 sm:px-12 py-8 relative z-10 bg-white">
        <h2 className="text-xl font-semibold text-black mb-8">Expense Tracker</h2>
        {children}
      </div>

      {/* Right Image + Decorative Section */}
      <div className="hidden md:block w-[40%] relative bg-violet-50 overflow-hidden">
        {/* Decorative Boxes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 z-0"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] right-10 z-0"></div>
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 z-0"></div>

        {/* Stat Info Card */}
        <div className="grid grid-cols-1 z-20 relative px-8 pt-16">
          <StatInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-purple-600"
          />
        </div>

        {/* Banner Image */}
        <img
          src={Card1}
          alt="Card"
          className="absolute bottom-10 rounded-lg left-1/2 -translate-x-1/2 w-64 lg:w-[90%] z-10 shadow-lg shadow-blue-400/15"
        />
      </div>
    </div>
  );
}

export default AuthLayout;

const StatInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10 items-center">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm font-medium text-gray-700">{label}</h6>
        <span className="text-lg font-semibold text-gray-900">${value}</span>
      </div>
    </div>
  );
};
