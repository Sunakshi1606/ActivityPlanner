import { Compass } from "lucide-react";

const PageHeader = () => (
    <header className="text-center mb-16">
        <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-6">
            <Compass className="h-12 w-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Activity Planner
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ">
            Discover the perfect time for your favorite activities with our weather forecast
        </p>
    </header>
);

export default PageHeader