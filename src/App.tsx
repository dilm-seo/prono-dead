import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Loader2, Skull } from 'lucide-react';
import { getPredictions } from './services/api';
import { PredictionCard } from './components/PredictionCard';
import { DateSelector } from './components/DateSelector';
import { PredictionLegend } from './components/PredictionLegend';
import type { Prediction } from './types/prediction';

export default function App() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getPredictions(selectedDate);
        setPredictions(response.data);
      } catch (err) {
        setError('Failed to load predictions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Skull className="w-8 h-8 text-neon-red" />
            <h1 className="text-4xl font-bold neon-text">Death Match Predictions</h1>
            <Skull className="w-8 h-8 text-neon-red" />
          </div>
          <p className="text-gray-400 mb-6">Where predictions meet their fate</p>
          <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>

        <PredictionLegend />

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-neon-red" />
          </div>
        ) : error ? (
          <div className="bg-blood/20 border border-blood text-red-400 px-4 py-3 rounded">
            {error}
          </div>
        ) : predictions.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No predictions found. They met their demise.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predictions.map((prediction) => (
              <PredictionCard key={prediction.id} prediction={prediction} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}