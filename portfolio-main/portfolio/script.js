const body = document.body;
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const revealEls = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
const heroVisual = document.getElementById("heroVisual");
const parallaxEls = document.querySelectorAll(".parallax");
const counterEls = document.querySelectorAll("[data-counter]");
const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const terminalBody = document.getElementById("terminalBody");
const contactForm = document.getElementById("contactForm");
const terminalActions = document.getElementById("terminalActions");
const projectFilters = document.getElementById("projectFilters");
const projectCards = document.querySelectorAll(".project-card");
const skillCards = document.querySelectorAll(".skill-card");
const skillDetail = document.getElementById("skillDetail");
const scrollProgressBar = document.getElementById("scrollProgressBar");
const localTime = document.getElementById("localTime");
const quickJump = document.getElementById("quickJump");
const sections = document.querySelectorAll("main .section");
const hoverPreview = document.getElementById("projectHoverPreview");
const hoverPreviewTitle = document.getElementById("hoverPreviewTitle");
const hoverPreviewText = document.getElementById("hoverPreviewText");
const terminalGame = document.getElementById("terminalGame");
const runnerCanvas = document.getElementById("runnerCanvas");
const runnerCtx = runnerCanvas ? runnerCanvas.getContext("2d") : null;
const gameStartBtn = document.getElementById("gameStartBtn");
const gameResetBtn = document.getElementById("gameResetBtn");
const gameStatus = document.getElementById("gameStatus");
const journeyNodes = document.querySelectorAll(".journey-node");
const journeyTitle = document.getElementById("journeyTitle");
const journeyProblem = document.getElementById("journeyProblem");
const journeyBuild = document.getElementById("journeyBuild");
const journeyTech = document.getElementById("journeyTech");
const journeyLearning = document.getElementById("journeyLearning");
const journeyNext = document.getElementById("journeyNext");
const focusBar = document.getElementById("focusBar");

function forceTopPosition() {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

forceTopPosition();
requestAnimationFrame(forceTopPosition);
setTimeout(forceTopPosition, 0);
setTimeout(forceTopPosition, 50);

window.addEventListener("DOMContentLoaded", forceTopPosition);
window.addEventListener("load", forceTopPosition);
window.addEventListener("pageshow", forceTopPosition);

const projectDetails = {
  assam: {
    title: "Explore Assam Tourism and Heritage",
    text: "Tourism-focused web experience with smooth navigation improvements and user-friendly browsing flows.",
    stack: ["JavaScript", "UI/UX", "Web"]
  },
  transit: {
    title: "Transit-Live",
    text: "Realtime public transit monitoring with map APIs, route visibility, and live arrival information.",
    stack: ["JavaScript", "Maps", "Realtime Data"]
  },
  lakshya: {
    title: "Lakshya Learning Platform",
    text: "Goal-oriented learning platform to manage study resources and monitor progress effectively.",
    stack: ["JavaScript", "EdTech", "Productivity"]
  }
};

const terminalResponses = {
  skills: [
    "$ skills",
    "- Frontend: HTML, CSS, JavaScript",
    "- Backend & Logic: APIs, Python, C++",
    "- Platform: Firebase, MongoDB"
  ],
  projects: [
    "$ projects --mine",
    "- explore-Assam-tourism-and-heritage",
    "- Transit-Live"
  ],
  contact: [
    "$ contact",
    "github: github.com/Ananddutta",
    "email: anand.dev@example.com"
  ]
};

const runnerState = {
  active: false,
  running: false,
  score: 0,
  best: 0,
  frame: 0,
  speed: 2.4,
  player: { x: 52, y: 0, vy: 0, w: 20, h: 20, onGround: true },
  obstacles: [],
  particles: []
};

const journeyData = [
  {
    title: "Started B.Tech CSE",
    problem: "Needed a structured way to improve software foundations while building practical projects.",
    build: "Set up a consistent coding routine and created mini frontend projects weekly.",
    tech: "HTML, CSS, JavaScript, C++",
    learning: "Strong basics and consistency are the base for better product building.",
    next: "Improve architecture planning before implementation to reduce rework."
  },
  {
    title: "Assam Tourism Build",
    problem: "Navigation flow on redirected pages made user movement less intuitive.",
    build: "Improved navigation behavior and UX continuity, including better back-flow handling.",
    tech: "JavaScript, DOM APIs, UX Patterns",
    learning: "Small UX fixes can significantly improve user trust and session depth.",
    next: "Add analytics to measure navigation drop-offs and optimize funnel paths."
  },
  {
    title: "Transit-Live Build",
    problem: "Users needed clearer live transit visibility with map-based context.",
    build: "Integrated live movement context and map-oriented information display.",
    tech: "JavaScript, Maps, Realtime Data",
    learning: "Realtime interfaces must prioritize clarity and update stability over visual noise.",
    next: "Add route-level filtering and congestion overlays for faster decision-making."
  },
  {
    title: "Lakshya Platform Build",
    problem: "Students lacked a focused way to track progress and manage study resources.",
    build: "Built a goal-oriented learning workflow with progress-centric UI components.",
    tech: "JavaScript, Product Design, Frontend Logic",
    learning: "Educational tools need motivation loops and simple daily interactions.",
    next: "Add personalized reminders and smarter progress recommendations."
  }
];

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("visible");
      if (entry.target.hasAttribute("data-counter")) {
        animateCounter(entry.target);
      }
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));
counterEls.forEach((el) => observer.observe(el));

