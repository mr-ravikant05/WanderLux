/* ============================================================
   WanderLux – Main JS
   Navbar · Mobile Menu · Scroll Reveal · FAQ · Category Tabs (Home)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Navbar scroll effect ──────────────────────────────── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function handleNavbarScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();
  }

  /* ── Mobile hamburger menu ─────────────────────────────── */
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');

  if (hamburger && navLinks) {
    function openMenu() {
      hamburger.classList.add('open');
      navLinks.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.classList.add('modal-open');
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    }

    hamburger.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ── Active nav link ───────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll Reveal (IntersectionObserver) ──────────────── */
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const allRevealEls  = document.querySelectorAll(revealClasses.join(','));

  if ('IntersectionObserver' in window && allRevealEls.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    allRevealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    allRevealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ── FAQ Accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(function (openItem) {
        openItem.classList.remove('active');
      });
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  /* ── Home page: Category tabs + Search ─────────────────── */
  const categoryTabsEl = document.getElementById('categoryTabs');
  if (categoryTabsEl) {
    initHomePage();
  }
});

/* ── Home page init (called when #categoryTabs exists) ──── */
function initHomePage() {
  const searchInput  = document.getElementById('homeSearch');
  const searchBtn    = document.getElementById('homeSearchBtn');
  const budgetFilter = document.getElementById('budgetFilter');
  const resultsGrid  = document.getElementById('resultsGrid');
  const resultsTitle = document.getElementById('resultsTitle');
  const viewAllLink  = document.getElementById('viewAllLink');
  const catBtns      = document.querySelectorAll('[data-category]');

  if (!resultsGrid) return;

  let activeCategory = 'destinations';
  let searchQuery    = '';
  let budgetRange    = '';

  function getActiveData() {
    if (activeCategory === 'houses')   return { data: properties,    type: 'house' };
    if (activeCategory === 'cars')     return { data: vehicles,      type: 'car' };
    if (activeCategory === 'weekend')  return { data: destinations.filter(function(d){ return d.weekend; }), type: 'destination' };
    return { data: destinations, type: 'destination' };
  }

  function applyFilters(items, type) {
    let filtered = items;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(function (item) {
        return (
          item.name.toLowerCase().includes(q) ||
          (item.country && item.country.toLowerCase().includes(q)) ||
          (item.location && item.location.toLowerCase().includes(q)) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          (item.tags && item.tags.some(function(t){ return t.toLowerCase().includes(q); }))
        );
      });
    }
    if (budgetRange) {
      const parts = budgetRange.split('-');
      const min   = parseInt(parts[0]) || 0;
      const max   = parts[1] === '+' ? Infinity : (parseInt(parts[1]) || Infinity);
      filtered = filtered.filter(function (item) {
        return item.price >= min && item.price <= max;
      });
    }
    return filtered;
  }

  function renderHomeCards() {
    const active   = getActiveData();
    const filtered = applyFilters(active.data, active.type);
    const shown    = filtered.slice(0, 8);

    // update title
    const titles = { destinations: 'Popular Destinations', houses: 'Top Stays', cars: 'Featured Vehicles', weekend: 'Weekend Getaways' };
    if (resultsTitle) resultsTitle.textContent = titles[activeCategory] || 'Results';

    // update view all link
    const links = { destinations: 'destination.html', houses: 'house.html', cars: 'car-rental.html', weekend: 'destination.html' };
    if (viewAllLink) viewAllLink.setAttribute('href', links[activeCategory] || 'destination.html');

    if (!shown.length) {
      resultsGrid.innerHTML = '<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i><p>No results found. Try a different search.</p></div>';
      return;
    }

    resultsGrid.innerHTML = '';
    shown.forEach(function (item, idx) {
      const cardEl = document.createElement('div');
      cardEl.innerHTML = renderCard(item, active.type);
      const card = cardEl.firstElementChild;
      if (idx < 12) card.classList.add('stagger-' + (idx + 1));
      card.classList.add('card-animate');
      resultsGrid.appendChild(card);
    });
  }

  function renderCard(item, type) {
    if (type === 'destination') return renderDestCard(item);
    if (type === 'house')       return renderHouseCard(item);
    return renderCarCard(item);
  }

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderHomeCards();
    });
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      searchQuery = (searchInput ? searchInput.value.trim() : '');
      renderHomeCards();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchQuery = searchInput.value.trim();
        renderHomeCards();
      }
    });
  }

  if (budgetFilter) {
    budgetFilter.addEventListener('change', function () {
      budgetRange = budgetFilter.value;
      renderHomeCards();
    });
  }

  // initial render
  renderHomeCards();
}

/* ── Card render helpers (shared) ───────────────────────── */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  let html    = '';
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  return html;
}

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function getTagClass(tag) {
  const map = {
    Adventure: 'adventure', Beach: 'beach', Romantic: 'romantic',
    Peace: 'peace', Heritage: 'heritage', Mountains: 'mountains',
    City: 'city', Nature: 'nature', Luxury: 'luxury'
  };
  return 'tag--' + (map[tag] || 'default');
}

