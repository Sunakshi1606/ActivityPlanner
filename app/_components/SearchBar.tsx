import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";

type SearchBarProps = {
    city: string;
    setCity: (city: string) => void;
    handleSearch: () => void;
    loading: boolean;
};

const SearchBar = ({ city, setCity, handleSearch, loading }: SearchBarProps) => (

    <section className="relative max-w-xl mx-auto mb-16">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <Input
            type="text"
            placeholder="Enter a city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-12 pr-4 h-14 text-lg rounded-2xl shadow-lg"
            aria-label="City search"
        />
        <Button
            onClick={handleSearch}
            disabled={loading}
            className="absolute right-2 top-2 h-10 px-6 rounded-xl bg-blue-600 hover:bg-blue-700"
            aria-label={loading ? "Searching..." : "Search"}
        >
            {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
                'Search'
            )}
        </Button>
    </section>
);

export default SearchBar