import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './InternetSpeedTest.css';

function InternetSpeedTest() {
  const [speedData, setSpeedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading');
  const [loadingInterval, setLoadingInterval] = useState(null);

  const checkSpeed = async () => {
    setLoading(true);
    setLoadingText('Loading');
    setLoadingInterval(setInterval(() => {
      setLoadingText(prev => prev.length < 10 ? prev + '.' : 'Loading');
    }, 500));

    try {
      const response = await fetch('http://localhost:5000/speedtest');
      if (!response.ok) {
        throw new Error('Failed to fetch speed data');
      }
      const data = await response.json();
      setSpeedData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      clearInterval(loadingInterval);
    }
  };

  return (
    <div className="speed-test-container">
      <h2 style={{ fontSize: '2.5em', color: '#0d47a1' }}>Internet Speed Test</h2>
      <button className="speed-test-btn" onClick={checkSpeed}>
        <FontAwesomeIcon icon={faDownload} /> Run Speed Test
      </button>
      {loading && (
        <div className="loader-container">
          <p style={{ fontSize: '1.5em' }}>{loadingText}</p>
        </div>
      )}
      {speedData && (
        <div className="speed-results">
          <div className="speed-result">
            <p style={{ fontSize: '1.5em' }}>
              <FontAwesomeIcon icon={faDownload} /> Download Speed: {speedData.download_speed} Mbps
            </p>
            <GaugeChart id="download-speed-gauge"
                        nrOfLevels={30}
                        percent={speedData.download_speed / 100}
                        colors={['#00FF00', '#FF0000']}
                        arcWidth={0.3} />
          </div>
          <div className="speed-result">
            <p style={{ fontSize: '1.5em' }}>
              <FontAwesomeIcon icon={faUpload} /> Upload Speed: {speedData.upload_speed} Mbps
            </p>
            <GaugeChart id="upload-speed-gauge"
                        nrOfLevels={30}
                        percent={speedData.upload_speed / 100}
                        colors={['#00FF00', '#FF0000']}
                        arcWidth={0.3} />
          </div>
          <div className="speed-result">
            <p style={{ fontSize: '1.5em' }}>
              <FontAwesomeIcon icon={faGlobe} /> Latency: {speedData.ping} ms
            </p>
            <GaugeChart id="ping-speed-gauge"
                        nrOfLevels={30}
                        percent={speedData.ping / 100}
                        colors={['#00FF00', '#FF0000']}
                        arcWidth={0.3} />
          </div>
        </div>
      )}
        <button className="back-dashboard-btn" onClick={() => window.location.href = 'http://localhost:3000'}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default InternetSpeedTest;
