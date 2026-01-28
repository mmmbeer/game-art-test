# TGC Art Test Platform - Full Development Plan

## 1. Purpose & Goals

Build a mobile-first web application that integrates with **The Game Crafter (TGC)** API to allow creators to run structured art tests on their printable game assets.

Core goals:

* Authenticate a TGC user via TGC SSO
* Let them select a game and its printable assets
* Randomly sample art assets into controlled art tests
* Collect fast, lightweight feedback from testers via a shareable UUID URL
* Aggregate, monitor, pause, resume, and analyze test results
* Remain simple, fast, and usable on mobile devices

All user-facing identifiers (tests, sessions, links) must be UUID-based.

All development must follow the docs/golden-rules.md ("golden rules").

TGC's API documentation is saved to docs/tgc-api.md.

---

## 2. Core Concepts & Terminology

### 2.1 Art Test

A **test** consists of:

* One requesting user (TGC account)
* One selected game
* A random group of **N = 10 art assets**
* A voting target of **10 votes per asset**
* A public UUID test URL

### 2.2 Art Asset

Any printable artwork associated with a game, including:

* Cards / decks
* Boxes
* Mats
* Custom cutouts
* Other printable components exposed by TGC

Each asset has:

* Asset UUID (internal)
* Type (card, box, etc.)
* Image(s)
* DPI metadata

### 2.3 Tester Session

A tester is an anonymous participant who:

* Accesses a UUID test URL
* Reviews art pieces
* Scores them on defined criteria
* Optionally leaves comments

No login required for testers. Public art test links must allow anonymous voting.

---

## 3. Functional Requirements

### 3.1 User (Creator) Features

* Login via TGC SSO
* Landing page for unauthenticated users with SSO entry point
* Select a game
* Browse all printable assets in that game
* Start an art test:

  * Randomly select 10 assets
  * Generate shareable UUID URL
* Monitor test progress in real time
* View aggregated results per asset
* Stop, restart, or re-roll tests
* View historical tests

### 3.2 Tester Features (Mobile-First)

* View one art piece at a time
* Rate quickly using sliders or taps
* Scoring dimensions (1-5):

  * Professionalism
  * Appeal
  * Understandability (or similar)
* Optional comment field

#### Review Assistance Controls

* Toggle template overlays (cut lines, box folds, etc.)
* Change background color (white, gray, black, custom)
* View at approximate real-world size (300 DPI scaling)
* Enable **random drift** (0-80px, any direction)

---

## 4. Non-Functional Requirements

* Mobile-first UI
* Fast interaction (few taps per asset)
* Stateless tester access via UUID
* MySQL for persistence
* Node.js backend
* HTML / CSS / JS frontend
* Optional PHP thin layer for API key protection
* Secure storage of TGC credentials

---

## 5. High-Level Architecture

```
[ Mobile / Desktop Browser ]
            |
            v
[ Frontend (HTML / JS / CSS) ]
            |
            v
[ Node.js API Server ]
            |
            +--> MySQL Database
            |
            +--> PHP Auth Gateway (optional)
            |
            +--> The Game Crafter API
```

---

## 6. Database Design (Initial)

### 6.1 Users

* id (int)
* uuid
* tgc_user_id
* display_name
* created_at

### 6.2 Games

* id
* uuid
* tgc_game_id
* user_id
* name

### 6.3 Assets

* id
* uuid
* tgc_asset_id
* game_id
* asset_type
* image_url
* dpi
* metadata (JSON)

### 6.4 Tests

* id
* uuid
* user_id
* game_id
* status (active, paused, completed)
* created_at
* stopped_at

### 6.5 Test_Assets

* id
* test_id
* asset_id
* order_index

### 6.6 Votes

* id
* test_asset_id
* professionalism (1-5)
* appeal (1-5)
* understandability (1-5)
* comment (TEXT)
* created_at

---

## 7. API Design (Internal)

### Creator APIs

* GET /auth/tgc/sso/start
* GET /auth/tgc/sso/callback
* GET /games
* GET /games/:uuid/assets
* POST /tests
* POST /tests/:uuid/stop
* POST /tests/:uuid/restart
* GET /tests/:uuid/status
* GET /tests/:uuid/results

### Tester APIs

* GET /t/:uuid
* POST /t/:uuid/vote

---

## 8. Phased Development Plan

## Phase 0 - Foundation & Setup (COMPLETED)

**Goals**

* Repo setup
* Database schema
* Basic Node.js server
* Local dev environment

**Deliverables**

* MySQL schema
* Node.js API skeleton
* Env config
* Basic health endpoint

**Implemented**

* Repository folder structure per Phase 0
* Express server skeleton with centralized bootstrap
* Environment configuration via .env.example and loader
* MySQL datamodel.sql for users, games, assets, tests, test_assets, votes
* GET /health endpoint returning status, timestamp, environment
* Minimal static index.html

**Testing**

* Manual API calls
* DB migrations verified

---

## Phase 1 - TGC Authentication & Game Fetching (COMPLETED)

**Goals**

* Authenticate user via TGC SSO
* Secure token handling
* Fetch games list

**Features**

* SSO login flow
* Game selection UI

**Implemented**

