from flask import (
    Blueprint,
    request,
    jsonify
)

from langchain_openai import (
    ChatOpenAI
)

import os

ai_bp = Blueprint(
    "ai_bp",
    __name__
)

# -----------------------------------
# OPENAI MODEL
# -----------------------------------

llm = ChatOpenAI(

    model="gpt-4o-mini",

    temperature=0.3,

    api_key="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"
    
)

# -----------------------------------
# CHAT ROUTE
# -----------------------------------

@ai_bp.route(
    "/chat",
    methods=["POST"]
)
def chat():

    try:

        data = request.json

        question = data.get(
            "question"
        )

        print(
            "QUESTION:",
            question
        )

        # -----------------------------------
        # SIMPLE OPENAI TEST
        # -----------------------------------

        response = llm.invoke(
            question
        )

        print(
            "RESPONSE:",
            response.content
        )

        return jsonify({

            "answer":
                response.content
        })

    except Exception as e:

        print(
            "ERROR:",
            str(e)
        )

        return jsonify({

            "error":
                str(e)
        }), 500