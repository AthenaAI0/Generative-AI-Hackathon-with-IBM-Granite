from flask import Flask, request, jsonify
from app import  get_data
from travel import get_location_data
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/business', methods=['POST'])
def generate_text_route():
    data = request.get_json()
    result = get_data(data['location'], data['place_type'],data['prompt'])
    return jsonify(result)

@app.route('/travel', methods=['POST'])
def travel_route():
    data = request.get_json()
    result = get_location_data(data['location'],data['prompt'])
    return jsonify(result)





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)



