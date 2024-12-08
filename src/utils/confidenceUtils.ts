export const getConfidenceColor = (confidence: number | undefined): string => {
  if (!confidence) return 'bg-dark-200 text-gray-400 border-gray-600';
  
  if (confidence >= 80) return 'bg-dark-200 text-green-400 border-green-500/30';
  if (confidence >= 60) return 'bg-dark-200 text-blue-400 border-blue-500/30';
  if (confidence >= 40) return 'bg-dark-200 text-yellow-400 border-yellow-500/30';
  return 'bg-dark-200 text-red-400 border-red-500/30';
};

export const getConfidenceLabel = (confidence: number | undefined): string => {
  if (!confidence) return 'Unknown';
  
  if (confidence >= 80) return 'Deadly Sure';
  if (confidence >= 60) return 'Fatal';
  if (confidence >= 40) return 'Risky';
  return 'Doomed';
};