function animateCounter(el) {
  const target = Number(el.getAttribute("data-counter"));
  const startTime = performance.now();
  const duration = 1200;

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 12) {
    navbar.style.boxShadow = "0 10px 40px rgba(43,43,43,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

  const sectionIds = ["home", "about", "skills", "projects", "journey", "experience", "contact"];
  let currentSectionId = "home";

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    const top = section.offsetTop - 140;
    const bottom = top + section.offsetHeight;
    const current = window.scrollY;
    if (current >= top && current < bottom) {
      currentSectionId = id;
      navLinks.forEach((l) => {
        l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
      });
    }
  });

  sections.forEach((section) => {
    section.classList.toggle("in-focus", section.id === currentSectionId);
  });

  if (scrollProgressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${progress}%`;
  }
});

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  parallaxEls.forEach((el) => {
    const depth = Number(el.getAttribute("data-depth") || 10);
    const tx = -x * depth;
    const ty = -y * depth;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  });

  // Shift background blobs lightly with pointer movement for subtle depth.
  body.style.setProperty("--cursor-x", `${x}`);
  body.style.setProperty("--cursor-y", `${y}`);

});

function updateLocalTime() {
  if (!localTime) {
    return;
  }

  const now = new Date();
  localTime.textContent = `Local time: ${now.toLocaleTimeString()}`;
}

updateLocalTime();
setInterval(updateLocalTime, 1000);

function openQuickJump() {
  if (!quickJump) {
    return;
  }
  quickJump.hidden = false;
}

function closeQuickJump() {
  if (!quickJump) {
    return;
  }
  quickJump.hidden = true;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")) {
    e.preventDefault();
    if (quickJump?.hidden) {
      openQuickJump();
    } else {
      closeQuickJump();
    }
  }

  if (e.key === "Escape") {
    closeQuickJump();
  }
});

if (quickJump) {
  quickJump.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeQuickJump());
  });
}

function renderJourney(step) {
  const item = journeyData[step];
  if (!item || !journeyTitle) {
    return;
  }

  journeyTitle.textContent = item.title;
  journeyProblem.innerHTML = `<strong>Problem:</strong> ${item.problem}`;
  journeyBuild.innerHTML = `<strong>What I Built:</strong> ${item.build}`;
  journeyTech.innerHTML = `<strong>Tech Used:</strong> ${item.tech}`;
  journeyLearning.innerHTML = `<strong>Key Learning:</strong> ${item.learning}`;
  journeyNext.innerHTML = `<strong>What I'd Improve Next:</strong> ${item.next}`;
}

if (journeyNodes.length) {
  journeyNodes.forEach((node) => {
    node.addEventListener("click", () => {
      const step = Number(node.getAttribute("data-step"));
      journeyNodes.forEach((n) => {
        n.classList.remove("active");
        n.setAttribute("aria-selected", "false");
      });
      node.classList.add("active");
      node.setAttribute("aria-selected", "true");
      renderJourney(step);
    });
  });
}

if (focusBar) {
  const focusObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        focusBar.style.width = "84%";
        focusObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  focusObserver.observe(focusBar);
}

// Add tactile-feeling click ripples for interactive elements.
document.addEventListener("pointerdown", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) {
    return;
  }

  const interactive = target.closest("a, button, .skill-card, .project-card, .terminal-btn, .filter-btn");
  if (!interactive) {
    return;
  }

  const ripple = document.createElement("span");
  ripple.className = "click-ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});

if (projectFilters) {
  projectFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) {
      return;
    }

    const filter = btn.getAttribute("data-filter");
    projectFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const types = card.getAttribute("data-type") || "";
      const show = filter === "all" || types.includes(filter);
      card.classList.toggle("is-hidden", !show);
    });
  });
}

if (skillDetail) {
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const skill = card.getAttribute("data-skill") || "Skill";
      const detail = card.getAttribute("data-detail") || "";
      skillDetail.textContent = `${skill}: ${detail}`;
    });
  });
}

