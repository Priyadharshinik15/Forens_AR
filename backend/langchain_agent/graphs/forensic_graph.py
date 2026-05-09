from typing import TypedDict

from langgraph.graph import (
    StateGraph,
    END
)

from langchain_agent.agents.autopsy_agent import (
    autopsy_agent
)

from langchain_agent.agents.evidence_agent import (
    evidence_agent
)

from langchain_agent.agents.timeline_agent import (
    timeline_agent
)

from langchain_agent.agents.risk_agent import (
    risk_agent
)

from langchain_agent.agents.summary_agent import (
    summary_agent
)


# -----------------------------------
# GRAPH STATE
# -----------------------------------
class ForensicState(
    TypedDict
):

    question: str

    answer: str


# -----------------------------------
# ROUTER
# -----------------------------------
def route_question(
    state
):

    question = (
        state["question"]
        .lower()
    )

    if "death" in question:

        return "autopsy"

    elif "evidence" in question:

        return "evidence"

    elif "timeline" in question:

        return "timeline"

    elif "risk" in question:

        return "risk"

    elif "summary" in question:

        return "summary"

    return "autopsy"


# -----------------------------------
# AUTOPSY NODE
# -----------------------------------
def autopsy_node(
    state
):

    result = autopsy_agent.run(
        state["question"]
    )

    return {
        "answer": result
    }


# -----------------------------------
# EVIDENCE NODE
# -----------------------------------
def evidence_node(
    state
):

    result = evidence_agent.run(
        state["question"]
    )

    return {
        "answer": result
    }


# -----------------------------------
# TIMELINE NODE
# -----------------------------------
def timeline_node(
    state
):

    result = timeline_agent.run(
        state["question"]
    )

    return {
        "answer": result
    }


# -----------------------------------
# RISK NODE
# -----------------------------------
def risk_node(
    state
):

    result = risk_agent.run(
        state["question"]
    )

    return {
        "answer": result
    }


# -----------------------------------
# SUMMARY NODE
# -----------------------------------
def summary_node(
    state
):

    result = summary_agent.run(
        state["question"]
    )

    return {
        "answer": result
    }


# -----------------------------------
# BUILD GRAPH
# -----------------------------------
graph = StateGraph(
    ForensicState
)

graph.add_node(
    "autopsy",
    autopsy_node
)

graph.add_node(
    "evidence",
    evidence_node
)

graph.add_node(
    "timeline",
    timeline_node
)

graph.add_node(
    "risk",
    risk_node
)

graph.add_node(
    "summary",
    summary_node
)


graph.set_conditional_entry_point(
    route_question
)


graph.add_edge(
    "autopsy",
    END
)

graph.add_edge(
    "evidence",
    END
)

graph.add_edge(
    "timeline",
    END
)

graph.add_edge(
    "risk",
    END
)

graph.add_edge(
    "summary",
    END
)


forensic_graph = graph.compile()