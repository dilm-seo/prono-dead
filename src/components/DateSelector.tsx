import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateChange }) => {
  return (
    <div className="inline-flex items-center space-x-2 bg-dark-100 rounded-lg border border-neon-red/30 px-4 py-2 neon-border">
      <Calendar className="w-5 h-5 text-neon-red" />
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="bg-transparent border-none text-gray-200 focus:ring-2 focus:ring-neon-red/50 rounded-md"
        max={format(new Date(), 'yyyy-MM-dd')}
      />
    </div>
  );
};