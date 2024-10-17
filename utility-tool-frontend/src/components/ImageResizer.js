import React, { useState } from 'react';

function ImageResizer() {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const handleFileUpload = (e) => setFile(e.target.files[0]);

  const resizeImage = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('width', width);
    formData.append('height', height);

    const response = await fetch('http://localhost:5000/resize_image', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Image Resizer</h2>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={resizeImage}>Resize Image</button>
    </div>
  );
}

export default ImageResizer;