// Project modal and card tilt interactions.
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 14;
    const rotateX = -(y - 0.5) * 14;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";

    if (hoverPreview) {
      hoverPreview.classList.remove("show");
    }
  });

  card.addEventListener("mouseenter", () => {
    if (!hoverPreview || !hoverPreviewTitle || !hoverPreviewText) {
      return;
    }

    const key = card.getAttribute("data-project");
    const info = projectDetails[key];
    hoverPreviewTitle.textContent = info?.title || "Project";
    hoverPreviewText.textContent = info?.text || "Interactive project preview.";
    hoverPreview.classList.add("show");
  });

  card.addEventListener("mousemove", (e) => {
    if (!hoverPreview) {
      return;
    }

    const offset = 18;
    hoverPreview.style.left = `${e.clientX + offset}px`;
    hoverPreview.style.top = `${e.clientY + offset}px`;
  });

  card.addEventListener("click", () => {
    const key = card.getAttribute("data-project");
    const info = projectDetails[key];
    if (!info) {
      return;
    }
    modalContent.innerHTML = `
      <h3>${info.title}</h3>
      <p>${info.text}</p>
      <p><strong>Stack:</strong> ${info.stack.join(", ")}</p>
    `;
    projectModal.showModal();
  });
});

closeModal.addEventListener("click", () => projectModal.close());
projectModal.addEventListener("click", (e) => {
  const rect = projectModal.getBoundingClientRect();
  const isInDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;
  if (!isInDialog) {
    projectModal.close();
  }
});

