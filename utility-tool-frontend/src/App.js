import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InternetSpeedTest from './components/InternetSpeedTest';
import ExcelConverter from './components/ExcelConverter';
import FileCompressor from './components/FileCompressor';
import PDFGenerator from './components/PDFGenerator';
import ImageResizer from './components/ImageResizer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/internet-speed-test" element={<InternetSpeedTest />} />
          <Route path="/excel-converter" element={<ExcelConverter />} />
          <Route path="/file-compressor" element={<FileCompressor />} />
          <Route path="/pdf-generator" element={<PDFGenerator />} />
          <Route path="/image-resizer" element={<ImageResizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
