// Projects 
const projects = [
    {
        id: 1,
        title: "Drowsiness Detection using YOLO",
        desc: "Driver Safety Vision System - Built a real-time drowsiness detection system using YOLO to enhance road safety through vision-based monitoring.",
        tech: ["Python", "OpenCV", "YOLOv5"],
        link: "https://github.com/shubhamgupta7217/Drowsiness-Detction-using-YOLO.git",
    },
    {
        id: 2,
        title: "Black Friday Sales EDA",
        desc: "Consumer Insights Dashboard - Explored Black Friday sales data to uncover shopper trends and actionable retail insights.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        link: "https://github.com/shubhamgupta7217/Black-Friday-Sales-Analysis.git",
    },
    {
        id: 3,
        title: "Flight Price EDA",
        desc: "Airfare Trends Analyzer - Analyzed flight dataset to identify pricing patterns and influential factors driving airfare predictions.",
        tech: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
        link: "https://github.com/shubhamgupta7217/Flight-Price-EDA.git",
    },
    {
        id: 4,
        title: "Algorithm Visualiser",
        desc: "Interactive Pathfinding Visualiser - Visualised Dijkstra's algorithm with real-time grid animations, showcasing shortest path discovery.",
        tech: ["DSA", "Dijkstra & graphs", "React.js"],
        link: "https://github.com/shubhamgupta7217/Dijkstra-s-Algorithm-Visualizer.git",
    },
    {
        id: 5,
        title: "Mini URL Shortener",
        desc: "Lightweight URL Shortening Service - Created a scalable system to shorten, store, and redirect URLs efficiently.",
        tech: ["Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/shubhamgupta7217/url-shortener.git",
    },
    {
        id: 6,
        title: "React Movie Tutorial App",
        desc: "Cinematic Explorer Web App - Developed a responsive React app to explore movies via API integration with dynamic UI updates.",
        tech: ["React.js", "JavaScript"],
        link: "https://github.com/shubhamgupta7217/Movie-Tutorial.git",
    },
];

const grid = document.getElementById("projectsGrid");
projects.forEach((p) => {
    const el = document.createElement("div");
    el.className = "project";
    el.tabIndex = 0;
    el.innerHTML = `<h3>${p.title}</h3><p>${
        p.desc
    }</p><div style="height:8px"></div><div class='muted' style='font-size:12px'>${p.tech.join(
        " • "
    )}</div>`;
    el.addEventListener("click", () => openModal(p));
    el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") openModal(p);
    });
    grid.appendChild(el);
});

// Modal behavior
const modal = document.getElementById("modalBackdrop");
function openModal(p) {
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDesc").textContent = p.desc;
    const links = document.getElementById("modalLinks");
    links.innerHTML = "";
    const a = document.createElement("a");
    a.href = p.link;
    a.textContent = "View project";
    a.className = "btn";
    links.appendChild(a);
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// Contact form (example - does not send emails by itself)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    if (!name || !email || !msg) {
        alert("Please fill all fields");
        return;
    }
    // Simple client-side validation passed — open mail client as default fallback
    const subject = encodeURIComponent("Portfolio inquiry from " + name);
    const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    window.location.href = `mailto:sshubhamshu@gmail.com?subject=${subject}&body=${body}`;
});

// Copy email button
document.getElementById("copyEmail").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("sshubhamshu@gmail.com");
        alert("Email copied to clipboard");
    } catch (e) {
        alert("Copy failed — email: sshubhamshu@gmail.com");
    }
});

// Theme toggle (simple)
const themeToggle = document.getElementById("themeToggle");
let dark = true;
themeToggle.addEventListener("click", () => {
    dark = !dark;
    if (!dark) {
        document.documentElement.style.setProperty("--bg", "#f8fafc");
        document.documentElement.style.setProperty("--card", "#ffffff");
        document.documentElement.style.setProperty("--muted", "#475569");
        document.documentElement.style.setProperty("--accent", "#7c3aed");
        document.documentElement.style.setProperty("color-scheme", "light");
        document.body.style.color = "#071127";
    } else {
        document.documentElement.style.setProperty("--bg", "#0f1724");
        document.documentElement.style.setProperty("--card", "#0b1220");
        document.documentElement.style.setProperty("--muted", "#9aa6b2");
        document.body.style.color = "#e6eef6";
    }
});

// Resume download placeholder
document.getElementById("resume").addEventListener("click", (e) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = "Shubham_Gupta_Resume.pdf";
    a.download = "Shubham_Gupta_Resume.pdf";
    a.click();
});

// small accessibility improvement: keyboard shortcut to open first project (g)
// window.addEventListener("keydown", (e) => {
//     if (e.key === "g" && projects[0]) openModal(projects[0]);
// });

