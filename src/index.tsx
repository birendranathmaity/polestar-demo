import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}