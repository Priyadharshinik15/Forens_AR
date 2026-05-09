from extensions import db

from models.evidence_model import Evidence
from models.autopsy_model import AutopsyReport

from services.file_service import process_pdf_file


def upload_autopsy_report(file, case_id):

    processed_data = process_pdf_file(file)

    evidence = Evidence(
        evidence_type="Autopsy Report",
        file_name=file.filename,
        file_path=processed_data["file_path"],
        case_id=case_id
    )

    db.session.add(evidence)

    autopsy_report = AutopsyReport(
        report_text=processed_data["extracted_text"],
        case_id=case_id
    )

    db.session.add(autopsy_report)

    db.session.commit()

    return {
        "success": True,
        "message": "Autopsy report uploaded successfully",
        "extracted_text": processed_data["extracted_text"]
    }