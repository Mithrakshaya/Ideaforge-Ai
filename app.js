const app = document.getElementById("app");

const domains = [
  "Web Development",
  "AI/ML",
  "Cybersecurity",
  "IoT",
  "Blockchain",
  "FinTech",
];

// Used in detail page + idea generation (no external API).
const ideaTypes = ["Latest", "Trending", "Innovative"];

const starterSnippet = `<div class="problem-solution">
  <h2>Prototype</h2>
  <button id="runBtn">Test Idea</button>
</div>
<script>
document.getElementById("runBtn").addEventListener("click", () => {
  alert("Prototype interaction works!");
});
<\/script>`;

const problems = [
  {
    id: "p1",
    title: "Smart Resume Analyzer",
    domain: "AI/ML",
    difficulty: "Medium",
    tags: ["NLP", "Hiring"],
    popularityScore: 62,
    short: "Rank resumes against a job description.",
    full: "Build a system that analyzes candidate resumes and highlights fit score, missing skills, and role alignment.",
    relevance: "Companies reduce screening time and improve candidate quality.",
    steps: ["Collect sample resumes", "Extract skills with NLP", "Train scoring model", "Build recruiter UI"],
    tech: ["Python", "Transformers", "Node API", "React"],
    future: ["Bias/fairness reporting", "ATS integrations", "Explainable scoring", "Multi-language resume support"],
  },
  {
    id: "p2",
    title: "Phishing URL Detector",
    domain: "Cybersecurity",
    difficulty: "Hard",
    tags: ["Security", "Detection"],
    popularityScore: 85,
    short: "Detect suspicious links in real time.",
    full: "Design a browser extension or dashboard that flags URLs with likely phishing patterns and domain risk signals.",
    relevance: "Prevents credential theft in enterprises and schools.",
    steps: ["Gather threat intel", "Feature engineer URL patterns", "Train classifier", "Deploy live scanner"],
    tech: ["JavaScript", "Python", "FastAPI", "Extension APIs"],
    future: ["Organization allowlists", "User report feedback loop", "Realtime IOC enrichment", "Mobile deep-link scanning"],
  },
  {
    id: "p3",
    title: "IoT Water Leak Monitor",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Sensors", "Smart Home"],
    popularityScore: 58,
    short: "Alert users on abnormal water flow.",
    full: "Use inexpensive sensors and cloud alerts to identify leaks in pipelines and household systems.",
    relevance: "Saves water, cost, and prevents property damage.",
    steps: ["Connect sensor node", "Stream telemetry", "Set thresholds", "Push mobile alerts"],
    tech: ["ESP32", "MQTT", "Firebase", "Mobile App"],
    future: ["Predictive maintenance", "Battery optimization", "Multi-sensor fusion", "Auto shutoff valve integration"],
  },
  {
    id: "p4",
    title: "Decentralized Certificate Verifier",
    domain: "Blockchain",
    difficulty: "Hard",
    tags: ["Web3", "Education"],
    popularityScore: 72,
    short: "Verify credentials without intermediaries.",
    full: "Issue tamper-proof educational certificates and provide instant public verification.",
    relevance: "Reduces fake certificates and employer verification costs.",
    steps: ["Create smart contract", "Design issuer portal", "Store certificate hash", "Build verifier page"],
    tech: ["Solidity", "Ethers.js", "IPFS", "Node"],
    future: ["Revocation registry", "Batch issuance", "Privacy-preserving proofs", "Multi-chain support"],
  },
  {
    id: "p5",
    title: "AI Tutor for Math Concepts",
    domain: "AI/ML",
    difficulty: "Easy",
    tags: ["EdTech", "Chatbot"],
    popularityScore: 55,
    short: "Explain math with adaptive hints.",
    full: "Build an assistant that adjusts explanation depth based on learner mistakes and pace.",
    relevance: "Improves conceptual clarity and self-paced learning.",
    steps: ["Define concept graph", "Track learner events", "Generate hints", "Evaluate outcomes"],
    tech: ["JavaScript", "LLM API", "Charts", "LocalStorage"],
    future: ["Spaced repetition", "Teacher dashboards", "Offline mode", "Multi-language tutoring"],
  },
  {
    id: "p6",
    title: "Freelancer Trust Score",
    domain: "Web Development",
    difficulty: "Medium",
    tags: ["Marketplace", "Reputation"],
    popularityScore: 61,
    short: "Predict delivery reliability and quality.",
    full: "Analyze project history, communication patterns, and client feedback to build trust analytics.",
    relevance: "Helps clients make better hiring decisions quickly.",
    steps: ["Design profile schema", "Aggregate metrics", "Build scoring logic", "Render dashboard"],
    tech: ["React", "Node", "Chart.js", "Postgres"],
    future: ["Explainable metrics", "Anti-gaming detection", "Dispute resolution signals", "Cross-platform imports"],
  },
  {
    id: "p7",
    title: "Fraud-Aware Payment Gateway",
    domain: "FinTech",
    difficulty: "Hard",
    tags: ["Payments", "Risk"],
    popularityScore: 90,
    short: "Score transaction fraud risk instantly.",
    full: "Add real-time fraud scoring and explainable transaction decisions in a payment workflow.",
    relevance: "Reduces chargebacks and merchant losses.",
    steps: ["Capture transaction stream", "Build risk rules", "Train anomaly model", "Create operator console"],
    tech: ["Kafka", "Python", "Redis", "React"],
    future: ["Device fingerprinting", "3DS recommendations", "Chargeback workflow", "Model monitoring & drift"],
  },
  {
    id: "p8",
    title: "Accessible UI Auto Auditor",
    domain: "Web Development",
    difficulty: "Easy",
    tags: ["A11y", "Automation"],
    popularityScore: 64,
    short: "Find accessibility violations in pages.",
    full: "Build a checker that scans pages and suggests fixes for contrast, labels, and keyboard navigation.",
    relevance: "Makes products inclusive and regulation-ready.",
    steps: ["Run scanner", "Categorize issues", "Show fix snippets", "Track compliance score"],
    tech: ["JavaScript", "Lighthouse", "Node", "CSS"],
    future: ["CI integration", "Design system checks", "PDF accessibility checks", "Team issue assignment"],
  },
  {
    id: "p9",
    title: "Campus Smart Parking",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Mobility", "Sensors"],
    popularityScore: 59,
    short: "Show live parking availability.",
    full: "Use occupancy sensors and route users to nearest available spots in a campus map.",
    relevance: "Cuts fuel waste and parking frustration.",
    steps: ["Deploy sensors", "Ingest occupancy", "Compute nearest slots", "Display map routing"],
    tech: ["LoRa", "Node", "Maps API", "Mobile"],
    future: ["Dynamic pricing", "Reservation system", "EV charging spots", "Anomaly detection on sensors"],
  },
  {
    id: "p10",
    title: "Threat Intel Dashboard",
    domain: "Cybersecurity",
    difficulty: "Medium",
    tags: ["SOC", "Monitoring"],
    popularityScore: 70,
    short: "Aggregate indicators from open feeds.",
    full: "Build a dashboard for threat analysts with feed severity filters and IOC enrichment.",
    relevance: "Speeds response and prioritization in SOC teams.",
    steps: ["Fetch feeds", "Normalize IOC schema", "Map severity", "Visualize trends"],
    tech: ["Python", "Elastic", "React", "REST"],
    future: ["SOAR hooks", "Entity graphing", "Playbook templates", "Custom scoring rules"],
  },
  {
    id: "p11",
    title: "On-Chain Donation Transparency",
    domain: "Blockchain",
    difficulty: "Medium",
    tags: ["NGO", "Transparency"],
    popularityScore: 57,
    short: "Track donation usage end-to-end.",
    full: "Let donors verify where funds are allocated through milestone-based release contracts.",
    relevance: "Builds trust in social impact projects.",
    steps: ["Create wallets", "Design milestone contracts", "Attach proofs", "Public dashboard"],
    tech: ["Solidity", "Next.js", "IPFS", "WalletConnect"],
    future: ["Fiat on-ramps", "Audit trails", "Beneficiary verification", "Impact metrics dashboards"],
  },
  {
    id: "p12",
    title: "AI Interview Simulator",
    domain: "AI/ML",
    difficulty: "Medium",
    tags: ["Career", "Speech"],
    popularityScore: 76,
    short: "Practice interviews with feedback.",
    full: "Generate role-specific interview rounds and evaluate confidence, clarity, and content quality.",
    relevance: "Improves employability and preparation quality.",
    steps: ["Question bank", "Speech capture", "Feedback rubric", "Progress analytics"],
    tech: ["Web Speech API", "LLM API", "Node", "Charts"],
    future: ["Company-specific rounds", "Answer exemplars", "Rubric personalization", "Mock system design interviews"],
  },
  {
    id: "p13",
    title: "Secure Password Health Checker",
    domain: "Cybersecurity",
    difficulty: "Easy",
    tags: ["Auth", "Security"],
    popularityScore: 53,
    short: "Guide users to stronger passwords.",
    full: "Build a tool that estimates entropy and warns against common or leaked password patterns.",
    relevance: "Improves account security and user awareness.",
    steps: ["Define policy", "Entropy calculator", "Leak list checks", "Friendly UX hints"],
    tech: ["JavaScript", "Local DB", "Regex", "UI"],
    future: ["Passkey onboarding", "Org policy templates", "Password manager tips", "Localization"],
  },
  {
    id: "p14",
    title: "Farm Sensor Yield Predictor",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["AgriTech", "Forecasting"],
    popularityScore: 66,
    short: "Predict crop yield from sensor data.",
    full: "Use temperature, moisture, and nutrient data to forecast output and suggest interventions.",
    relevance: "Supports better crop planning and lower resource waste.",
    steps: ["Collect sensor history", "Train time-series model", "Render advisory panel", "Deploy alerts"],
    tech: ["Python", "TensorFlow", "IoT Gateway", "Dashboard"],
    future: ["Weather assimilation", "Field segmentation", "Cost optimization", "Farmer-friendly recommendations"],
  },
  {
    id: "p15",
    title: "Code Review Copilot",
    domain: "Web Development",
    difficulty: "Medium",
    tags: ["DevEx", "Productivity"],
    popularityScore: 83,
    short: "Suggest review comments automatically.",
    full: "Parse pull request diffs and propose quality/security/performance comments.",
    relevance: "Reduces review fatigue and catches early issues.",
    steps: ["Parse diff", "Classify issues", "Prioritize findings", "Integrate with UI"],
    tech: ["TypeScript", "Git APIs", "LLM API", "Vite"],
    future: ["Repo-specific rules", "Auto-fix suggestions", "Policy checks", "Developer coaching mode"],
  },
  {
    id: "p16",
    title: "Micro-Loan Eligibility Engine",
    domain: "FinTech",
    difficulty: "Hard",
    tags: ["Credit", "Inclusion"],
    popularityScore: 74,
    short: "Evaluate applicants using alternative data.",
    full: "Build a fair scoring pipeline for underserved users without traditional credit history.",
    relevance: "Expands access to financial services responsibly.",
    steps: ["Collect behavior data", "Build fairness metrics", "Train risk model", "Create approval workflow"],
    tech: ["Python", "XGBoost", "FastAPI", "React"],
    future: ["Fairness dashboards", "Regulatory reporting", "Human-in-the-loop review", "Local explainability"],
  },
  {
    id: "p17",
    title: "AI-Powered Bug Triage Inbox",
    domain: "Web Development",
    difficulty: "Medium",
    tags: ["Support", "Automation", "DevEx"],
    popularityScore: 79,
    short: "Auto-label, dedupe, and route bug reports.",
    full: "Build a system that ingests user bug reports, groups similar issues, assigns severity, and routes to the right team with suggested repro steps.",
    relevance: "Reduces support load and shortens time-to-fix for product teams.",
    steps: ["Define bug schema", "Text clustering for dedupe", "Severity heuristics", "Routing rules + dashboard"],
    tech: ["TypeScript", "Embeddings (mock)", "Node", "React"],
    future: ["Jira/GitHub sync", "User impact scoring", "Auto-repro scripts", "Release regression tracking"],
  },
  {
    id: "p18",
    title: "Privacy-Preserving Analytics SDK",
    domain: "Cybersecurity",
    difficulty: "Hard",
    tags: ["Privacy", "Telemetry"],
    popularityScore: 71,
    short: "Collect product metrics without leaking user data.",
    full: "Design a client SDK and backend that captures event analytics with anonymization, sampling, and configurable retention policies.",
    relevance: "Helps teams learn from usage while respecting privacy regulations.",
    steps: ["Event taxonomy", "Anonymization strategy", "Sampling & batching", "Admin console + export"],
    tech: ["JavaScript", "Node", "Postgres", "Rate limiting"],
    future: ["Differential privacy", "Edge aggregation", "Consent management", "Data lineage reports"],
  },
  {
    id: "p19",
    title: "Smart Inventory Shelf (Vision + IoT)",
    domain: "IoT",
    difficulty: "Hard",
    tags: ["Retail", "Computer Vision"],
    popularityScore: 68,
    short: "Detect stock-outs and misplaced items automatically.",
    full: "Combine camera snapshots and weight sensors to infer shelf availability, misplacements, and shrinkage events.",
    relevance: "Improves retail replenishment and reduces lost sales.",
    steps: ["Capture sensor data", "Detect items with CV", "Fuse sensor signals", "Alert + analytics"],
    tech: ["ESP32", "Python", "OpenCV", "Dashboard"],
    future: ["Edge inference", "Planogram compliance", "Supplier integrations", "Loss prevention workflows"],
  },
  {
    id: "p20",
    title: "Token-Gated Community Hub",
    domain: "Blockchain",
    difficulty: "Medium",
    tags: ["Community", "Access"],
    popularityScore: 65,
    short: "Unlock content and perks with wallet ownership.",
    full: "Build a community portal where access to channels, events, and downloads is granted based on NFT/token ownership.",
    relevance: "Enables new membership models for creators and brands.",
    steps: ["Wallet connect", "Ownership checks", "Role mapping", "Community UX + moderation"],
    tech: ["Ethers.js", "React", "Node", "Token standards"],
    future: ["Multi-chain access", "Delegation support", "On-chain reputation", "Anti-sybil protections"],
  },
  {
    id: "p21",
    title: "Personal Finance Goal Autopilot",
    domain: "FinTech",
    difficulty: "Medium",
    tags: ["Budgeting", "Automation"],
    popularityScore: 73,
    short: "Turn income into automated goal-based allocations.",
    full: "Create a planner that recommends how much to allocate to bills, savings, and goals, and tracks progress with alerts.",
    relevance: "Helps users save consistently and reduce financial stress.",
    steps: ["Goal model", "Allocation engine", "Alerts and nudges", "Progress dashboard"],
    tech: ["JavaScript", "Charts", "Rules engine", "LocalStorage"],
    future: ["Bank integrations", "Forecasting", "Spending categorization", "Tax-aware planning"],
  },
  {
    id: "p22",
    title: "AI Meeting Minutes Generator",
    domain: "AI/ML",
    difficulty: "Easy",
    tags: ["Productivity", "Summarization"],
    popularityScore: 88,
    short: "Summarize meetings into action items.",
    full: "Build a tool that turns meeting notes or transcripts into structured summaries with owners, deadlines, and decisions.",
    relevance: "Improves execution and reduces communication overhead.",
    steps: ["Input capture", "Chunk & summarize", "Extract tasks", "Export/share"],
    tech: ["JavaScript", "Text processing", "UI", "LocalStorage"],
    future: ["Calendar integration", "Speaker diarization", "Task sync", "Compliance exports"],
  },
  {
    id: "p23",
    title: "Secure Dev Secrets Scanner",
    domain: "Cybersecurity",
    difficulty: "Medium",
    tags: ["DevSecOps", "Scanning"],
    popularityScore: 77,
    short: "Detect leaked secrets in code and configs.",
    full: "Create a scanner that finds API keys, tokens, and sensitive patterns with false-positive reduction and remediation guidance.",
    relevance: "Prevents costly incidents from accidental credential leaks.",
    steps: ["Define patterns", "Entropy checks", "Context verification", "Remediation playbook UI"],
    tech: ["JavaScript", "Regex", "Git hooks (mock)", "CLI concepts"],
    future: ["Policy packs", "IDE integration", "Secret rotation workflows", "SBOM tie-ins"],
  },
  {
    id: "p24",
    title: "Real-Time Carbon Footprint Tracker",
    domain: "Web Development",
    difficulty: "Easy",
    tags: ["Sustainability", "Dashboard"],
    popularityScore: 60,
    short: "Track carbon impact of daily actions.",
    full: "Build a dashboard that estimates emissions from commuting, energy use, and purchases and suggests reductions.",
    relevance: "Encourages sustainable habits with measurable progress.",
    steps: ["Define activity inputs", "Estimation formulas", "Visualize trends", "Personalized tips"],
    tech: ["JavaScript", "Charts", "CSS", "LocalStorage"],
    future: ["CSV import", "Group challenges", "Verified offsets", "Device integrations"],
  },
  {
    id: "p25",
    title: "Supply Chain Anomaly Radar",
    domain: "AI/ML",
    difficulty: "Hard",
    tags: ["Forecasting", "Anomaly"],
    popularityScore: 69,
    short: "Detect disruptions in orders and deliveries.",
    full: "Create anomaly detection on lead times, stock levels, and vendor performance with explainable alerts.",
    relevance: "Prevents stock-outs and improves vendor reliability.",
    steps: ["Define KPIs", "Train anomaly model", "Alert policies", "Operator dashboard"],
    tech: ["Python", "Time-series", "Dashboard", "APIs"],
    future: ["Root-cause graphs", "Vendor scoring", "Scenario simulation", "Auto reorder suggestions"],
  },
  {
    id: "p26",
    title: "Smart Classroom Attendance (IoT + QR)",
    domain: "IoT",
    difficulty: "Medium",
    tags: ["Education", "Automation"],
    popularityScore: 63,
    short: "Frictionless attendance with anti-cheat checks.",
    full: "Combine QR check-ins with device proximity signals to reduce proxy attendance and give live analytics.",
    relevance: "Saves teacher time and improves attendance accuracy.",
    steps: ["QR session generation", "Client check-in UX", "Proximity verification", "Reports dashboard"],
    tech: ["Web", "QR", "Bluetooth (concept)", "Dashboard"],
    future: ["Integration with LMS", "Offline mode", "Fraud detection", "Parent notifications"],
  },
];

