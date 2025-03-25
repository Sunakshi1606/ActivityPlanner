import { MapPin } from "lucide-react";

type LocationDisplayProps = {
    city: string;
    country: string
};

const LocationDisplay = ({ city, country }: LocationDisplayProps) => (
    <header className="flex items-center justify-center gap-2 mb-8 text-gray-600 dark:text-gray-300">
        <MapPin className="h-5 w-5" aria-hidden="true" />
        <h2 className="text-lg">
            Weather forecast for <strong>{city}, {country}</strong>
        </h2>
    </header>
);

export default LocationDisplay