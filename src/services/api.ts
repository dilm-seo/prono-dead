import axios from 'axios';
import { PredictionResponse, Prediction } from '../types/prediction';
import { enrichPredictionWithConfidence } from './confidenceService';

const API_KEY = 'ec270c7251msh7b49a329e230233p11ccaajsn298e2c9c191d';
const API_HOST = 'football-prediction-api.p.rapidapi.com';

const api = axios.create({
  baseURL: 'https://football-prediction-api.p.rapidapi.com/api/v2',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const getPredictions = async (date: string) => {
  try {
    const response = await api.get<PredictionResponse>('/predictions', {
      params: {
        market: 'classic',
        iso_date: date,
        federation: 'UEFA',
      },
    });

    // Enrichir chaque prédiction avec un score de confiance calculé si nécessaire
    const enrichedData = {
      ...response.data,
      data: response.data.data.map(enrichPredictionWithConfidence)
    };

    return enrichedData;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};