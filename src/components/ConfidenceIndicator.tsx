import React from 'react';
import { Gauge } from 'lucide-react';
import { getConfidenceColor, getConfidenceLabel } from '../utils/confidenceUtils';

interface ConfidenceIndicatorProps {
  confidence?: number;
}

export const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({ confidence }) => {
  const colorClass = getConfidenceColor(confidence);
  const label = getConfidenceLabel(confidence);

  return (
    <div className="flex items-center space-x-2">
      <Gauge className="w-4 h-4 text-neon-red" />
      <div className="flex items-center space-x-2">
        <span className={`px-2 py-1 rounded-full text-sm font-medium border ${colorClass}`}>
          {label}
        </span>
        {confidence && (
          <span className="text-sm text-gray-500">
            ({confidence}%)
          </span>
        )}
      </div>
    </div>
  );
};