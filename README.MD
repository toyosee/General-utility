Utility Tool Dashboard

This project is a Utility Tool Dashboard built using React.js for the frontend and Flask for the backend. It provides several utility tools, such as an internet speed test, Excel file converter, file compression, PDF generation, and image resizing. The user interface is modern, responsive, and enhanced with icons, shadows, and animations for a great user experience.
Features

    Internet Speed Test: Check your internet speed (download, upload, and ping) with real-time graph visualization.
    Excel to CSV/JSON Converter: Convert Excel files into CSV or JSON format quickly.
    File Compression/Decompression: Compress or decompress files.
    PDF Generator: Generate PDF files from various inputs.
    Image Resizer: Resize images to desired dimensions.

Technologies Used
Frontend:

    React.js
    Chart.js: For graph visualization
    Font Awesome: For icons
    Modern CSS: For styling (shadows, layouts, and responsiveness)

Backend:

    Flask: Handles server-side processing, file conversion, speed tests, etc.

Installation

To run the project locally, follow these steps:
Prerequisites
Frontend

    Node.js (v14 or higher)
    npm or yarn

Backend

    Python (v3.7+)
    Flask
    Additional Python libraries (mentioned below)

Steps
1. Clone the repository

bash

git clone https://github.com/toyosee/General-utility
cd utility-tool-dashboard

Frontend Setup

    Navigate to the frontend/ directory:

    bash

cd frontend

Install dependencies:

bash

npm install
# or
yarn install

Start the frontend development server:

bash

npm start
# or
yarn start

Access the dashboard:

Open your browser and navigate to:

arduino

    http://localhost:3000

Backend Setup

    Navigate to the backend/ directory:

    bash

cd backend

Set up a virtual environment (optional but recommended):

bash

python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

Install the required Python dependencies:

bash

pip install -r requirements.txt

Your requirements.txt file should include:

txt

Flask
Flask-CORS
speedtest-cli
openpyxl
PyPDF2
Pillow

Run the Flask server:

bash

python app.py

By default, the Flask server will run on:

arduino

    http://localhost:5000

Connecting Frontend and Backend

Ensure that the frontend is making requests to the correct API endpoint (http://localhost:5000) for tools like the Internet Speed Test, Excel Converter, and others.
Usage
Internet Speed Test

    Click on the "Internet Speed Test" tool from the dashboard.
    Click "Run Speed Test" to initiate the test.
    The download and upload speeds, as well as ping, will be displayed along with a visual chart.

Excel to CSV/JSON Converter

    Select the "Excel Converter" tool from the dashboard.
    Upload an Excel file.
    Choose the output format (CSV or JSON).
    Click "Convert" and download the file.

File Compression/Decompression

    Select the "File Compression" tool.
    Upload the file you wish to compress or decompress.
    Click "Compress" or "Decompress."

PDF Generator

    Select the "PDF Generator" tool.
    Upload the content or fill in the necessary data.
    Click "Generate PDF" to create and download the file.

Image Resizer

    Select the "Image Resizer" tool.
    Upload the image and set the desired dimensions.
    Click "Resize" to adjust and download the image.

Flask Backend Endpoints
Endpoint	Method	Description
/speedtest	GET	Run the internet speed test and return download, upload, and ping data.
/convert-excel	POST	Convert uploaded Excel file to CSV/JSON format.
/compress-file	POST	Compress uploaded file.
/decompress-file	POST	Decompress uploaded file.
/generate-pdf	POST	Generate a PDF file based on input data.
/resize-image	POST	Resize the uploaded image to specified dimensions.
Project Structure

php

├── backend/
│   ├── app.py                 # Flask app main entry point
│   ├── requirements.txt       # Backend dependencies
│   └── ...                    # Other backend files (helpers, services, etc.)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Pages for each utility tool
│   │   ├── styles/            # CSS files
│   │   ├── App.js             # Main component
│   │   └── index.js           # Entry point
│   └── package.json
├── .gitignore
├── README.md
└── package.json

Future Enhancements

    Add more tools like Currency Converter, Unit Converter, and Password Generator.
    Optimize the backend for larger files and faster performance.
    Add user authentication and personalization for tools.
    Enable multi-language support.

Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for suggestions.

    Fork the repository.

    Create your feature branch:

    bash

git checkout -b feature/my-feature

Commit your changes:

bash

git commit -m "Add some feature"

Push to the branch:

bash

    git push origin feature/my-feature

    Open a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgements

    React.js: A JavaScript library for building user interfaces.
    Flask: Python micro-framework for backend services.
    Font Awesome: For providing icons.
    Chart.js: For graphing utilities in the speed test.
