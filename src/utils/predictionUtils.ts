export const getPredictionExplanation = (prediction: string): {
  label: string;
  description: string;
} => {
  const explanations: Record<string, { label: string; description: string }> = {
    '1': {
      label: 'Victoire domicile',
      description: 'L\'équipe à domicile va gagner'
    },
    '2': {
      label: 'Victoire extérieur',
      description: 'L\'équipe à l\'extérieur va gagner'
    },
    'X': {
      label: 'Match nul',
      description: 'Le match se terminera sur un match nul'
    },
    '1X': {
      label: 'Double chance domicile/nul',
      description: 'L\'équipe à domicile va gagner ou faire match nul'
    },
    'X2': {
      label: 'Double chance nul/extérieur',
      description: 'L\'équipe à l\'extérieur va gagner ou faire match nul'
    },
    '12': {
      label: 'Double chance domicile/extérieur',
      description: 'Une des deux équipes va gagner (pas de match nul)'
    }
  };

  return explanations[prediction] || {
    label: 'Indéterminé',
    description: 'Prédiction non disponible'
  };
};