* TGC session authentication via `/api/session/sso/{sso_id}`
* Secure server-side session storage and UUID session cookie
* `/auth/tgc/sso/start`, `/auth/tgc/sso/callback`, and `/games` endpoints
* User persistence with UUID mapping to TGC user id
* Game fetching via user relationships or designer games
* Normalized game storage without duplicates
* Mobile-first landing page with SSO entry and game selection UI with Bootstrap
* Light and dark themes with variables and theme loader

**Assumptions**

* `TGC_API_KEY_ID` is available in server environment variables
* The authenticated account can complete the TGC SSO flow
* User relationships include designers or games for game retrieval

**Constraints**

* Selected game is stored in local browser storage only

**Testing**

* Real TGC account
* Multiple games

---

## Phase 2 - Asset Discovery & Normalization (COMPLETED)

**Goals**

* Fetch all printable assets per game
* Normalize asset metadata

**Features**

* Asset listing
* Asset preview

**Implemented**

* Dynamic asset discovery per game by inspecting TGC game relationships for file-backed items
* Asset normalization with UUIDs, primary image URL, available DPI, and full JSON metadata
* Asset persistence with update-or-insert behavior to avoid duplicates
* `GET /games/:uuid/assets` endpoint returning grouped assets and type counts
* Designer-aware game list with deterministic UUID mapping for TGC designer ids
* Mobile-first game browser with search, designer filter, and selection state
* Asset browser with type grouping, expand/collapse, lazy-loaded previews, and load-more pagination
* Asset preview modal with DPI and TGC asset id metadata

**Assumptions**

* File metadata may include DPI information; otherwise DPI is stored as `0`
* Asset types are inferred dynamically from relationship keys or object types
* Designer names are resolved when possible from TGC and cached client-side per session

**Constraints**

* Designer data is not persisted; UUIDs are derived deterministically from TGC designer ids

**Testing**

* Mixed asset types
* Large games

---

## Phase 3 - Art Test Creation Engine

**Goals**

* Random selection logic
* Test persistence
* UUID generation

**Features**

* Create test
* Generate public link

**Implemented**

* Asset-type selection UI on the game assets page with deck-to-card expansion guidance
* Test preview endpoint and UI to re-roll randomized 10-asset selections
* Test creation endpoint storing tests and test_assets with UUID-based public links
* Optional "start from preview" flow to preserve the last randomized selection
* Per-type asset selection (default select all; allow excluding specific assets like decks)
* Preview modal with horizontally scrolling randomized assets
* Deck asset discovery now pulls deck card relationships for card inclusion
* Card assets are hidden from asset groups and only flow into tests via their parent decks
* Card assets are split into face/back entries so deck selection includes both sides
* Asset type rows now include a preview strip with expandable selection lists and tri-state checkmarks
* Deck preview strips include card faces/backs via deck-to-card mappings

**Testing**

* Repeated randomization
* Edge cases (few assets)
* Deck selections expand into card pools
* Public test links generated and displayed

---

## Phase 4 - Tester Experience (Mobile-First)

**Goals**

* Fast, clean tester UI

**Features**

* Art viewer
* Scoring UI
* Comments

**Implemented**

* Public tester route at `/t/:uuid` serving a dedicated mobile-first voting UI
* Tester API endpoints:

  * `GET /t/:uuid/next` for initial asset selection
  * `POST /t/:uuid/next` to fetch the next asset while excluding already-voted asset UUIDs
  * `POST /t/:uuid/vote` to submit ratings and optional comment
* Randomized asset selection limited to assets below the minimum vote threshold
* Vote threshold configurable via `TEST_MIN_VOTES_PER_ASSET`
* Local tester history stored in `localStorage` to avoid repeat votes on reload
* Shareable test link controls (copy + native share when available)
* Vote progress panel showing remaining assets and vote target per asset
* Custom toast feedback for errors and vote confirmation
* Games dashboard now flags games with existing tests (active or past)
* Tester UI redesigned to a compact, sticky-asset layout with star ratings and zoomable artwork

**Testing**

* Mobile browsers
* One-hand usability

---

## Phase 5 - Review Assistance Tools

**Goals**

* Better evaluation accuracy

**Features**

* Template overlays
* Background color switching
* Real-size scaling
* Random drift toggle

**Testing**

* DPI accuracy
* Overlay correctness

---

## Phase 6 - Test Monitoring & Control

**Goals**

* Full creator visibility

**Features**

* Progress per asset
* Pause / resume tests
* Auto-complete at vote limit

**Testing**

* Concurrent testers
* Pause mid-vote

---

## Phase 7 - Results & Analysis

**Goals**

* Actionable feedback

**Features**

* Aggregated scores
* Per-asset breakdown
* Comment review

**Testing**

* Statistical accuracy

---

## Phase 8 - Hardening & Polish

**Goals**

* Production readiness

**Features**

* Rate limiting
* Abuse prevention
* UI polish
* Error handling

**Testing**

* Load testing
* Mobile stress tests

---

## 9. Future Extensions (Out of Scope)

* Comparative A/B tests
* Weighted reviewer trust
* Export to CSV
* AI-assisted insight summaries

---

## 10. Success Criteria

* Tests can be created in under 30 seconds
* Testers can submit a vote in under 10 seconds
* Mobile UX is primary
* Zero tester login friction



