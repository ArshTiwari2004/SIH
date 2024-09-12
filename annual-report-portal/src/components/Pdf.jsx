import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Assuming you're using React Spinners

const PDF = () => {
  useEffect(() => {
    // Simulate the delay for PDF generation
    const timer = setTimeout(() => {
      // Simulate going to the actual PDF page after loading
      window.location.href = "/sample-pdf.pdf"; // Replace this with your actual PDF location
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Your PDF is being generated...</h2>
      <ClipLoader color="#3498db" loading={true} size={150} />
      <p className="mt-4 text-gray-600">Please wait while we prepare your report.</p>
    </div>
  );
};

export default PDF;