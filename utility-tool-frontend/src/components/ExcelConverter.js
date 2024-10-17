import React, { useState } from 'react';

function ExcelConverter() {
  const [file, setFile] = useState(null);
  const [convertedData, setConvertedData] = useState(null);
  const [format, setFormat] = useState('csv');

  const handleFileUpload = (e) => setFile(e.target.files[0]);

  const convertFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', format);

    const response = await fetch('/convert_excel', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    setConvertedData(data);
  };

  return (
    <div>
      <h2>Excel to CSV/JSON Converter</h2>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <select onChange={(e) => setFormat(e.target.value)} value={format}>
        <option value="csv">CSV</option>
        <option value="json">JSON</option>
      </select>
      <button onClick={convertFile}>Convert</button>
      {convertedData && (
        <pre>{format === 'csv' ? convertedData.csv_data : JSON.stringify(convertedData.json_data, null, 2)}</pre>
      )}
    </div>
  );
}

export default ExcelConverter;
