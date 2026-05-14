// Modal Logic
const modal = document.getElementById('roadmap-modal');
const modalHeader = document.getElementById('modal-header');
const modalTimeline = document.getElementById('modal-timeline');
const modalCerts = document.getElementById('modal-certs');

const cardMap = {
    'role-frontend':'frontend','role-backend':'backend','role-fullstack':'fullstack',
    'role-uiux':'uiux','role-data':'data','role-devops':'devops',
    'role-mobile':'mobile','role-pm':'pm'
};

function openRoadmap(roleKey) {
    const role = R[roleKey];
    if (!role) return;
    
    // Header
    let tagHTML = role.tag ? `<span style="padding:0.25rem 0.75rem;background:${role.tagBg};border:3px solid #0a0a0a;font-weight:800;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;box-shadow:2px 2px 0px 0px #0a0a0a;color:#0a0a0a">${role.tag}</span>` : '';
    
    modalHeader.innerHTML = `
        <button class="modal-close" onclick="closeRoadmap()" aria-label="Close">✕</button>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:0.75rem">
            <h2 style="font-family:'Clash Grotesk',sans-serif;font-weight:900;font-size:2.5rem;text-transform:uppercase;letter-spacing:-0.02em;line-height:1">${role.title}</h2>
            ${tagHTML}
        </div>
        <p style="font-weight:600;font-size:1.1rem;color:#555;margin-bottom:0.5rem">${role.desc}</p>
        <div style="display:inline-block;padding:0.5rem 1rem;background:#0a0a0a;color:#FFD600;font-weight:900;font-size:1.1rem;border:3px solid #0a0a0a">💰 ${role.salary}</div>
    `;

    // Timeline
    let timelineHTML = '';
    role.phases.forEach((phase, i) => {
        const dotColor = defined_colors[i % defined_colors.length];
        const skillsHTML = phase.skills.map(s => {
            const colors = ['#FFD600','#00d9ff','#bbf7d0','#fff','#ff006e20'];
            return `<span class="skill-tag" style="background:${colors[i % colors.length]}">${s}</span>`;
        }).join('');
        
        const coursesHTML = phase.courses.map(c => `
            <a href="${c.u}" target="_blank" rel="noopener" class="course-link">
                <span class="course-badge" style="background:${c.free ? '#bbf7d0' : '#FFD600'}">${c.free ? 'FREE' : 'PAID'}</span>
                <span style="flex:1">${c.t}</span>
                <span style="font-size:0.75rem;color:#777;white-space:nowrap">${c.p}</span>
                <iconify-icon icon="ph:arrow-square-out-bold" style="font-size:1.1rem;color:#999"></iconify-icon>
            </a>
        `).join('');

        timelineHTML += `
            <div class="phase">
                <div class="phase-dot" style="background:${dotColor}">${i + 1}</div>
                <div class="phase-card">
                    <h3 style="font-family:'Clash Grotesk',sans-serif;font-weight:800;font-size:1.3rem;text-transform:uppercase;letter-spacing:-0.01em;margin-bottom:0.25rem">
                        Phase ${i + 1}: ${phase.name}
                    </h3>
                    <div class="skills-grid">${skillsHTML}</div>
                    <div style="margin-top:0.75rem">
                        <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#999">Recommended Courses</span>
                        ${coursesHTML}
                    </div>
                </div>
            </div>
        `;
    });
    modalTimeline.innerHTML = timelineHTML;

    // Certifications
    const certsHTML = role.certs.map(c => `
        <a href="${c.u}" target="_blank" rel="noopener" class="cert-card">
            <div style="font-weight:800;font-size:1rem;margin-bottom:0.25rem">${c.t}</div>
            <div style="font-size:0.8rem;color:#777">${c.p} →</div>
        </a>
    `).join('');

    modalCerts.innerHTML = `
        <div style="border-top:6px solid #0a0a0a;padding-top:1.5rem">
            <h3 style="font-family:'Clash Grotesk',sans-serif;font-weight:900;font-size:1.5rem;text-transform:uppercase;margin-bottom:1rem">
                🏆 Top Certifications
            </h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem">
                ${certsHTML}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
}

function closeRoadmap() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
Object.keys(cardMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            openRoadmap(cardMap[id]);
        });
    }
});

// Close on backdrop click
modal.addEventListener('click', function(e) {
    if (e.target === modal) closeRoadmap();
});

// Close on ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeRoadmap();
});
