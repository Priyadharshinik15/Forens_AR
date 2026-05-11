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
from langchain_agent.prompts.timeline_prompt import (
    TIMELINE_SYSTEM_PROMPT
)

llm = ChatOpenAI(

    model="gpt-4.1-mini",

    temperature=0.2,

    api_key="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"
)


timeline_agent = initialize_agent(

    tools=all_tools,

    llm=llm,

    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,

    memory=memory,

    verbose=True,
    max_iterations=3,

    early_stopping_method="generate",
    agent_kwargs={
    "system_message":
    TIMELINE_SYSTEM_PROMPT
}
)