import React, { useState } from "react";

const Resume = () => {
  // URL to the predefined PDF file
  const pdfUrl = "/KRISHNANATHS_Resume.pdf";

  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KRISHNANATHS_Resume.pdf";
    link.click();
  };

  const handlePreview = () => {
    setShowPreview(true); // Show the iframe on clicking Preview
  };

  const handleClosePreview = () => {
    setShowPreview(false); // Hide the iframe on clicking Close
  };

  return (
    <div className="p-4 h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-yellow-300 ">Resume</h1>

      <div className="space-x-4 flex">
        {/* Preview Button */}
        <button
          onClick={handlePreview}
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 hover:rounded-xl font-bold"
        >
          Preview Resume
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 hover:rounded-xl font-bold"
        >
          Download Resume
        </button>
      </div>

      {showPreview && (
        <div className="mt-6 w-full h-[80vh] flex flex-col items-center">
          <button
            onClick={handleClosePreview}
            className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 hover:rounded-xl font-bold"
          >
            Close Preview
          </button>
          <iframe
            src={pdfUrl}
            title="Resume Preview"
            width="100%"
            height="100%"
            className="border rounded-md mb-4"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Resume;
