import React from 'react';
import { Trophy, Calendar, Flag, HelpCircle, Skull } from 'lucide-react';
import { Prediction } from '../types/prediction';
import { formatMatchDate } from '../utils/dateUtils';
import { getPredictionExplanation } from '../utils/predictionUtils';
import { ConfidenceIndicator } from './ConfidenceIndicator';

interface PredictionCardProps {
  prediction: Prediction;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const predictionInfo = getPredictionExplanation(prediction.prediction);

  return (
    <div className="bg-dark-100 rounded-lg border border-dark-200 p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-neon-red" />
          <span className="font-semibold text-lg text-gray-200">{prediction.competition_name}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{formatMatchDate(prediction.match_date)}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-center flex-1">
          <p className="font-bold text-lg text-gray-200">{prediction.home_team}</p>
          <span className="text-sm text-gray-500">Home</span>
        </div>
        <div className="text-center px-4">
          <Skull className="w-6 h-6 text-neon-red mx-auto" />
          <span className="text-sm text-gray-500">VS</span>
        </div>
        <div className="text-center flex-1">
          <p className="font-bold text-lg text-gray-200">{prediction.away_team}</p>
          <span className="text-sm text-gray-500">Away</span>
        </div>
      </div>

      <div className="border-t border-dark-200 pt-4">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flag className="w-4 h-4 text-neon-red" />
              <span className="font-medium text-gray-300">Prediction:</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-dark-200 text-neon-red px-3 py-1 rounded-full font-medium border border-neon-red/30">
                {predictionInfo.label}
              </span>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-500 cursor-help" />
                <div className="absolute right-0 w-64 p-2 bg-dark-200 text-gray-300 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-neon-red/30">
                  {predictionInfo.description}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-300">Confidence:</span>
            <ConfidenceIndicator confidence={prediction.confidence} />
          </div>

          <div className="text-sm text-gray-500">
            Code: {prediction.prediction}
          </div>
        </div>
      </div>
    </div>
  );
};