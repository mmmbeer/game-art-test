# Golden Rules – TGC Art Test Platform

These rules are **non-negotiable** and apply to all development phases, agents, and prompts unless explicitly overridden.

---

## 1. File Size & Modularity

* No single file may exceed **500 lines**.

  * This applies to **HTML, JavaScript, and CSS**.
* Use ES modules, imports, partials, and composition to keep files small.
* Large features must be decomposed into multiple files.

---

## 2. Single Responsibility Principle

* Files, folders, and functions must follow the **Single Responsibility Principle**.
* Organize code by **what it does**, not by file type.
* One script = one clear purpose.

Examples:

* `tests/createTest.js` (test creation logic only)
* `tests/testState.js` (state transitions only)
* `ui/tester/ratings.js` (rating UI only)

---

## 3. Reuse Before Reinvention

* Prefer **common, well-maintained libraries** when they reduce complexity.
* Do not reimplement solved problems (UUIDs, debounce, modals, sliders).
* All third-party usage must be intentional and documented.

---

## 4. No Native Browser UI Prompts

* Do **not** use:

  * `alert()`
  * `confirm()`
  * `prompt()`
* All user feedback must use:

  * Custom modals
  * Toast notifications
* UI components must be themeable and reusable.

---

## 5. Documentation Is Mandatory

* After **every completed prompt or feature**, update:

  * `docs/development-plan.md`
* Mark completed phases, features, or subtasks clearly.
* Documentation updates are not optional.

---

## 6. Feature & Function Completeness

* Always deliver **feature-complete** implementations.
* Avoid placeholders when a real implementation is reasonable.
* If something cannot be completed, state **exactly why**.

---

## 7. Database Change Discipline

* Any database structure change requires:

  * An update to `datamodel.sql`
  * A new migration file named:

    * `phase#-update.sql`
* Migration files must be additive and self-contained.

---

## 8. No Backward Compatibility Requirements

* Backward compatibility **between phases is not required**.
* Schema, APIs, and structures may change freely across phases.
* Code should favor clarity over legacy support.

---

## 9. Icons & Visual Assets

* Prefer **SVG icons** over emojis.
* Do not inline SVGs unless strictly necessary.
* Store icons in:

  * `assets/icons/`
* If icons are missing, request them explicitly from the user.

---

## 10. Styling & Themes

* Bootstrap may be used for base styling.
* Stylesheets must include:

  * `variables.css` (design tokens)
  * `themes.css` (theme loader)
* Themes must live in:

  * `themes/`
* Light and dark themes are required. Others must be easy to add.

---

## 11. Client-Side First

* Prefer **client-side logic** whenever feasible.
* Server-side code should focus on:

  * Security
  * Persistence
  * External APIs
* Do not move logic to the server without a clear justification.

---

## Enforcement

* Violating these rules is considered a defect.
* If a rule cannot be followed, the exception must be documented and justified.
