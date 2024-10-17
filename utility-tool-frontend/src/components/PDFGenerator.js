import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './PDFGenerator.css';

function PDFGenerator() {
  const [htmlContent, setHtmlContent] = useState('');

  const generatePDF = async () => {
    const formData = new FormData();
    formData.append('html_content', htmlContent);
    const response = await fetch('http://localhost:5000/generate_pdf', {
      method: 'POST',
      body: formData,
    });
    const pdfBlob = await response.blob();
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf';
    a.click();
  };

  return (
    <div className="pdf-generator-container">
      <h2 className="title">PDF Generator</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter HTML content here..."
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        className="input-area"
      />
      <button className="generate-btn" onClick={generatePDF}>
        <FontAwesomeIcon icon={faFilePdf} /> Generate PDF
      </button>

      <button className="back-dashboard-btn" onClick={() => window.location.href = 'http://localhost:3000'}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default PDFGenerator;
