
type ErrorMessageProps = {
    message: string;
};

// Component for displaying error messages
const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <aside className="text-red-500 text-center mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg" role="alert">
        {message}
    </aside>
);

export default ErrorMessage