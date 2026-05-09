from services.openai_service import (
    generate_ai_response
)


def analyze_autopsy_report(report_text):

    prompt = f"""
    Analyze the following autopsy report.

    Extract and explain:
    - probable cause of death
    - important injuries
    - suspicious findings
    - investigation observations
    - concise forensic summary

    Autopsy Report:
    {report_text}
    """

    response = generate_ai_response(prompt)

    return response