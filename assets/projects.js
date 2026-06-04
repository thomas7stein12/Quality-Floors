function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade_up").forEach(el => {
  observer.observe(el);
});

(function () {
  const projects = [
    { idx: 0, type: 'hardwood', title: 'Oak Living Room', img: '/assets/project1.png', desc: 'Complete hardwood replacement with custom stain and finish.' },
    { idx: 1, type: 'vinyl', title: 'Modern Kitchen LVP', img: '/assets/project2.png', desc: 'Durable luxury vinyl plank with waterproof underlayment.' },
    { idx: 2, type: 'laminate', title: 'Basement Refresh', img: '/assets/project3.png', desc: 'Aged, pungeant carpet replaced by the highest quality hardwood' },
    { idx: 3, type: 'tile', title: 'Tile Remodel', img: '/assets/project4.png', desc: 'Full renovation including added support and replacement with hardwood which added strength.' },
    { idx: 4, type: 'carpet', title: 'Bedroom Update', img: '/assets/project5.png', desc: 'Carpet removal and upgrade to easy-care hardwood flooring.' },
    { idx: 5, type: 'renovation', title: 'Full Renovation', img: '/assets/project6.png', desc: 'Commercial flooring leveling and remodel.' }
  ];

  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project_card');
  const modal = document.getElementById('project-modal');

  if (!projectCards.length || !modal) return; // nothing to do on pages without projects

  const modalImg = modal.querySelector('.modal-img');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDesc = modal.querySelector('.modal-desc');
  const closeEls = modal.querySelectorAll('[data-close]');
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');

  let currentIndex = 0;

  // Filter behavior
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
  const types = card.dataset.type.split(" ");

  if (filter === 'all' || types.includes(filter)) {
    card.style.display = '';
  } else {
    card.style.display = 'none';
  }
});
    });
  });

  // Open modal when clicking a project
  document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      openModal(index);
    });
  });

  function openModal(index) {
    const p = projects[index];
    if (!p) return;
    currentIndex = index;
    modalImg.src = p.img;
    modalImg.alt = p.title;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showPrev() {
    openModal((currentIndex - 1 + projects.length) % projects.length);
  }

  function showNext() {
    openModal((currentIndex + 1) % projects.length);
  }

  closeEls.forEach(el => el.addEventListener('click', closeModal));
  prevBtn && prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
  nextBtn && nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

  // click outside modal-content closes
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.dataset.close !== undefined) closeModal();
  });

  // keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

})();