from openai import OpenAI


client = OpenAI(
    api_key="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"
)


def generate_ai_response(
    user_message,
    context=""
):

    system_prompt = f"""
You are an AI forensic investigation assistant.

Analyze:
- forensic evidence
- autopsy reports
- crime scene documents
- investigation files

Use ONLY the provided context.

If the answer is not found,
say:
"I could not find enough forensic evidence."

Context:
{context}
"""

    response = client.chat.completions.create(

        model="gpt-4.1-mini",

        messages=[

            {
                "role": "system",
                "content": system_prompt
            },

            {
                "role": "user",
                "content": user_message
            }
        ],

        temperature=0.3
    )

    return (
        response
        .choices[0]
        .message
        .content
    )