import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileExcel, faFileArchive, faFilePdf, faImage } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Utility Tool Dashboard</h1>
      <ul className="dashboard-menu">
        <li>
          <Link to="/internet-speed-test" className="dashboard-link">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            Internet Speed Test
          </Link>
        </li>
        <li>
          <Link to="/excel-converter" className="dashboard-link">
            <FontAwesomeIcon icon={faFileExcel} className="icon" />
            Excel to CSV/JSON Converter
          </Link>
        </li>
        <li>
          <Link to="/file-compressor" className="dashboard-link">
            <FontAwesomeIcon icon={faFileArchive} className="icon" />
            File Compression
          </Link>
        </li>
        <li>
          <Link to="/pdf-generator" className="dashboard-link">
            <FontAwesomeIcon icon={faFilePdf} className="icon" />
            PDF Generator
          </Link>
        </li>
        <li>
          <Link to="/image-resizer" className="dashboard-link">
            <FontAwesomeIcon icon={faImage} className="icon" />
            Image Resizer
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