const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const state = {
  user: store.get("if_user", null),
  theme: store.get("if_theme", "dark"),
  favorites: store.get("if_favorites", []),
  viewed: store.get("if_viewed", []),
  comments: store.get("if_comments", {}),
  activity: store.get("if_activity", { points: 0, badges: [] }),
  filter: { q: "", domain: "All", difficulty: "All", sort: "latest" },
  assistant: store.get("if_assistant", {
    lastTopic: "",
    lastDomain: "All",
    lastDifficulty: "All",
    lastProblemId: "",
    lastIdeas: [],
  }),
  generatedIdeas: store.get("if_generated_ideas", []),
};

function saveState() {
  store.set("if_user", state.user);
  store.set("if_theme", state.theme);
  store.set("if_favorites", state.favorites);
  store.set("if_viewed", state.viewed);
  store.set("if_comments", state.comments);
  store.set("if_activity", state.activity);
  store.set("if_assistant", state.assistant);
  store.set("if_generated_ideas", state.generatedIdeas);
}

function setTheme() {
  document.body.classList.toggle("light", state.theme === "light");
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function addPoints(amount) {
  state.activity.points += amount;
  if (state.activity.points >= 30 && !state.activity.badges.includes("Explorer")) {
    state.activity.badges.push("Explorer");
  }
  if (state.activity.points >= 70 && !state.activity.badges.includes("Innovator")) {
    state.activity.badges.push("Innovator");
  }
  saveState();
}

function getUsers() {
  return store.get("if_users", []);
}

function setUsers(users) {
  store.set("if_users", users);
}

function showAuth(mode = "login") {
  app.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-card glass">
        <h1 class="auth-title">IdeaForge AI</h1>
        <p class="muted">${mode === "login" ? "Welcome back" : "Create your innovation account"}</p>
        <form id="authForm">
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password (min 8 chars, number + uppercase)" required />
          ${
            mode === "signup"
              ? '<input type="text" name="name" placeholder="Your name" required />'
              : ""
          }
          <div class="row">
            <label><input type="checkbox" name="remember" /> Remember Me</label>
            <a href="#" id="forgotBtn" class="muted">Forgot Password?</a>
          </div>
          <button class="btn btn-primary" type="submit">${mode === "login" ? "Login" : "Sign Up"}</button>
        </form>
        <p class="muted">${mode === "login" ? "New here?" : "Already have an account?"}
          <a href="#" id="switchAuth">${mode === "login" ? "Sign up" : "Login"}</a>
        </p>
      </div>
    </div>
  `;

  document.getElementById("switchAuth").onclick = (e) => {
    e.preventDefault();
    showAuth(mode === "login" ? "signup" : "login");
  };

  document.getElementById("forgotBtn").onclick = (e) => {
    e.preventDefault();
    alert("Mock reset link sent! (This is a demo flow)");
  };

  document.getElementById("authForm").onsubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = String(form.get("email") || "").trim().toLowerCase();
    const password = String(form.get("password") || "");
    const name = String(form.get("name") || "Innovator").trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    if (!validEmail || !validPassword) {
      alert("Use a valid email and strong password.");
      return;
    }
    const users = getUsers();
    if (mode === "signup") {
      if (users.some((u) => u.email === email)) {
        alert("User already exists.");
        return;
      }
      users.push({ id: uid(), email, password, name });
      setUsers(users);
      alert("Signup successful. Please log in.");
      showAuth("login");
      return;
    }
    const match = users.find((u) => u.email === email && u.password === password);
    if (!match) {
      alert("Invalid credentials.");
      return;
    }
    state.user = { id: match.id, email: match.email, name: match.name };
    if (form.get("remember")) {
      store.set("if_remember", state.user);
    }
    addPoints(5);
    saveState();
    window.location.hash = "#/explorer";
    render();
  };
}

function baseLayout(content) {
  const links = [
    ["#/explorer", "Explorer"],
    ["#/trending", "Trending"],
    ["#/dashboard", "Dashboard"],
    ["#/gallery", "My Gallery"],
  ];
  return `
    <div class="container topbar glass">
      <div class="row">
        <strong>IdeaForge AI</strong>
        <nav>
          ${links
            .map(
              ([href, label]) =>
                `<a class="nav-link ${location.hash.startsWith(href) ? "active" : ""}" href="${href}">${label}</a>`
            )
            .join("")}
        </nav>
        <div class="row">
          <button class="btn btn-ghost" id="themeBtn">${state.theme === "dark" ? "Light" : "Dark"} Mode</button>
          <button class="btn btn-ghost" id="logoutBtn">Logout</button>
        </div>
      </div>
    </div>
    <main class="container">
      ${content}
    </main>
    ${chatUI()}
  `;
}

function getFilteredProblems() {
  const { q, domain, difficulty, sort } = state.filter;
  let data = [...problems].filter((p) => {
    const qMatch =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(q.toLowerCase());
    const domainMatch = domain === "All" || p.domain === domain;
    const diffMatch = difficulty === "All" || p.difficulty === difficulty;
    return qMatch && domainMatch && diffMatch;
  });
  if (sort === "popular") {
    data.sort((a, b) => getProblemScore(b) - getProblemScore(a));
  } else {
    data.sort((a, b) => b.id.localeCompare(a.id));
  }
  return data;
}

function getProblemLikes(id) {
  return store.get("if_likes", {})[id] || 0;
}

function getProblemScore(problem) {
  // Popularity blends base popularity score + user likes.
  return (problem.popularityScore || 0) + getProblemLikes(problem.id) * 8;
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((f) => f !== id);
  } else {
    state.favorites.push(id);
    const likes = store.get("if_likes", {});
    likes[id] = (likes[id] || 0) + 1;
    store.set("if_likes", likes);
    addPoints(3);
  }
  saveState();
  // Keep it simple: re-render on save/remove to update buttons across pages.
  render();
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProblemCard(p, { compact = false } = {}) {
  const tags = `<span class="pill">${escapeHtml(p.domain)}</span>${p.tags
    .slice(0, compact ? 2 : 6)
    .map((t) => `<span class="pill">${escapeHtml(t)}</span>`)
    .join("")}`;
  const score = getProblemScore(p);
  const cardClass = compact ? "mini-card glass" : "problem-card glass";
  return `
    <article class="${cardClass}">
      <div class="row">
        <strong>${escapeHtml(p.title)}</strong>
        <span class="difficulty-${p.difficulty.toLowerCase()}">${escapeHtml(p.difficulty)}</span>
      </div>
      <div class="muted">${escapeHtml(p.short)}</div>
      <div>${tags}</div>
      <div class="row">
        <a class="btn btn-ghost" href="#/problem/${p.id}">Open</a>
        <div class="row" style="justify-content:flex-end;">
          <span class="muted" title="Popularity score">▲ ${score}</span>
          <button class="btn btn-primary favorite-btn" data-id="${p.id}">
            ${state.favorites.includes(p.id) ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  `;
}

// Debounce helps avoid re-rendering on each keystroke.
function debounce(fn, delayMs = 300) {
  let t = null;
  return (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), delayMs);
  };
}

function getTrendingProblems() {
  return [...problems].sort((a, b) => getProblemScore(b) - getProblemScore(a)).slice(0, 3);
}

function getAllTrendingProblems() {
  return [...problems].sort((a, b) => getProblemScore(b) - getProblemScore(a));
}

function ensureExplorerLiveRegion() {
  return {
    trending: document.getElementById("trendingList"),
    explorer: document.getElementById("explorerList"),
    empty: document.getElementById("explorerEmpty"),
  };
}

function updateExplorerLists() {
  const { trending, explorer, empty } = ensureExplorerLiveRegion();
  if (!trending || !explorer) return;

  trending.innerHTML = getTrendingProblems()
    .map((p) => renderProblemCard(p, { compact: true }))
    .join("");

  const list = getFilteredProblems();
  explorer.innerHTML = list.map((p) => renderProblemCard(p)).join("");
  if (empty) empty.style.display = list.length ? "none" : "block";

  // Re-wire favorite buttons inside updated containers.
  explorer.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.onclick = () => toggleFavorite(btn.dataset.id);
  });
  trending.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.onclick = () => toggleFavorite(btn.dataset.id);
  });
}

function upsertGeneratedIdeas(ideas) {
  const map = new Map((state.generatedIdeas || []).map((x) => [x.id, x]));
  ideas.forEach((idea) => {
    if (!idea.id) idea.id = `idea-${uid()}`;
    map.set(idea.id, { ...idea });
  });
  state.generatedIdeas = Array.from(map.values()).slice(-120);
  saveState();
}

function buildTechBadges(tech) {
  return (tech || []).map((t) => `<span class="pill tech">${escapeHtml(t)}</span>`).join("");
}

function getDomainTechStack(domain) {
  const map = {
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node"],
    "AI/ML": ["Python", "Pandas", "Transformers", "FastAPI", "Vector DB (concept)"],
    Cybersecurity: ["JavaScript", "Python", "SIEM concepts", "OWASP", "Threat Intel"],
    IoT: ["ESP32", "MQTT", "Node", "Cloud DB", "Dashboard UI"],
    Blockchain: ["Solidity", "Ethers.js", "Wallet Connect", "IPFS", "Indexing (concept)"],
    FinTech: ["JavaScript", "Rules engine", "Risk scoring", "Charts", "Compliance basics"],
  };
  return map[domain] || ["JavaScript", "APIs", "UI"];
}

function generateIdeaBatch({ domain, difficulty, type }) {
  // Medium-intelligent generator: combines domain, tags, difficulty, templates, and relevance text.
  const pool = problems.filter((p) => (domain === "All" ? true : p.domain === domain));
  const domainTags = [...new Set(pool.flatMap((p) => p.tags))];
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const templates = {
    Latest: [
      "Real-time {tag} Tracker for {domain}",
      "{domain} Starter Kit: {tag} MVP",
      "Personalized {tag} Coach ({domain})",
    ],
    Trending: ["{tag}-First {domain} Dashboard", "Auto-{tag} Assistant for {domain}", "{domain} Insights: {tag} Analyzer"],
    Innovative: [
      "Agentic {tag} Copilot for {domain}",
      "{domain} x {tag}: Next-Gen Prototype",
      "Privacy-First {tag} Studio for {domain}",
    ],
  };

  const ideasCount = 6 + Math.floor(Math.random() * 5); // 6–10
  const useCasePhrases = [
    "for student communities",
    "for startup teams",
    "for enterprise operations",
    "for local businesses",
    "for campus ecosystems",
    "for public sector workflows",
  ];
  const impactPhrases = [
    "reduce manual effort",
    "improve decision quality",
    "increase response speed",
    "boost engagement and retention",
    "cut operational risk",
    "create measurable ROI",
  ];
  const res = [];
  for (let i = 0; i < ideasCount; i++) {
    const d = domain === "All" ? pick(domains) : domain;
    const tag = domainTags.length ? pick(domainTags) : pick(["Automation", "Analytics", "Assistant", "Monitoring"]);
    const tpl = pick((templates[type] || templates.Latest));
    const title = tpl.replaceAll("{domain}", d).replaceAll("{tag}", tag);
    const diff = difficulty === "All" ? pick(["Easy", "Medium", "Hard"]) : difficulty;
    const tech = [...new Set([...getDomainTechStack(d), tag].slice(0, 6))];
    const useCase = pick(useCasePhrases);
    const impact = pick(impactPhrases);
    const desc =
      type === "Innovative"
        ? `Design a novel ${tag.toLowerCase()} workflow in ${d} ${useCase} to ${impact}.`
        : type === "Trending"
          ? `Build a practical ${tag.toLowerCase()} solution in ${d} ${useCase} with fast onboarding and shareable outputs.`
          : `Create an MVP for ${tag.toLowerCase()} in ${d} ${useCase}, focused on one pain point and iterative feedback loops.`;
    const pickedProblem = pool.length ? pick(pool) : pick(problems);
    const steps = [
      `Define target users and success metric for ${title}.`,
      `Create wireframes and user flow around ${tag.toLowerCase()} interactions.`,
      `Build core features with ${tech.slice(0, 3).join(", ")}.`,
      "Validate with test users and refine onboarding + edge states.",
      "Launch MVP and track conversion, retention, and feature adoption.",
    ];
    const future = [
      "Role-based personalization",
      "Deeper analytics dashboard",
      "Collaboration workflows",
      "Export and sharing options",
      "Automation for repetitive tasks",
    ];
    res.push({
      id: `idea-${uid()}`,
      title,
      short: desc,
      difficulty: diff,
      domain: d,
      type,
      relevance: `This idea helps ${useCase.replace("for ", "")} ${impact}, inspired by real challenges in ${pickedProblem.domain}.`,
      problemStatement: `Teams in ${d} struggle with ${tag.toLowerCase()} workflows that are fragmented, manual, or hard to scale.`,
      full: `${desc} It should include clear user journeys, measurable outcomes, and an interface that encourages frequent usage.`,
      tech,
      steps,
      future,
      sourceTags: [tag, ...pickedProblem.tags].slice(0, 4),
    });
  }
  return res;
}

function renderIdeaCards(ideas) {
  if (!ideas?.length) return `<p class="muted">Generate ideas to see suggestions here.</p>`;
  return ideas
    .map(
      (i) => `
    <a class="problem-card glass idea-card-link" href="#/idea/${escapeHtml(i.id)}">
      <div class="row">
        <strong>${escapeHtml(i.title)}</strong>
        <span class="difficulty-${i.difficulty.toLowerCase()}">${escapeHtml(i.difficulty)}</span>
      </div>
      <div class="muted">${escapeHtml(i.short)}</div>
      <div><span class="pill">${escapeHtml(i.domain)}</span>${(i.sourceTags || []).map((t) => `<span class="pill ghost">${escapeHtml(t)}</span>`).join("")}</div>
      <div>${buildTechBadges(i.tech)}</div>
      <div class="muted">Click to open full idea brief</div>
    </a>
  `
    )
    .join("");
}

function getGeneratedIdeaById(ideaId) {
  return state.generatedIdeas.find((x) => x.id === ideaId);
}

function ideaDetailPage(ideaId) {
  const idea = getGeneratedIdeaById(ideaId);
  if (!idea) {
    return `
      <section class="detail glass glow">
        <div class="panel glass">
          <h2>Idea not found</h2>
          <p class="muted">Generate ideas from Explorer and open one to view full details.</p>
          <a class="btn btn-primary" href="#/explorer">Back to Explorer</a>
        </div>
      </section>
    `;
  }
  return `
    <section class="detail glass glow">
      <div class="list">
        <div class="panel glass">
          <div class="row">
            <div>
              <div class="muted">${escapeHtml(idea.domain)} • <span class="difficulty-${idea.difficulty.toLowerCase()}">${escapeHtml(idea.difficulty)}</span> • ${escapeHtml(idea.type)}</div>
              <h1 style="margin:8px 0 0; font-size:clamp(1.6rem, 4vw, 2.4rem);">${escapeHtml(idea.title)}</h1>
            </div>
            <a class="btn btn-ghost" href="#/explorer">Back</a>
          </div>
        </div>

        <div class="panel glass">
          <div class="icon-title"><div class="icon-badge">🧠</div><h3>Description</h3></div>
          <p class="muted">${escapeHtml(idea.full || idea.short)}</p>
          <p>${escapeHtml(idea.relevance || "")}</p>
        </div>

        <div class="panel glass">
          <div class="icon-title"><div class="icon-badge">🧩</div><h3>Problem Statement</h3></div>
          <p style="margin:0;">${escapeHtml(idea.problemStatement || idea.short)}</p>
        </div>

        <div class="panel glass">
          <div class="icon-title"><div class="icon-badge">🛠️</div><h3>Step-by-step Implementation</h3></div>
          <ol style="margin:0; padding-left:18px;">${(idea.steps || []).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
        </div>

        <div class="panel glass">
          <div class="icon-title"><div class="icon-badge">🧰</div><h3>Tech Stack</h3></div>
          <div>${buildTechBadges(idea.tech || [])}</div>
        </div>

        <div class="panel glass">
          <div class="icon-title"><div class="icon-badge">✨</div><h3>Future Improvements</h3></div>
          <ul style="margin:0; padding-left:18px;">${(idea.future || []).map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
  `;
}

function explorerPage() {
  return `
    <section class="hero glass glow">
      <h1>Discover Real-World Problem Statements</h1>
      <p>Search, filter, save, discuss, and build. Your innovation journey starts here.</p>
      <button class="btn btn-primary" id="onboardBtn">Show Onboarding</button>
    </section>
    <section class="toolbar glass">
      <div class="grid">
        <div class="field">
          <label>Search</label>
          <input id="searchInput" placeholder="Search by title or tags..." value="${escapeHtml(state.filter.q)}" />
        </div>
        <div class="field">
          <label>Domain</label>
          <select id="domainSelect">
            <option>All</option>${domains.map((d) => `<option ${d === state.filter.domain ? "selected" : ""}>${escapeHtml(d)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Difficulty</label>
          <select id="difficultySelect">
            <option>All</option>
            ${["Easy", "Medium", "Hard"].map((d) => `<option ${d === state.filter.difficulty ? "selected" : ""}>${escapeHtml(d)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Sort</label>
          <select id="sortSelect">
            <option value="latest" ${state.filter.sort === "latest" ? "selected" : ""}>Latest</option>
            <option value="popular" ${state.filter.sort === "popular" ? "selected" : ""}>Popular</option>
          </select>
        </div>
      </div>
    </section>
    <h3 class="section-title">Generate Ideas with AI</h3>
    <section class="glass panel">
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); align-items:end;">
        <div class="field">
          <label>Domain</label>
          <select id="aiDomain">
            <option>All</option>${domains.map((d) => `<option>${escapeHtml(d)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Difficulty</label>
          <select id="aiDifficulty">
            <option>All</option>${["Easy", "Medium", "Hard"].map((d) => `<option>${escapeHtml(d)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Type</label>
          <select id="aiType">
            ${ideaTypes.map((t) => `<option>${escapeHtml(t)}</option>`).join("")}
          </select>
        </div>
        <button class="btn btn-primary" id="aiGenerateBtn">Generate Ideas</button>
      </div>
      <div class="divider"></div>
      <div class="grid cards" id="aiIdeasList">
        ${
          state.generatedIdeas.length
            ? renderIdeaCards(state.generatedIdeas)
            : '<p class="muted">Generate 6–10 tailored ideas based on your domain, difficulty, and goal.</p>'
        }
      </div>
    </section>

    <h3 class="section-title">Trending</h3>
    <div class="row" style="margin-bottom:10px;">
      <span class="muted">Top problems ranked by activity and popularity</span>
      <a class="btn btn-ghost" href="#/trending">View All Trending</a>
    </div>
    <div class="grid cards" id="trendingList">
      ${getTrendingProblems().map((p) => renderProblemCard(p, { compact: true })).join("")}
    </div>

    <h3 class="section-title">Problem Explorer</h3>
    <div class="grid cards" id="explorerList">
      ${getFilteredProblems().map((p) => renderProblemCard(p)).join("")}
    </div>
    <p class="muted" id="explorerEmpty" style="display:none; margin-top:10px;">No matches. Try clearing filters or searching tags.</p>
  `;
}

function trendingPage() {
  const allTrending = getAllTrendingProblems();
  return `
    <section class="hero glass glow">
      <h1>Trending Real-World Problems</h1>
      <p>Discover what innovators are exploring most right now.</p>
    </section>
    <section class="grid cards">
      ${allTrending
        .map(
          (p) => `
        <a class="problem-card glass idea-card-link" href="#/problem/${p.id}">
          <div class="row">
            <strong>${escapeHtml(p.title)}</strong>
            <span class="difficulty-${p.difficulty.toLowerCase()}">${escapeHtml(p.difficulty)}</span>
          </div>
          <div class="muted">${escapeHtml(p.short)}</div>
          <div><span class="pill">${escapeHtml(p.domain)}</span>${p.tags.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join("")}</div>
          <div class="muted">Popularity: ▲ ${getProblemScore(p)}</div>
        </a>
      `
        )
        .join("")}
    </section>
  `;
}

function getProblemById(id) {
  return problems.find((p) => p.id === id);
}

function normalizeCommentEntry(entry) {
  if (entry && typeof entry === "object") {
    return {
      user: String(entry.user || "User"),
      message: String(entry.message || "").trim(),
      createdAt: Number(entry.createdAt || Date.now()),
    };
  }
  const [who, ...rest] = String(entry || "").split(":");
  return {
    user: String(who || "User").trim() || "User",
    message: String(rest.join(":") || entry || "").trim(),
    createdAt: Date.now(),
  };
}

function renderCommentsList(problemId) {
  const comments = (state.comments[problemId] || [])
    .map(normalizeCommentEntry)
    .filter((c) => c.message)
    .slice(-20)
    .reverse();

  if (!comments.length) {
    return `<p class="muted">No comments yet. Be the first to start the discussion.</p>`;
  }

  return comments
    .map(
      (c) =>
        `<div class="comment"><div class="comment-meta">${escapeHtml(c.user)}</div><div>${escapeHtml(c.message)}</div></div>`
    )
    .join("");
}

function refreshCommentsUI(problemId) {
  const list = document.getElementById("commentsList");
  if (!list) return;
  list.innerHTML = renderCommentsList(problemId);
}

function detailPage(id) {
  const p = getProblemById(id);
  if (!p) return '<div class="glass detail">Problem not found.</div>';
  if (!state.viewed.includes(id)) {
    state.viewed.unshift(id);
    state.viewed = state.viewed.slice(0, 8);
    addPoints(2);
    saveState();
  }
  const related = problems
    .filter((x) => x.id !== id && (x.domain === p.domain || x.tags.some((t) => p.tags.includes(t))))
    .slice(0, 4);
  const future = (p.future && p.future.length ? p.future : ["Ship MVP", "Add analytics", "Improve UX polish", "Scale to multiple user types"]).slice(0, 6);
  const aiSuggestions = generateIdeaBatch({
    domain: p.domain,
    difficulty: p.difficulty,
    type: "Innovative",
  }).slice(0, 3);
  upsertGeneratedIdeas(aiSuggestions);

  return `
    <section class="detail glass glow">
      <div class="two-col">
        <!-- LEFT SIDE -->
        <div class="list">
          <div class="glass panel">
            <div class="row">
              <div>
                <div class="muted">${escapeHtml(p.domain)} • <span class="difficulty-${p.difficulty.toLowerCase()}">${escapeHtml(p.difficulty)}</span></div>
                <h2 style="margin:6px 0 0;">${escapeHtml(p.title)}</h2>
              </div>
              <button class="btn btn-primary favorite-btn" data-id="${p.id}">
                ${state.favorites.includes(p.id) ? "Saved" : "Save"}
              </button>
            </div>
            <div class="divider"></div>
            <div class="muted">${escapeHtml(p.short)}</div>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🧠</div><h3>Description</h3></div>
            <p class="muted" style="margin:0;">${escapeHtml(p.full)}</p>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🧩</div><h3>Problem Statement</h3></div>
            <p style="margin:0;">Build a solution that solves <strong>${escapeHtml(p.short)}</strong> for real users with measurable outcomes.</p>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🌍</div><h3>Real-world Use Case</h3></div>
            <p class="muted" style="margin:0;">${escapeHtml(p.relevance)}</p>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🛠️</div><h3>Step-by-step Implementation</h3></div>
            <ol style="margin:0; padding-left:18px;">${p.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🧰</div><h3>Tech Stack</h3></div>
            <div>${buildTechBadges(p.tech)}</div>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">✨</div><h3>Future Scope / Enhancements</h3></div>
            <ul style="margin:0; padding-left:18px;">${future.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">💻</div><h3>Starter Code Snippet</h3></div>
            <pre>${escapeHtml(starterSnippet)}</pre>
            <div class="row">
              <button class="btn btn-ghost" id="shareBtn">Share</button>
              <button class="btn btn-ghost" id="pdfBtn">Export PDF</button>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="list">
          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🖼️</div><h3>UI Preview</h3></div>
            <div class="mock-ui">
              <div class="pill">Header + Search</div>
              <div class="pill">Key Insights</div>
              <div class="pill">Primary CTA</div>
              <div class="pill">Activity + Comments</div>
            </div>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🔁</div><h3>Recommendations</h3></div>
            <div class="list">
              ${related.map((r) => `<a class="mini-card glass" href="#/problem/${r.id}"><strong>${escapeHtml(r.title)}</strong><div class="muted">${escapeHtml(r.short)}</div></a>`).join("")}
            </div>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">🤖</div><h3>AI Suggestions</h3></div>
            <div class="list">
              ${aiSuggestions
                .map(
                  (s) => `
                <a class="mini-card glass idea-card-link" href="#/idea/${escapeHtml(s.id || `idea-${uid()}`)}">
                  <strong>${escapeHtml(s.title)}</strong>
                  <div class="muted">${escapeHtml(s.short)}</div>
                  <div>${buildTechBadges(s.tech)}</div>
                </a>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="glass panel">
            <div class="icon-title"><div class="icon-badge">💬</div><h3>Comments</h3></div>
            <form id="commentForm" data-problem-id="${p.id}">
              <textarea name="comment" placeholder="Ask a question, share an approach, or post resources..." required></textarea>
              <button class="btn btn-primary" type="submit">Post</button>
            </form>
            <div class="divider"></div>
            <div class="list" id="commentsList">
              ${renderCommentsList(p.id)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function dashboardPage() {
  const viewed = state.viewed.map((id) => getProblemById(id)).filter(Boolean);
  const recDomains = [...new Set(viewed.map((v) => v.domain))].slice(0, 3);
  const recommended = problems
    .filter((p) => recDomains.includes(p.domain) && !state.favorites.includes(p.id))
    .slice(0, 4);
  return `
    <section class="hero glass">
      <h1>Hello, ${state.user?.name || "Innovator"}</h1>
      <p>Your personalized innovation dashboard.</p>
    </section>
    <section class="stats">
      <article class="stat glass"><strong>Points</strong><div>${state.activity.points}</div></article>
      <article class="stat glass"><strong>Badges</strong><div>${state.activity.badges.join(", ") || "No badges yet"}</div></article>
      <article class="stat glass"><strong>Saved</strong><div>${state.favorites.length}</div></article>
      <article class="stat glass"><strong>Recently Viewed</strong><div>${state.viewed.length}</div></article>
    </section>
    <h3 class="section-title">Recently Viewed</h3>
    <div class="grid cards">
      ${viewed
        .map((p) => `<article class="problem-card glass"><strong>${p.title}</strong><a href="#/problem/${p.id}" class="btn btn-ghost">Open</a></article>`)
        .join("") || '<p class="muted">No recent activity yet.</p>'}
    </div>
    <h3 class="section-title">Recommended Domains</h3>
    <div>${(recDomains.length ? recDomains : ["Web Development", "AI/ML"]).map((d) => `<span class="pill">${d}</span>`).join("")}</div>
    <h3 class="section-title">Recommended For You</h3>
    <div class="grid cards">
      ${recommended
        .map((p) => `<article class="problem-card glass"><strong>${p.title}</strong><div class="muted">${p.short}</div><a href="#/problem/${p.id}" class="btn btn-ghost">Explore</a></article>`)
        .join("") || '<p class="muted">Explore more problems for recommendations.</p>'}
    </div>
  `;
}

function galleryPage() {
  const saved = state.favorites.map((id) => getProblemById(id)).filter(Boolean);
  return `
    <section class="hero glass">
      <h1>My Gallery</h1>
      <p>All your saved problem statements in one place.</p>
    </section>
    <div class="grid cards">
      ${saved
        .map(
          (p) => `
          <article class="problem-card glass">
            <strong contenteditable="true" data-edit-id="${p.id}" class="editable-title">${p.title}</strong>
            <div class="muted">${p.short}</div>
            <div class="row">
              <a class="btn btn-ghost" href="#/problem/${p.id}">Open</a>
              <button class="btn btn-primary favorite-btn" data-id="${p.id}">Remove</button>
            </div>
          </article>
        `
        )
        .join("") || '<p class="muted">No saved problems yet. Save from explorer.</p>'}
    </div>
  `;
}

function onboarding() {
  const old = document.querySelector(".onboard");
  if (old) old.remove();
  const node = document.createElement("div");
  node.className = "onboard";
  node.innerHTML = `
    <div class="onboard-card glass">
      <h2>Welcome to IdeaForge AI</h2>
      <p class="muted">1) Explore domains 2) Save problems 3) Earn badges 4) Discuss and build prototypes.</p>
      <button class="btn btn-primary" id="closeOnboard">Start Exploring</button>
    </div>
  `;
  document.body.appendChild(node);
  document.getElementById("closeOnboard").onclick = () => node.remove();
}

function chatUI() {
  return `
    <button class="chat-fab btn btn-primary" id="chatFab" aria-label="Toggle AI chat">AI</button>
    <aside class="chatbox glass" id="chatbox">
      <div class="row"><strong>AI Chat Assistant</strong><button class="btn btn-ghost" id="chatToggle">-</button></div>
      <div class="chat-messages" id="chatMessages">
        <div class="chat-msg bot">
          <div class="chat-msg-label">Mentor AI</div>
          Ask for ideas, tech stack, build steps, optimization, difficulty, or features.
        </div>
      </div>
      <form id="chatForm" class="row">
        <input name="msg" placeholder="Type your question..." required />
        <button class="btn btn-primary">Send</button>
      </form>
    </aside>
  `;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text, phrases) {
  return phrases.some((p) => text.includes(p));
}

function extractDomainFromText(text) {
  const t = normalizeText(text);
  return domains.find((d) => t.includes(d.toLowerCase())) || null;
}

function extractDifficultyFromText(text) {
  const t = normalizeText(text);
  if (t.includes("easy")) return "Easy";
  if (t.includes("medium")) return "Medium";
  if (t.includes("hard")) return "Hard";
  return null;
}

function detectIntent(text) {
  const t = normalizeText(text);

  const ideasIntent = [
    "idea",
    "ideas",
    "project",
    "projects",
    "suggest project",
    "give idea",
    "what can i build",
    "what should i build",
    "recommend idea",
    "new concept",
    "suggest idea",
    "what project can i build",
    "give some ideas",
  ];
  const techIntent = ["tech stack", "stack", "technology", "tools", "framework", "libraries"];
  const buildIntent = ["how to build", "build it", "build this", "steps", "approach", "implementation", "roadmap"];
  const improveIntent = ["improve", "optimize", "optimization", "performance", "better ux", "refactor"];
  const difficultyIntent = ["difficulty", "complexity", "hardness", "level", "is this hard"];
  const featureIntent = ["features", "feature", "scope", "what to include", "modules"];

  if (includesAny(t, ideasIntent)) return "ideas";
  if (includesAny(t, techIntent) && (t.includes("stack") || t.includes("tech") || t.includes("tools"))) return "tech";
  if (includesAny(t, buildIntent)) return "build";
  if (includesAny(t, improveIntent)) return "improve";
  if (includesAny(t, difficultyIntent)) return "difficulty";
  if (includesAny(t, featureIntent)) return "features";
  return "general";
}

function getAssistantContext(userText) {
  const route = location.hash || "#/explorer";
  const onProblem = route.startsWith("#/problem/");
  const activeProblem = onProblem ? getProblemById(route.split("/")[2]) : null;
  const domainSelect = document.getElementById("domainSelect");
  const difficultySelect = document.getElementById("difficultySelect");

  const domainFromUser = extractDomainFromText(userText);
  const difficultyFromUser = extractDifficultyFromText(userText);

  const domain =
    domainFromUser ||
    activeProblem?.domain ||
    domainSelect?.value ||
    state.assistant.lastDomain ||
    state.filter.domain ||
    "Web Development";
  const difficulty =
    difficultyFromUser ||
    activeProblem?.difficulty ||
    difficultySelect?.value ||
    state.assistant.lastDifficulty ||
    state.filter.difficulty ||
    "Medium";

  return { route, onProblem, activeProblem, domain, difficulty };
}

function makeFollowUp() {
  return pickRandom([
    "Next: ask me for `tech stack`, `how to build`, or `features`.",
    "Want me to generate more ideas or refine one into an MVP plan?",
    "I can also estimate difficulty, suggest features, or optimize your approach.",
    "If you want, I can tailor this to your selected domain and difficulty filters.",
  ]);
}

function formatIdeasResponse(ideas, domain, difficulty) {
  const intro = pickRandom([
    `Here are smart project ideas for ${domain} (${difficulty}):`,
    `I generated these idea variations in ${domain} at ${difficulty} level:`,
    `Great choice. Try one of these ${domain} concepts (${difficulty}):`,
  ]);
  const lines = ideas
    .slice(0, 3)
    .map(
      (idea, i) =>
        `• Idea ${i + 1}: ${idea.title}\n  - Summary: ${idea.short}\n  - Difficulty: ${idea.difficulty}\n  - Tech stack: ${idea.tech.slice(0, 4).join(", ")}`
    )
    .join("\n");
  return `${intro}\n${lines}\n\n${makeFollowUp()}`;
}

function botReply(text) {
  const intent = detectIntent(text);
  const ctx = getAssistantContext(text);
  const domain = ctx.domain === "All" ? "Web Development" : ctx.domain;
  const difficulty = ctx.difficulty === "All" ? "Medium" : ctx.difficulty;

  state.assistant.lastDomain = domain;
  state.assistant.lastDifficulty = difficulty;
  state.assistant.lastProblemId = ctx.activeProblem?.id || "";

  if (intent === "ideas") {
    const ideaType = ctx.onProblem ? "Innovative" : "Trending";
    const ideas = generateIdeaBatch({ domain, difficulty, type: ideaType }).slice(0, 3);
    state.assistant.lastTopic = ideas[0]?.title || domain;
    state.assistant.lastIdeas = ideas;
    saveState();
    return formatIdeasResponse(ideas, domain, difficulty);
  }

  if (intent === "tech") {
    const stack = ctx.activeProblem?.tech?.length ? ctx.activeProblem.tech : getDomainTechStack(domain);
    const heading = ctx.activeProblem
      ? `Tech stack for ${ctx.activeProblem.title}:`
      : `Recommended stack for ${domain} projects:`;
    saveState();
    return `${heading}
• Core: ${stack.slice(0, 3).join(", ")}
• Add-ons: ${stack.slice(3).join(", ") || "Testing + analytics tools"}
• Tip: Start with frontend + mock data, then integrate APIs/models.

${makeFollowUp()}`;
  }

  if (intent === "build") {
    if (ctx.activeProblem?.steps?.length) {
      const steps = ctx.activeProblem.steps.map((s, i) => `• Step ${i + 1}: ${s}`).join("\n");
      state.assistant.lastTopic = ctx.activeProblem.title;
      saveState();
      return `Build plan for ${ctx.activeProblem.title}:
${steps}
• Deliverable: Build a small MVP with one measurable user outcome.

${makeFollowUp()}`;
    }

    if (state.assistant.lastIdeas?.length) {
      const selected = state.assistant.lastIdeas[0];
      saveState();
      return `Let's build: ${selected.title}
• Step 1: Define user pain + success metric
• Step 2: Design 2 key screens (input + result)
• Step 3: Implement core logic with sample data
• Step 4: Add feedback loop and basic analytics
• Step 5: Polish UX and deploy demo

${makeFollowUp()}`;
    }

    saveState();
    return `Step-by-step build template:
• Step 1: Pick a focused use case
• Step 2: Build frontend flow first
• Step 3: Add data model and validations
• Step 4: Implement core feature logic
• Step 5: Test with 3 scenarios and iterate

${makeFollowUp()}`;
  }

  if (intent === "improve") {
    const target = ctx.activeProblem?.title || state.assistant.lastTopic || "your project";
    saveState();
    return `Ways to improve ${target}:
• UX: shorten onboarding to first value within 30 seconds
• Performance: debounce inputs, avoid unnecessary rerenders
• Quality: add empty states, error states, and validations
• Product: track engagement metrics and iterate weekly

${makeFollowUp()}`;
  }

  if (intent === "difficulty") {
    const skillsByDifficulty = {
      Easy: "HTML/CSS/JS basics, simple state handling, basic validation",
      Medium: "API integration, modular components, structured data modeling",
      Hard: "system design, optimization, scalability, security considerations",
    };
    const skillHint = skillsByDifficulty[difficulty] || skillsByDifficulty.Medium;
    saveState();
    return `Difficulty guidance for ${domain} (${difficulty}):
• Complexity: ${difficulty}
• Skills needed: ${skillHint}
• Timeline: ${difficulty === "Hard" ? "2-4 weeks MVP" : difficulty === "Medium" ? "1-2 weeks MVP" : "2-5 days MVP"}

${makeFollowUp()}`;
  }

  if (intent === "features") {
    const featureBase = ctx.activeProblem?.tags || ["Analytics", "Collaboration", "Automation"];
    saveState();
    return `Feature suggestions:
• Must-have: ${featureBase[0] || "Core workflow"}, dashboard, save/bookmark
• Nice-to-have: personalization, smart recommendations, notifications
• Advanced: sharing, export, role-based views, discussion insights

${makeFollowUp()}`;
  }

  if (ctx.activeProblem) {
    saveState();
    return `You're viewing ${ctx.activeProblem.title}.
• I can provide build steps, tech stack, features, or optimization tips.
• Mention “idea” to generate related project variants.

${makeFollowUp()}`;
  }

  saveState();
  return `I can mentor you through project building.
• Ask: “give ideas”, “tech stack”, “how to build”, “difficulty”, or “features”
• You can also include domain + difficulty (example: “AI/ML medium ideas”)

${makeFollowUp()}`;
}

function appendChatMessage(role, rawText) {
  const messages = document.getElementById("chatMessages");
  if (!messages) return;
  const div = document.createElement("div");
  div.className = `chat-msg ${role}`;
  const label = role === "bot" ? "Mentor AI" : state.user?.name || "You";
  const safe = escapeHtml(rawText).replaceAll("\n", "<br>");
  div.innerHTML = `<div class="chat-msg-label">${escapeHtml(label)}</div>${safe}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTypingIndicator() {
  const messages = document.getElementById("chatMessages");
  if (!messages) return null;
  const el = document.createElement("div");
  el.className = "chat-msg bot typing-msg";
  el.innerHTML = `<div class="chat-msg-label">Mentor AI</div><span class="typing-dots"><span></span><span></span><span></span></span>`;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  return el;
}

function wireEvents() {
  document.getElementById("themeBtn").onclick = () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    setTheme();
    render();
  };

  document.getElementById("logoutBtn").onclick = () => {
    state.user = null;
    saveState();
    showAuth("login");
  };

  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.onclick = () => toggleFavorite(btn.dataset.id);
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    // Critical bug fix: avoid full render on each keystroke.
    const applySearch = debounce(() => {
      state.filter.q = searchInput.value;
      updateExplorerLists();
    }, 300);

    searchInput.oninput = applySearch;

    document.getElementById("domainSelect").onchange = (e) => {
      state.filter.domain = e.target.value;
      updateExplorerLists();
    };
    document.getElementById("difficultySelect").onchange = (e) => {
      state.filter.difficulty = e.target.value;
      updateExplorerLists();
    };
    document.getElementById("sortSelect").onchange = (e) => {
      state.filter.sort = e.target.value;
      updateExplorerLists();
    };
  }

  const aiGenerateBtn = document.getElementById("aiGenerateBtn");
  if (aiGenerateBtn) {
    aiGenerateBtn.onclick = () => {
      const domain = document.getElementById("aiDomain")?.value || "All";
      const difficulty = document.getElementById("aiDifficulty")?.value || "All";
      const type = document.getElementById("aiType")?.value || "Latest";
      const ideas = generateIdeaBatch({ domain, difficulty, type });
      upsertGeneratedIdeas(ideas);
      const list = document.getElementById("aiIdeasList");
      if (list) list.innerHTML = renderIdeaCards(ideas);
      addPoints(2);
    };
  }

  const commentForm = document.getElementById("commentForm");
  if (commentForm) {
    commentForm.onsubmit = (e) => {
      e.preventDefault();
      const text = String(new FormData(commentForm).get("comment") || "").trim();
      if (!text) return;
      const id = commentForm.dataset.problemId || location.hash.split("/")[2];
      const newEntry = {
        user: state.user?.name || "User",
        message: text,
        createdAt: Date.now(),
      };
      state.comments[id] = [...(state.comments[id] || []), newEntry];
      addPoints(2);
      saveState();
      commentForm.reset();
      refreshCommentsUI(id);
    };
  }

  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.onclick = async () => {
      const url = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title: "IdeaForge AI Problem", url });
        } else {
          await navigator.clipboard.writeText(url);
          alert("Link copied!");
        }
      } catch {}
    };
  }

  const pdfBtn = document.getElementById("pdfBtn");
  if (pdfBtn) {
    pdfBtn.onclick = () => window.print();
  }

  const onboardBtn = document.getElementById("onboardBtn");
  if (onboardBtn) {
    onboardBtn.onclick = onboarding;
  }

  const chatForm = document.getElementById("chatForm");
  if (chatForm) {
    chatForm.onsubmit = (e) => {
      e.preventDefault();
      const msg = String(new FormData(chatForm).get("msg") || "").trim();
      if (!msg) return;
      appendChatMessage("user", msg);
      const typingEl = showTypingIndicator();
      const replyDelay = 420 + Math.floor(Math.random() * 420);
      setTimeout(() => {
        if (typingEl) typingEl.remove();
        appendChatMessage("bot", botReply(msg));
      }, replyDelay);
      chatForm.reset();
    };
  }

  const chatToggle = document.getElementById("chatToggle");
  if (chatToggle) {
    chatToggle.onclick = () => {
      const box = document.getElementById("chatbox");
      const collapsed = box.classList.toggle("collapsed");
      chatToggle.textContent = collapsed ? "+" : "-";
    };
  }

  const chatFab = document.getElementById("chatFab");
  if (chatFab) {
    chatFab.onclick = () => {
      const box = document.getElementById("chatbox");
      box.classList.toggle("hidden");
    };
  }
}

function render() {
  setTheme();
  if (!state.user) {
    const remembered = store.get("if_remember", null);
    if (remembered) state.user = remembered;
    else return showAuth("login");
  }
  const route = location.hash || "#/explorer";
  let page = "";
  if (route.startsWith("#/problem/")) page = detailPage(route.split("/")[2]);
  else if (route.startsWith("#/idea/")) page = ideaDetailPage(route.split("/")[2]);
  else if (route === "#/trending") page = trendingPage();
  else if (route === "#/dashboard") page = dashboardPage();
  else if (route === "#/gallery") page = galleryPage();
  else page = explorerPage();

  app.innerHTML = baseLayout(page);
  wireEvents();

  // Ensure explorer lists reflect latest state immediately.
  if (route === "#/explorer" || route === "" || route === "#") updateExplorerLists();
}

window.addEventListener("hashchange", render);
render();