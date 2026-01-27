import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const NetWorthCalculator = () => {
  const { t } = useLanguage();
  
  // State for inputs
  const [devCost, setDevCost] = useState(5000);
  const [maintCost, setMaintCost] = useState(150);
  const [hoursSaved, setHoursSaved] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [projectionMonths, setProjectionMonths] = useState(12);

  // Derived values
  const [netWorth, setNetWorth] = useState(0);
  const [roi, setRoi] = useState(0);
  const [breakEven, setBreakEven] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const monthlyValue = hoursSaved * hourlyRate;
    const monthlyNet = monthlyValue - maintCost;
    
    const totalCost = devCost + (maintCost * projectionMonths);
    const calculatedTotalValue = monthlyValue * projectionMonths;
    const calculatedNetWorth = calculatedTotalValue - totalCost;
    const calculatedRoi = totalCost > 0 ? ((calculatedNetWorth / totalCost) * 100) : 0;
    const calculatedBreakEven = monthlyNet > 0 ? (devCost / monthlyNet) : 0;

    setNetWorth(calculatedNetWorth);
    setRoi(calculatedRoi);
    setBreakEven(calculatedBreakEven);
    setTotalValue(calculatedTotalValue);
  }, [devCost, maintCost, hoursSaved, hourlyRate, projectionMonths]);

  const chartData = {
    labels: Array.from({ length: projectionMonths }, (_, i) => `Mo ${i + 1}`),
    datasets: [
      {
        label: 'Total Cost',
        data: Array.from({ length: projectionMonths }, (_, i) => devCost + (maintCost * (i + 1))),
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Total Value Generated',
        data: Array.from({ length: projectionMonths }, (_, i) => (hoursSaved * hourlyRate) * (i + 1)),
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#9CA3AF',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9CA3AF',
          callback: (value: any) => '$' + value.toLocaleString(),
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
      },
      x: {
        ticks: {
          color: '#9CA3AF',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Agent Net Worth Calculator
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estimate the financial impact and ROI of implementing custom AI agents in your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-cyan-400">
              <Calculator className="h-5 w-5" />
              AI Agent Parameters
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Development Cost (One-time)</span>
                  <span className="text-cyan-400 font-bold">${devCost.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="500"
                  value={devCost}
                  onChange={(e) => setDevCost(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Monthly Maintenance (APIs, Hosting)</span>
                  <span className="text-cyan-400 font-bold">${maintCost.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={maintCost}
                  onChange={(e) => setMaintCost(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Hours Saved Per Month</span>
                  <span className="text-cyan-400 font-bold">{hoursSaved} hrs</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="160"
                  step="1"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Hourly Value of Task ($)</span>
                  <span className="text-cyan-400 font-bold">${hourlyRate}/hr</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
                  <span>Projection Period (Months)</span>
                  <span className="text-cyan-400 font-bold">{projectionMonths} Mo</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="1"
                  value={projectionMonths}
                  onChange={(e) => setProjectionMonths(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 text-center">
                <div className={`text-2xl font-bold ${netWorth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  ${netWorth.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Net Worth (Year 1)</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 text-center">
                <div className={`text-2xl font-bold ${roi >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {roi.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">ROI</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {breakEven > 0 && breakEven < Infinity ? `${breakEven.toFixed(1)} Mo` : 'Never'}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Break-even Point</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-violet-400">
                  ${totalValue.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Total Value Gen.</div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-[340px]">
              <h3 className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Financial Projection
              </h3>
              <div className="h-[250px]">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to automate your workflows?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experts can help you design, build, and deploy custom AI agents that realize these ROI projections for your specific business needs.
          </p>
          <button 
            onClick={() => window.location.href = '#contact'}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 mx-auto"
          >
            Get a Custom Assessment
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetWorthCalculator;
