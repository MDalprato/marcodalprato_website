---
title: "MCP Server for Emilia-Romagna River Levels"
date: "2026-02-16"
excerpt: "A production-minded MCP server that delivers live river level data for Emilia-Romagna, built with FastMCP and enhanced with OpenAI-powered retrieval."
image: "/assets/images/mcp.png"
---

## Bridging Environmental Data and AI

Connecting public operational data to AI assistants is one of the most concrete and valuable things we can build today. When the data involves real-world environmental monitoring, the impact becomes even more meaningful.

This project is a practical **MCP server** that retrieves live river level information for Emilia-Romagna and makes it accessible through natural language workflows.

👉 **Repository:**  
[https://github.com/MDalprato/mcp_fiumi_romagna](https://github.com/MDalprato/mcp_fiumi_romagna)

---

## Reliable Hydrometric Data, Clean Interface

The starting goal was simple: create a reliable interface for hydrometric data.

Instead of forcing users to manually navigate raw endpoints, the server exposes structured MCP tools that return clear, immediately usable results. The data source is the official **Allerta Emilia-Romagna API**, with a focus on the hydrometric variable used for river-level monitoring.

Choosing an official source ensures:
- Data integrity  
- Operational reliability  
- Up-to-date environmental information  

---

## Architecture and Implementation

The core service is implemented in Python using **FastMCP** (`streams.py`), keeping the toolchain lightweight while providing a clean MCP interface.

Search quality is a key design concern. User input is rarely perfect, so station and river names are normalized by:

- Case
- Punctuation
- Accents

The matching flow works in layers:

1. Direct local matching  
2. Smart suggestions if no exact station is found  
3. Optional OpenAI-powered retrieval for fuzzy recovery  

---

## Optional OpenAI Retrieval Layer

When `OPENAI_API_KEY` and `OPENAI_VECTOR_STORE_ID` are configured, the server can leverage OpenAI file search to recover likely station names from incomplete or misspelled queries.

This makes the system significantly more forgiving and closer to real-world usage patterns, where inputs are rarely clean.

---

## Exposed MCP Tools

The server provides two practical tools:

- `livello_idrometrico`  
  Returns current river and station levels.

- `elenco_stazioni_idrometriche`  
  Lists available stations, with optional filtering.

The output is intentionally human-readable and operationally useful:
- Station name  
- Value in meters  
- Threshold levels  
- Request timestamp  

Results are designed to be immediately understandable, not just technically correct.

---

## Operational Design

The server can run:

- As a standard MCP server  
- Integrated via HTTP for GPT Actions  
- In local environments or cloud-based assistant workflows  

Production-minded features include:

- Input validation  
- Bounded `max_results`  
- Timeout handling  
- Graceful fallback behavior  

---

## Why This Matters

This is not just a demo integration.

It is a practical bridge between environmental monitoring systems and AI-native interfaces. By combining official public data, structured MCP tooling, and optional semantic retrieval, the project demonstrates how AI assistants can become reliable operational tools — not just conversational interfaces.
