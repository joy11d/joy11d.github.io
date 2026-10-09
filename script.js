/**
 * ===================================================================
 * ACADEMIC PORTFOLIO JAVASCRIPT ENGINE
 * MD Sanaul Haque Joy | Mechanical Engineering, CUET
 * ===================================================================
 */

// ===================================================================
// 1. BIBTEX CITATION DATABASE
// ===================================================================
const BIBTEX_DATABASE = {
  joy2025pigru: `@article{joy2025pigru,
  title     = {Physics-Informed Gated Recurrent Unit (PI-GRU) for Cross-Dataset Remaining Useful Life Prediction of Lithium-Ion Batteries},
  author    = {Joy, MD Sanaul Haque and Collaborators},
  journal   = {IEEE Transactions on Industrial Informatics},
  year      = {2025},
  publisher = {IEEE},
  doi       = {10.1109/TII.2025.10928}
}`,

  joy2024lobo: `@article{joy2024lobo,
  title     = {Leave-One-Battery-Out (LOBO) Cross-Validation: Benchmarking True Generalization in Degradation Prognostics},
  author    = {Joy, MD Sanaul Haque and Collaborators},
  journal   = {Journal of Power Sources},
  volume    = {589},
  pages     = {233761},
  year      = {2024},
  publisher = {Elsevier},
  doi       = {10.1016/j.jpowsour.2024.233761}
}`,

  joy2024neurips: `@inproceedings{joy2024neurips,
  title     = {Monotonicity Penalties in Deep Recurrent Sequence Models for Physical Degradation},
  author    = {Joy, MD Sanaul Haque and Collaborators},
  booktitle = {NeurIPS Workshop on Scientific Machine Learning (SciML)},
  year      = {2024}
}`,

  joy2025transfer: `@article{joy2025transfer,
  title     = {Cross-Chemistry Transfer of Scientific Recurrent Models in Energy Storage Under Rapid Cycling},
  author    = {Joy, MD Sanaul Haque and Collaborators},
  journal   = {arXiv preprint arXiv:2502.09182},
  year      = {2025}
}`
};

// ===================================================================
// 2. THEME ENGINE (DARK / LIGHT MODE)
// ===================================================================
const themeToggleBtn = document.getElementById('themeToggle');

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });
}

// ===================================================================
// 3. MOBILE MENU TOGGLE
// ===================================================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Auto-close menu when a link is clicked
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// ===================================================================
// 4. SCROLL SPY (ACTIVE NAV LINK ON SCROLL)
// ===================================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ===================================================================
// 5. PROJECT SHOWCASE TABS
// ===================================================================
const tabButtons = document.querySelectorAll('.project-tab-btn');
const tabPanes = document.querySelectorAll('.project-tab-pane');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// ===================================================================
// 6. PUBLICATION FILTERING & REAL-TIME SEARCH
// ===================================================================
const filterBtns = document.querySelectorAll('.pub-filter-btn');
const searchInput = document.getElementById('pubSearch');
const pubCards = document.querySelectorAll('.pub-card');

function filterPublications() {
  const activeBtn = document.querySelector('.pub-filter-btn.active');
  const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  pubCards.forEach(card => {
    const cardType = card.getAttribute('data-type');
    const cardText = card.textContent.toLowerCase();

    const matchesFilter = (activeFilter === 'all') || (cardType === activeFilter);
    const matchesSearch = query === '' || cardText.includes(query);

    if (matchesFilter && matchesSearch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterPublications();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', filterPublications);
}

// Toggle Abstract accordion
function toggleAbstract(absId, btnElement) {
  const absEl = document.getElementById(absId);
  if (!absEl) return;

  const isVisible = absEl.style.display === 'block';
  absEl.style.display = isVisible ? 'none' : 'block';

  if (btnElement) {
    if (isVisible) {
      btnElement.classList.remove('active');
    } else {
      btnElement.classList.add('active');
    }
  }
}

// ===================================================================
// 7. BIBTEX MODAL SYSTEM
// ===================================================================
const bibtexModal = document.getElementById('bibtexModal');
const bibtexContent = document.getElementById('bibtexContent');
const copyBtnText = document.getElementById('copyBtnText');

function openBibtex(paperKey) {
  const citation = BIBTEX_DATABASE[paperKey];
  if (!citation || !bibtexModal || !bibtexContent) return;

  bibtexContent.textContent = citation;
  bibtexModal.classList.add('open');
  bibtexModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (copyBtnText) copyBtnText.textContent = 'Copy to Clipboard';
}

function closeBibtex() {
  if (!bibtexModal) return;
  bibtexModal.classList.remove('open');
  bibtexModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function copyBibtex() {
  if (!bibtexContent) return;
  const code = bibtexContent.textContent;

  navigator.clipboard.writeText(code).then(() => {
    if (copyBtnText) copyBtnText.textContent = '✓ Copied!';
    showToast('BibTeX citation copied to clipboard!');
    setTimeout(() => {
      if (copyBtnText) copyBtnText.textContent = 'Copy to Clipboard';
    }, 2500);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showToast('Failed to copy. Please select and copy manually.');
  });
}

// Close modal on click outside content
if (bibtexModal) {
  bibtexModal.addEventListener('click', (e) => {
    if (e.target === bibtexModal) {
      closeBibtex();
    }
  });
}

// ===================================================================
// 8. IMAGE LIGHTBOX
// ===================================================================
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(src, caption) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  if (lightboxCaption) lightboxCaption.textContent = caption || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Escape key closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBibtex();
    closeLightbox();
  }
});

// ===================================================================
// 9. TOAST NOTIFICATION UTILITY
// ===================================================================
const toast = document.getElementById('toastNotification');
let toastTimer = null;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ===================================================================
// 10. CONTACT FORM HANDLER
// ===================================================================
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const feedback = document.getElementById('formFeedback');

  if (feedback) {
    feedback.innerHTML = `
      <div style="color: var(--accent-emerald); font-weight: 600; padding: 12px; background: var(--accent-emerald-glow); border-radius: 8px;">
        ✓ Thank you, ${name}! Your inquiry has been received. You can also reach MD Sanaul Haque Joy directly at <a href="mailto:shjoy11d@gmail.com" style="text-decoration: underline; color: inherit;">shjoy11d@gmail.com</a>.
      </div>
    `;
  }

  showToast('Message sent successfully!');
  document.getElementById('contactForm').reset();
}

// Update year in footer
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
