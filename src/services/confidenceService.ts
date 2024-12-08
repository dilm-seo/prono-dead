import { Prediction } from '../types/prediction';

interface TeamStrength {
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
}

// Simulated historical data (in a real app, this would come from an API or database)
const teamStrengths = new Map<string, TeamStrength>();

export const calculateConfidence = (prediction: Prediction): number => {
  // Si la confiance est déjà définie, on la retourne
  if (prediction.confidence) {
    return prediction.confidence;
  }

  // Facteurs de base pour le calcul de la confiance
  let baseConfidence = 50; // On commence avec une confiance moyenne

  // Ajustement selon le type de prédiction
  switch (prediction.prediction) {
    case '1':
    case '2':
      // Prédiction simple = plus fiable
      baseConfidence += 10;
      break;
    case 'X':
      // Match nul = moins fiable
      baseConfidence -= 5;
      break;
    case '1X':
    case 'X2':
    case '12':
      // Double chance = fiabilité moyenne
      baseConfidence += 5;
      break;
  }

  // Ajustement selon la compétition
  if (prediction.competition_name.toLowerCase().includes('champions league')) {
    baseConfidence += 5; // Plus de données disponibles pour les grandes compétitions
  }

  // Ajustement selon la fédération
  if (prediction.federation === 'UEFA') {
    baseConfidence += 5; // Plus fiable pour les matchs UEFA
  }

  // Normalisation entre 0 et 100
  return Math.min(Math.max(baseConfidence, 0), 100);
};

export const enrichPredictionWithConfidence = (prediction: Prediction): Prediction => {
  if (!prediction.confidence) {
    return {
      ...prediction,
      confidence: calculateConfidence(prediction)
    };
  }
  return prediction;
};