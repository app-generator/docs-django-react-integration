import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>This is a React Application</h1>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("react-root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Error: #react-root div not found!");
  }
});
