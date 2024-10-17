import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import './FileCompressor.css';

function FileCompressor() {
  const [files, setFiles] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [compressionMessage, setCompressionMessage] = useState('');

  const handleFileUpload = (e) => setFiles(e.target.files);

  const compressFiles = async () => {
    setCompressing(true);
    setCompressionMessage('Compressing');
    const interval = setInterval(() => {
      setCompressionMessage((prev) => (prev.length < 14 ? prev + '.' : 'Compressing'));
    }, 500);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch('http://localhost:5000/compress', {
        method: 'POST',
        body: formData,
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compressed_files.zip';
      a.click();

      setCompressionMessage('Compression done!');
    } catch (error) {
      console.error('Error:', error);
      setCompressionMessage('Compression failed.');
    } finally {
      clearInterval(interval);
      setCompressing(false);
    }
  };

  return (
    <div className="file-compressor-container">
      <h2 className="title">File Compression</h2>
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        className="file-input"
      />
      <button
        className="compress-btn"
        onClick={compressFiles}
        disabled={compressing}
      >
        <FontAwesomeIcon icon={faCompressArrowsAlt} /> Compress Files
      </button>
      <button
        className="back-dashboard-btn"
        onClick={() => window.location.href = 'http://localhost:3000'}
      >
        Back to Dashboard
      </button>
      {compressing && (
        <p className="compression-message">{compressionMessage}</p>
      )}
    </div>
  );
}

export default FileCompressor;
