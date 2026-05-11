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

from langchain_agent.prompts.autopsy_prompt import (
    AUTOPSY_SYSTEM_PROMPT
)

llm = ChatOpenAI(

    model="gpt-4o-mini",

    temperature=0.3,

    api_key="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"
)

autopsy_agent = initialize_agent(

    tools=all_tools,

    llm=llm,

    agent=
        AgentType.ZERO_SHOT_REACT_DESCRIPTION,

    verbose=True
)

# -----------------------------------
# RUN AGENT
# -----------------------------------

def run_autopsy_agent(
    question
):

    response =autopsy_agent.run(
            question
        )

    return response