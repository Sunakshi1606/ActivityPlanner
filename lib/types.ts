export interface WeatherData {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    snowfall_sum: number[];
    windspeed_10m_max: number[];
  };
}

export interface WeatherForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  precipitation: number;
  windspeed: number;
}

export interface DailyScore {
  date: string;
  score: number;
  conditions: string;
}

export interface ActivityScore {
  activity: string;
  score: number;
  reason: string;
  image: string;
  dailyScores: DailyScore[];
}

export interface SearchedLocation {
  latitude :number;
  longitude :number;
  name :string
  country :string
}