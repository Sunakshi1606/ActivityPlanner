import { ActivityScore, WeatherForecast } from "@/lib/types";
import { format } from "date-fns";
import { Droplets, Thermometer, Wind } from "lucide-react";

type ForecastItemProps = {
    dayScore: ActivityScore['dailyScores'][0];
    dayForecast: WeatherForecast;
};

const ForecastItem = ({ dayScore, dayForecast }: ForecastItemProps) => (
    <article className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
        <header className="flex items-center justify-between mb-2">
            <time dateTime={dayScore.date} className="font-medium text-lg">
                {format(new Date(dayScore.date), 'EEE, MMM d')}
            </time>
            <strong className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                {dayScore.score}%
            </strong>
        </header>

        <p className="text-sm text-gray-600 dark:text-gray-300">
            {dayScore.conditions}
        </p>

        <footer className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 grid grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-red-500" aria-hidden="true" />
                <span>{dayForecast.maxTemp}°C / {dayForecast.minTemp}°C</span>
            </div>
            <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-blue-500" aria-hidden="true" />
                <span>{dayForecast.precipitation} mm</span>
            </div>
            <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-gray-500" aria-hidden="true" />
                <span>{dayForecast.windspeed} km/h</span>
            </div>
        </footer>
    </article>
);
export default ForecastItem