function renderDestCard(item) {
  const tagsHTML = (item.tags || []).slice(0, 2).map(function (t) {
    return '<span class="tag ' + getTagClass(t) + '">' + t + '</span>';
  }).join('');

  return '<div class="dest-card" data-id="' + item.id + '">' +
    '<div class="dest-card-img-wrap">' +
      '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
      '<div class="dest-card-tags">' + tagsHTML + '</div>' +
      '<div class="dest-card-rating"><i class="fa-solid fa-star"></i>' + item.rating + '</div>' +
    '</div>' +
    '<div class="dest-card-body">' +
      '<div class="dest-card-location"><i class="fa-solid fa-location-dot"></i>' + item.country + '</div>' +
      '<h3 class="dest-card-title">' + item.name + '</h3>' +
      '<p class="dest-card-desc">' + item.description + '</p>' +
      '<div class="dest-card-footer">' +
        '<div class="dest-card-price">' +
          '<span class="price-from">Starting from</span>' +
          '<span class="price-value">' + formatPrice(item.price) + '</span>' +
          '<span class="price-per">/ person</span>' +
        '</div>' +
        '<button class="book-now-btn" data-item="' + item.name + ', ' + item.country + '" data-type="destination" data-testid="book-dest-' + item.id + '">Book Now</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderHouseCard(item) {
  return '<div class="house-card" data-id="' + item.id + '">' +
    '<div class="house-card-img-wrap">' +
      '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
      '<div class="house-card-type-badge">' + item.type + '</div>' +
    '</div>' +
    '<div class="house-card-body">' +
      '<div class="house-card-location"><i class="fa-solid fa-location-dot"></i>' + item.location + '</div>' +
      '<h3 class="house-card-title">' + item.name + '</h3>' +
      '<p class="house-card-desc">' + item.description + '</p>' +
      '<div class="house-card-meta">' +
        '<span class="house-meta-item"><i class="fa-solid fa-users"></i>Up to ' + item.guests + ' guests</span>' +
        '<span class="house-meta-item"><i class="fa-solid fa-star"></i>' + item.rating + '</span>' +
      '</div>' +
      '<div class="house-card-footer">' +
        '<div class="price-block">' +
          '<span class="price-from">Per night</span>' +
          '<span class="price-value">' + formatPrice(item.price) + '</span>' +
          '<span class="price-per"> onwards</span>' +
        '</div>' +
        '<button class="book-now-btn" data-item="' + item.name + '" data-type="house" data-testid="book-house-' + item.id + '">Book Now</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderCarCard(item) {
  const badgeClass = item.type === 'bike' ? 'car-type-badge--bike' : 'car-type-badge--car';
  const badgeLabel = item.type === 'bike' ? 'Bike' : 'Car';
  return '<div class="car-card" data-id="' + item.id + '">' +
    '<div class="car-card-img-wrap">' +
      '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
      '<span class="car-type-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
    '</div>' +
    '<div class="car-card-body">' +
      '<h3 class="car-card-title">' + item.name + '</h3>' +
      '<div class="car-specs">' +
        '<span class="car-spec-item"><i class="fa-solid fa-gas-pump"></i>' + item.fuel + '</span>' +
        '<span class="car-spec-item"><i class="fa-solid fa-gears"></i>' + item.transmission + '</span>' +
        '<span class="car-spec-item"><i class="fa-solid fa-users"></i>' + item.seats + ' Seats</span>' +
        '<span class="car-spec-item"><i class="fa-solid fa-star"></i>' + item.rating + '</span>' +
      '</div>' +
      '<p class="car-card-desc">' + item.description + '</p>' +
      '<div class="car-card-footer">' +
        '<div class="price-block">' +
          '<span class="price-from">Per day</span>' +
          '<span class="price-value">' + formatPrice(item.price) + '</span>' +
        '</div>' +
        '<button class="book-now-btn" data-item="' + item.name + '" data-type="vehicle" data-testid="book-car-' + item.id + '">Book Now</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}


  /* ── Contact Form (queries.html) ───────────────────────── */
  var contactForm = document.getElementById('contactForm');
  var contactSuccessMsg = document.getElementById('contactSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (f) {
        f.classList.remove('error');
        if (!f.value.trim()) { f.classList.add('error'); valid = false; }
      });
      if (valid) {
        contactForm.reset();
        if (contactSuccessMsg) { contactSuccessMsg.classList.add('visible'); }
        setTimeout(function () {
          if (contactSuccessMsg) contactSuccessMsg.classList.remove('visible');
        }, 5000);
      }
    });
  }

  /* ── Home page: Category tabs + Search ─────────────────── */