const isDevelopment = import.meta.env.MODE === 'development';

const config = {
    // In production, we use relative path '/api' which should be proxied by the web server
    // In development, we use the local backend URL
    API_URL: isDevelopment ? 'http://localhost:3001/api' : '/api'
};

export default config;
