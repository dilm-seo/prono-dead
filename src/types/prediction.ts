export interface Prediction {
  id: string;
  federation: string;
  match_date: string;
  home_team: string;
  away_team: string;
  prediction: string;
  status: string;
  competition_name: string;
  market: string;
  result?: string;
  confidence?: number;
}

export interface PredictionResponse {
  data: Prediction[];
}