import React from 'react';
import { HelpCircle } from 'lucide-react';

export const PredictionLegend: React.FC = () => {
  return (
    <div className="bg-dark-100 rounded-lg border border-dark-200 p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <HelpCircle className="w-5 h-5 text-neon-red" />
        <h2 className="text-lg font-semibold text-gray-200">Prediction Legend</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { code: '1', label: 'Home Victory' },
          { code: 'X', label: 'Draw' },
          { code: '2', label: 'Away Victory' },
          { code: '1X', label: 'Home/Draw' },
          { code: 'X2', label: 'Draw/Away' },
          { code: '12', label: 'Home/Away' },
        ].map((item) => (
          <div key={item.code} className="flex items-center space-x-2">
            <span className="bg-dark-200 text-neon-red px-2 py-1 rounded text-sm font-medium w-8 text-center border border-neon-red/30">
              {item.code}
            </span>
            <span className="text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};