function animateTerminal() {
  const lines = [
    "$ whoami",
    "anand dutta - frontend developer | 2nd year b.tech cse",
    "$ stack --top",
    "html css javascript python c++",
    "$ build --experience",
    "Compiling premium interaction layer... done"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  terminalBody.textContent = "";

  function type() {
    if (lineIndex >= lines.length) {
      setTimeout(animateTerminal, 2300);
      return;
    }

    const line = lines[lineIndex];
    terminalBody.textContent += line[charIndex] || "";
    charIndex += 1;

    if (charIndex > line.length) {
      terminalBody.textContent += "\n";
      lineIndex += 1;
      charIndex = 0;
      setTimeout(type, 280);
      return;
    }

    setTimeout(type, 32);
  }

  type();
}

animateTerminal();

if (terminalActions) {
  terminalActions.addEventListener("click", (e) => {
    const btn = e.target.closest(".terminal-btn");
    if (!btn) {
      return;
    }

    const cmd = btn.getAttribute("data-cmd");

    if (cmd === "game") {
      if (terminalGame) {
        terminalGame.hidden = false;
      }
      if (gameStatus) {
        gameStatus.textContent = "Fluffy Runner ready. Press Start or Space to run.";
      }
      if (!runnerState.running) {
        drawRunnerGame();
      }
      return;
    }

    const lines = terminalResponses[cmd];
    if (!lines) {
      return;
    }

    terminalBody.textContent += "\n\n";
    lines.forEach((line, i) => {
      setTimeout(() => {
        terminalBody.textContent += `${line}\n`;
      }, i * 120);
    });
  });
}

function getGroundY() {
  return runnerCanvas ? runnerCanvas.height - 24 : 116;
}

function resetRunnerState() {
  runnerState.active = false;
  runnerState.running = false;
  runnerState.score = 0;
  runnerState.frame = 0;
  runnerState.speed = 2.4;
  runnerState.player = { x: 52, y: getGroundY() - 20, vy: 0, w: 20, h: 20, onGround: true };
  runnerState.obstacles = [];
  runnerState.particles = [];
  if (gameStatus) {
    gameStatus.textContent = "Fluffy Runner reset. Press Start to play.";
  }
  drawRunnerGame();
}

function spawnObstacle() {
  if (!runnerCanvas) {
    return;
  }
  const isTall = Math.random() > 0.58;
  const w = isTall ? 16 : 13;
  const h = isTall ? 34 : 24;
  runnerState.obstacles.push({
    x: runnerCanvas.width + 8,
    y: getGroundY() - h,
    w,
    h,
    passed: false
  });
}

function runnerCollide(obstacle) {
  const p = runnerState.player;
  return !(p.x + p.w < obstacle.x || p.x > obstacle.x + obstacle.w || p.y + p.h < obstacle.y || p.y > obstacle.y + obstacle.h);
}

function drawRunnerGame() {
  if (!runnerCtx || !runnerCanvas) {
    return;
  }

  const { width, height } = runnerCanvas;
  const groundY = getGroundY();

  runnerCtx.clearRect(0, 0, width, height);
  runnerCtx.fillStyle = "#efe9dd";
  runnerCtx.fillRect(0, 0, width, height);

  runnerCtx.fillStyle = "rgba(143, 157, 138, 0.15)";
  runnerCtx.beginPath();
  runnerCtx.arc(58, 28, 15, 0, Math.PI * 2);
  runnerCtx.arc(76, 28, 12, 0, Math.PI * 2);
  runnerCtx.fill();

  runnerCtx.beginPath();
  runnerCtx.arc(290, 24, 14, 0, Math.PI * 2);
  runnerCtx.arc(308, 24, 11, 0, Math.PI * 2);
  runnerCtx.fill();

  runnerCtx.strokeStyle = "rgba(43,43,43,0.24)";
  runnerCtx.setLineDash([8, 6]);
  runnerCtx.beginPath();
  runnerCtx.moveTo(0, groundY + 0.5);
  runnerCtx.lineTo(width, groundY + 0.5);
  runnerCtx.stroke();
  runnerCtx.setLineDash([]);

  runnerState.obstacles.forEach((ob) => {
    runnerCtx.fillStyle = "#8f9d8a";
    runnerCtx.fillRect(ob.x, ob.y, ob.w, ob.h);
    runnerCtx.fillStyle = "rgba(255,255,255,0.35)";
    runnerCtx.fillRect(ob.x + 3, ob.y + 3, 3, 3);
  });

  const p = runnerState.player;
  runnerCtx.fillStyle = "#ffffff";
  runnerCtx.beginPath();
  runnerCtx.roundRect(p.x, p.y, p.w, p.h, 7);
  runnerCtx.fill();

  runnerCtx.fillStyle = "#f5d7a5";
  runnerCtx.fillRect(p.x + 2, p.y + 8, p.w - 4, 8);
  runnerCtx.fillStyle = "#2b2b2b";
  runnerCtx.fillRect(p.x + 12, p.y + 6, 2, 2);

  runnerCtx.fillStyle = "#2b2b2b";
  runnerCtx.font = "700 12px Inter";
  runnerCtx.fillText(`Score: ${Math.floor(runnerState.score)}`, 10, 16);
  runnerCtx.fillText(`Best: ${runnerState.best}`, 10, 31);
}

function endRunnerGame() {
  runnerState.active = false;
  runnerState.running = false;
  runnerState.best = Math.max(runnerState.best, Math.floor(runnerState.score));
  if (gameStatus) {
    gameStatus.textContent = `Game over. Score ${Math.floor(runnerState.score)}. Best ${runnerState.best}. Press Start.`;
  }
  drawRunnerGame();
}

function jumpRunner() {
  if (!terminalGame || terminalGame.hidden) {
    return;
  }

  if (!runnerState.active) {
    startRunnerGame();
    return;
  }

  if (runnerState.player.onGround) {
    runnerState.player.vy = -6.2;
    runnerState.player.onGround = false;
  }
}

function updateRunnerGame() {
  if (!runnerState.active || !runnerCanvas) {
    return;
  }

  const groundY = getGroundY();
  runnerState.frame += 1;
  runnerState.score += 0.08;
  runnerState.speed = Math.min(4.3, 2.4 + runnerState.score * 0.012);

  if (runnerState.frame % Math.max(64, 106 - Math.floor(runnerState.score * 0.6)) === 0) {
    spawnObstacle();
  }

  const p = runnerState.player;
  p.vy += 0.34;
  p.y += p.vy;

  if (p.y + p.h >= groundY) {
    p.y = groundY - p.h;
    p.vy = 0;
    p.onGround = true;
  }

  runnerState.obstacles.forEach((ob) => {
    ob.x -= runnerState.speed;
  });
  runnerState.obstacles = runnerState.obstacles.filter((ob) => ob.x + ob.w > -12);

  const hit = runnerState.obstacles.some((ob) => runnerCollide(ob));
  drawRunnerGame();

  if (hit) {
    endRunnerGame();
    return;
  }

  requestAnimationFrame(updateRunnerGame);
}

function startRunnerGame() {
  resetRunnerState();
  runnerState.active = true;
  runnerState.running = true;
  if (gameStatus) {
    gameStatus.textContent = "Running. Press Space or tap to jump.";
  }
  requestAnimationFrame(updateRunnerGame);
}

if (gameStartBtn) {
  gameStartBtn.addEventListener("click", startRunnerGame);
}

if (gameResetBtn) {
  gameResetBtn.addEventListener("click", resetRunnerState);
}

if (runnerCanvas) {
  runnerCanvas.addEventListener("pointerdown", jumpRunner);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    const activeTag = document.activeElement?.tagName || "";
    if (["INPUT", "TEXTAREA"].includes(activeTag)) {
      return;
    }
    e.preventDefault();
    jumpRunner();
  }
});

resetRunnerState();

// Initial reveal for in-view elements on first paint.
requestAnimationFrame(() => {
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("visible");
    }
  });
});
