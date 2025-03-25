import { ActivityScore, SearchedLocation, WeatherForecast } from "@/lib/types";

export async function getLocationData(city: string): Promise<SearchedLocation> { 
  const geoResponse = await fetch(
    `https://localhost:7004/api/GeoCode/coordinates/`+encodeURIComponent(city)    
  );
  const geoData = await geoResponse.json();    
  if (!geoData) {
    throw new Error('City not found');
  }
  return geoData;
}

export async function getWeatherForecast(city:string): Promise<WeatherForecast[]> {  
    const geoResponse = await fetch(
        `https://localhost:7004/api/Weather/forecast/`+encodeURIComponent(city)    
      );
      const geoData = await geoResponse.json();        
      if (!geoData) {
        throw new Error('City not found');
      }
      return geoData;
}

export async function  evaluateActivities(city: string): Promise<ActivityScore[]> {   
    const geoResponse = await fetch(
        `https://localhost:7004/api/WeatherActivity/activities/`+encodeURIComponent(city)    
      );
      const geoData = await geoResponse.json();        
      if (!geoData) {
        throw new Error('City not found');
      }
      return geoData;
}