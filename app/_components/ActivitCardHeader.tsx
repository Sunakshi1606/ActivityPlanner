import { Cloud, Snowflake, Sun, Wind } from 'lucide-react';
import React from 'react';

interface ActivityCardHeaderProps {
    activity: {
        image: string;
        activity: string;
        score: number;
    };
    onClick?: () => void;
    className?: string;
}

// // Helper function to get activity icon
const getActivityIcon = (activity: string) => {
    switch (activity.toLowerCase()) {
        case 'skiing':
            return <Snowflake className="h-5 w-5 text-blue-400" aria-hidden="true" />;
        case 'surfing':
            return <Wind className="h-5 w-5 text-teal-400" aria-hidden="true" />;
        case 'outdoor sightseeing':
            return <Sun className="h-5 w-5 text-yellow-400" aria-hidden="true" />;
        case 'indoor sightseeing':
            return <Cloud className="h-5 w-5 text-gray-400" aria-hidden="true" />;
        default:
            return null;
    }
};


export const ActivityCardHeader: React.FC<ActivityCardHeaderProps> = ({
    activity,
    onClick,
    className = "h-56"
}) => (
    <header
        className={`${className} bg-cover bg-center relative ${onClick ? 'cursor-pointer' : ''}`}
        style={{ backgroundImage: `url(${activity.image})` }}
        role="img"
        aria-label={`${activity.activity} image`}
        onClick={onClick}
    >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                    {getActivityIcon(activity.activity)}
                    <h3 className="text-2xl font-bold text-white">{activity.activity}</h3>
                </div>
                <div className="text-3xl font-bold text-white bg-blue-600/90 px-3 py-1 rounded-lg">
                    {activity.score}%
                </div>
            </div>
        </div>
    </header>
);