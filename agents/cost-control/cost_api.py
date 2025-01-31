from flask import Flask, request, jsonify
from cost_control import assistant_run, set_input_data

app = Flask(__name__)


@app.route("/cost-control", methods=["POST"])
async def quality_control():
    data = request.get_json()
    if not data:
        return jsonify({"status_code": 400, "error": "No data provided"})

    set_input_data(data)

    response = await assistant_run()

    return jsonify({"status_code": 200, "response": response})
