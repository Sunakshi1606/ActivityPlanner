// ActivityDetails.tsx
import React from 'react';
import { Progress } from '@/components/ui/progress';
import ForecastItem from './DailyForecast';

interface ActivityDetailsProps {
    activity: {
        score: number;
        reason: string;
        dailyScores: any[];
    };
    forecast: any[];
}

export const ActivityDetails = ({ activity, forecast }: ActivityDetailsProps) => (
    <div className="p-6">
        <Progress
            value={activity.score}
            className="mb-6 h-2.5"
        // aria-label={`${activity.activity} suitability score: ${activity.score}%`}
        />
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            {activity.reason}
        </p>

        <section className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {activity.dailyScores.map((day, index) => (
                <ForecastItem
                    key={day.date}
                    dayScore={day}
                    dayForecast={forecast[index]}
                />
            ))}
        </section>
    </div>
);