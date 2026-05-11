from flask import (
    Blueprint,
    jsonify
)

from langchain_agent.agents.summary_agent import (
    generate_summary_report
)

report_bp = Blueprint(
    "report_bp",
    __name__
)

@report_bp.route(
    "/generate-report",
    methods=["POST"]
)
def generate_report():

    report =generate_summary_report()

    return jsonify({
        "report": report
    })