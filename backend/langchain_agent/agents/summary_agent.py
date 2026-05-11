from langchain_openai import (
    ChatOpenAI
)

from langchain.agents import (
    initialize_agent,
    AgentType
)

from langchain_agent.tools import (
    all_tools
)

from langchain_agent.memory import (
    memory
)
from langchain_agent.prompts.summary_prompt import (
    SUMMARY_SYSTEM_PROMPT
)

llm = ChatOpenAI(

    model="gpt-4.1-mini",

    temperature=0.2,

    api_key="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"
)


summary_agent = initialize_agent(

    tools=all_tools,

    llm=llm,

    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,

    memory=memory,

    verbose=True,

    agent_kwargs={
    "system_message":
    SUMMARY_SYSTEM_PROMPT
}
)
# -----------------------------------
# RUN SUMMARY AGENT
# -----------------------------------

def generate_summary_report():

    query = """
    Generate a complete forensic investigation report.

    Include:
    - Case Overview
    - Cause of Death
    - Evidence Analysis
    - Timeline Reconstruction
    - Suspicious Findings
    - Risk Assessment
    - Final Conclusion
    """

    response = summary_agent.run(
        query
    )

    return response