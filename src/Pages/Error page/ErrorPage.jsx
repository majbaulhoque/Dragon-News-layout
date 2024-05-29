

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for doesn't exist.</p>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
