import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Polestar2 from "./pages/Polestar2";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Ensure the root element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <div className="App">
          <div className="style-2">
            <div tabIndex={-1} className="style-3">
              <div
                aria-hidden="false"
                data-version="112.10.0"
                data-type="component-warehouse"
                dir="ltr"
                className="style-4"
              >
                <Header />
                <main className="style-311">
                  <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/polestar2" element={<Polestar2 />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
