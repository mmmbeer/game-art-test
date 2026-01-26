# Codex Agents – TGC Art Test Platform

This file defines specialized coding and reasoning agents for building the **TGC Art Test Platform**. Each agent has a clear scope, constraints, and handoff rules. Agents are intended to work sequentially or in parallel without overlapping responsibilities.

All agents must respect the architecture and phases defined in `TGC Art Test Platform – Development Plan`.

---

## Global Rules (All Agents)

* Do not change database schema without explicit instruction
* Do not introduce frontend frameworks (React, Vue, etc.)
* Prefer small, testable modules
* Every externally visible identifier must be UUID-based
* Mobile UX has priority over desktop
* No agent may silently expand scope
* If an assumption is required, state it explicitly

---

## Agent 01 – Architecture & Systems Agent

**Primary Responsibility**

* Overall system structure
* Folder layout
* Service boundaries
* Environment configuration

**Scope**

* Node.js server architecture
* API routing structure
* Separation of concerns

**Deliverables**

* Server folder tree
* Base Express (or native HTTP) setup
* Environment variable contract

**Explicitly Excluded**

* UI markup
* TGC-specific logic

**Success Criteria**

* Clean startup
* Health endpoint works

---

## Agent 02 – Database & Persistence Agent

**Primary Responsibility**

* Data modeling
* SQL schema
* Migrations

**Scope**

* MySQL schema design
* Indexing strategy
* UUID handling

**Deliverables**

* `schema.sql`
* Migration notes

**Explicitly Excluded**

* API logic
* Business rules

**Success Criteria**

* Schema loads cleanly
* Referential integrity holds

---

## Agent 03 – TGC Integration Agent

**Primary Responsibility**

* Interaction with The Game Crafter API

**Scope**

* Authentication flow
* Token storage
* Game and asset fetching

**Deliverables**

* TGC API client module
* Normalized asset data output

**Explicitly Excluded**

* UI rendering
* Database schema changes

**Success Criteria**

* Games fetched reliably
* Assets normalized across types

---

## Agent 04 – Test Engine Agent

**Primary Responsibility**

* Art test lifecycle

**Scope**

* Random asset selection
* Test creation
* Test state transitions

**Deliverables**

* Test creation service
* UUID-based test routing

**Explicitly Excluded**

* Vote UI
* Analytics

**Success Criteria**

* Tests create consistently
* Vote caps enforced

---

## Agent 05 – Tester UX Agent (Mobile-First)

**Primary Responsibility**

* Tester-facing experience

**Scope**

* Art presentation
* Rating controls
* Comment input

**Deliverables**

* Mobile HTML templates
* JS interaction logic

**Explicitly Excluded**

* Creator dashboards
* Data aggregation

**Success Criteria**

* Vote submitted in <10 seconds
* One-hand usability

---

## Agent 06 – Review Assist Tools Agent

**Primary Responsibility**

* Visual evaluation aids

**Scope**

* Template overlays
* Background color switching
* Real-size scaling (300 DPI)
* Random drift rendering

**Deliverables**

* Canvas-based render helpers
* Overlay toggles

**Explicitly Excluded**

* Scoring logic
* Test lifecycle

**Success Criteria**

* Visual changes do not affect data

---

## Agent 07 – Creator Dashboard Agent

**Primary Responsibility**

* Creator-facing controls and visibility

**Scope**

* Test monitoring
* Pause / resume
* Progress indicators

**Deliverables**

* Dashboard views
* Control endpoints

**Explicitly Excluded**

* Tester UI
* TGC API logic

**Success Criteria**

* Real-time-ish feedback
* Safe state transitions

---

## Agent 08 – Results & Analysis Agent

**Primary Responsibility**

* Aggregation and reporting

**Scope**

* Score averaging
* Comment collation
* Per-asset summaries

**Deliverables**

* Results API
* Results views

**Explicitly Excluded**

* Test creation
* Vote submission

**Success Criteria**

* Accurate statistics
* Clear per-asset insights

---

## Agent 09 – Security & Abuse Mitigation Agent

**Primary Responsibility**

* Platform integrity

**Scope**

* Rate limiting
* Duplicate vote prevention
* Token protection

**Deliverables**

* Middleware
* Abuse rules

**Explicitly Excluded**

* UX decisions

**Success Criteria**

* No trivial abuse vectors

---

## Agent 10 – Integration & Release Agent

**Primary Responsibility**

* Final assembly

**Scope**

* Cross-agent wiring
* Deployment readiness
* Smoke testing

**Deliverables**

* Deployment checklist
* Release notes

**Explicitly Excluded**

* Feature expansion

**Success Criteria**

* All phases run end-to-end

---

## Handoff Rules

* Agents communicate via documented outputs only
* No agent edits another agent’s deliverables directly
* Conflicts escalate to Architecture Agent
