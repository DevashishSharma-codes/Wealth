import os
import sys
sys.path.insert(0, r"c:\Users\admin\Desktop\Wealth\wealth_wisdom\Backend")
from app import create_app, db
from app.models.assessment import AssessmentRecord
from app.models.goals import Goal

app = create_app()
with app.app_context():
    print("Tables in database:", list(db.metadata.tables.keys()))
    try:
        record = AssessmentRecord.query.first()
        print("First assessment record:", record)
        if record:
            print("Assessment ID:", record.id)
            print("Goals:", Goal.query.filter_by(assessment_id=record.id).all())
    except Exception as e:
        print("Error querying database:", e)
