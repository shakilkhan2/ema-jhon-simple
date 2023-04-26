import React, { useState, useEffect } from "react";

function LoadingSpinner() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    // Simulate a delay
    const timeoutId = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    // Clean up the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {showSpinner && (
        <div
          style={{
            border: "8px solid #f3f3f3",
            borderTop: "8px solid #3498db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 2s linear infinite",
            margin: "auto",
          }}
        />
      )}
    </div>
  );
}

export default LoadingSpinner;
