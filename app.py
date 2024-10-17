from flask import Flask, request, jsonify, send_file, make_response
from flask_cors import CORS
import speedtest
import pandas as pd
import zipfile
import os
from werkzeug.utils import secure_filename
# from weasyprint import HTML
from PIL import Image

app = Flask(__name__)
CORS(app)

# internet speed test checker
@app.route('/speedtest', methods=['GET'])
def internet_speed_test():
    try:
        st = speedtest.Speedtest()
        # Get the best server without a timeout parameter
        st.get_best_server()
        download_speed = st.download() / 10**6  # Convert to Mbps
        upload_speed = st.upload() / 10**6  # Convert to Mbps
        ping = st.results.ping
        return jsonify({
            'download_speed': round(download_speed, 2),
            'upload_speed': round(upload_speed, 2),
            'ping': round(ping, 2)
        })
    except Exception as e:
        print(f"Error occurred: {e}")  # Log the error
        return jsonify({'error': str(e)}), 500  # Return error message and status code
    

# Excel to CSV/JSON Converter
@app.route('/convert_excel', methods=['POST'])
def convert_excel():
    file = request.files['file']
    convert_type = request.form.get('type')
    df = pd.read_excel(file)

    if convert_type == 'csv':
        csv_data = df.to_csv(index=False)
        return jsonify({'csv_data': csv_data})

    elif convert_type == 'json':
        json_data = df.to_json(orient='records')
        return jsonify({'json_data': json_data})

# File Compressor
@app.route('/compress', methods=['POST'])
def compress_files():
    files = request.files.getlist('files')
    zip_filename = "compressed_files.zip"
    
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        for file in files:
            filename = secure_filename(file.filename)
            file.save(filename)
            zipf.write(filename)
            os.remove(filename)

    return jsonify({'message': 'Files compressed successfully!'})

# PDF Generator
# @app.route('/generate_pdf', methods=['POST'])
# def generate_pdf():
#     html_content = request.form['html_content']
#     pdf = HTML(string=html_content).write_pdf()
    
#     response = make_response(pdf)
#     response.headers['Content-Type'] = 'application/pdf'
#     response.headers['Content-Disposition'] = 'attachment; filename=document.pdf'
#     return 

# Image Resizer
@app.route('/resize_image', methods=['POST'])
def resize_image():
    file = request.files['file']
    width = int(request.form['width'])
    height = int(request.form['height'])

    img = Image.open(file)
    resized_img = img.resize((width, height))
    
    output_filename = "resized_image.jpg"
    resized_img.save(output_filename)
    return jsonify({'message': 'Image resized successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
