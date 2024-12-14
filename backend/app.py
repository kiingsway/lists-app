import os, json
from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="../frontend/dist")
CORS(app)

@app.route("/")
def serve_ui():
    """Serve o arquivo principal da UI React."""
    return send_from_directory(app.static_folder, "index.html")

# Rota para servir arquivos estáticos (CSS, JS, etc.)
@app.route("/<path:path>")
def serve_static_files(path):
    """Serve arquivos estáticos gerados pelo Vite."""
    return send_from_directory(app.static_folder, path)


APP_CONFIG_PATH = os.path.join(os.getcwd(), "data", "_system", "appConfig.json")

# Helper function to read JSON file
def read_json_file():
    if not os.path.exists(APP_CONFIG_PATH):
        # Create an empty JSON file if it doesn't exist
        os.makedirs(os.path.dirname(APP_CONFIG_PATH), exist_ok=True)
        write_json_file({})
    try:
        with open(APP_CONFIG_PATH, 'r') as file:
            return json.load(file)
    except json.JSONDecodeError:
        raise ValueError("Invalid JSON format in the file.")

# Helper function to write JSON file
def write_json_file(data):
    with open(APP_CONFIG_PATH, 'w') as file:
        json.dump(data, file, indent=4)

# Route to get all items
@app.route('/api/app_config', methods=['GET'])
def get_items():
    try:
        data = read_json_file()
        return jsonify(data), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)