/* ============================================================
   WanderLux – Search & Filter JS
   Destination Page · House Page · Car Rental Page
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.split('/').pop();

  if (path === 'destination.html') initDestinationPage();
  else if (path === 'house.html')  initHousePage();
  else if (path === 'car-rental.html') initCarPage();
});

/* ══════════════════════════════════════════════════════════
   DESTINATION PAGE
   ══════════════════════════════════════════════════════════ */
function initDestinationPage() {
  const searchInput    = document.getElementById('destSearch');
  const priceFilter    = document.getElementById('destPrice');
  const destGrid       = document.getElementById('destGrid');
  const countEl        = document.getElementById('destCount');
  const tagBtns        = document.querySelectorAll('.tag-btn[data-tag]');

  if (!destGrid) return;

  let activeTag   = '';
  let searchQuery = '';
  let priceRange  = '';

  function filterAndRender() {
    let filtered = destinations.slice();

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(function (d) {
        return d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some(function(t){ return t.toLowerCase().includes(q); });
      });
    }

    if (activeTag) {
      filtered = filtered.filter(function (d) {
        return d.tags.map(function(t){ return t.toLowerCase(); }).includes(activeTag.toLowerCase());
      });
    }

    if (priceRange) {
      const parts = priceRange.split('-');
      const min   = parseInt(parts[0]) || 0;
      const max   = parts[1] === '+' ? Infinity : (parseInt(parts[1]) || Infinity);
      filtered = filtered.filter(function (d) {
        return d.price >= min && d.price <= max;
      });
    }

    if (countEl) countEl.textContent = filtered.length + ' destinations found';

    if (!filtered.length) {
      destGrid.innerHTML = '<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i><p>No destinations match your search. Try different filters.</p></div>';
      return;
    }

    destGrid.innerHTML = '';
    filtered.forEach(function (item, idx) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = renderDestCard(item);
      const card = wrapper.firstElementChild;
      if (idx < 12) card.classList.add('stagger-' + (idx + 1));
      card.classList.add('card-animate');
      destGrid.appendChild(card);
    });
  }

  // Tag buttons
  tagBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tag = btn.getAttribute('data-tag');
      if (activeTag === tag) {
        activeTag = '';
        btn.classList.remove('active');
      } else {
        tagBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        activeTag = tag;
      }
      filterAndRender();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value.trim();
      filterAndRender();
    });
  }

  // Price filter
  if (priceFilter) {
    priceFilter.addEventListener('change', function () {
      priceRange = priceFilter.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}

/* ══════════════════════════════════════════════════════════
   HOUSE PAGE
   ══════════════════════════════════════════════════════════ */
function initHousePage() {
  const searchInput  = document.getElementById('houseSearch');
  const typeFilter   = document.getElementById('houseType');
  const priceFilter  = document.getElementById('housePrice');
  const houseGrid    = document.getElementById('houseGrid');
  const countEl      = document.getElementById('houseCount');

  if (!houseGrid) return;

  let searchQuery = '';
  let typeFilter_ = '';
  let priceRange  = '';

  function filterAndRender() {
    let filtered = properties.slice();

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(function (h) {
        return h.name.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q) ||
          h.type.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q);
      });
    }

    if (typeFilter_) {
      filtered = filtered.filter(function (h) {
        return h.type.toLowerCase().includes(typeFilter_.toLowerCase());
      });
    }

    if (priceRange) {
      const parts = priceRange.split('-');
      const min   = parseInt(parts[0]) || 0;
      const max   = parts[1] === '+' ? Infinity : (parseInt(parts[1]) || Infinity);
      filtered = filtered.filter(function (h) {
        return h.price >= min && h.price <= max;
      });
    }

    if (countEl) countEl.textContent = filtered.length + ' properties found';

    if (!filtered.length) {
      houseGrid.innerHTML = '<div class="no-results"><i class="fa-solid fa-house"></i><p>No properties match your criteria.</p></div>';
      return;
    }

    houseGrid.innerHTML = '';
    filtered.forEach(function (item, idx) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = renderHouseCard(item);
      const card = wrapper.firstElementChild;
      if (idx < 12) card.classList.add('stagger-' + (idx + 1));
      card.classList.add('card-animate');
      houseGrid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value.trim();
      filterAndRender();
    });
  }

  if (typeFilter) {
    typeFilter.addEventListener('change', function () {
      typeFilter_ = typeFilter.value;
      filterAndRender();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener('change', function () {
      priceRange = priceFilter.value;
      filterAndRender();
    });
  }

  filterAndRender();
}

/* ══════════════════════════════════════════════════════════
   CAR RENTAL PAGE
   ══════════════════════════════════════════════════════════ */
function initCarPage() {
  const searchInput    = document.getElementById('carSearch');
  const catBtns        = document.querySelectorAll('.car-cat-btn');
  const typeFilter     = document.getElementById('carType');
  const carGrid        = document.getElementById('carGrid');
  const countEl        = document.getElementById('carCount');

  if (!carGrid) return;

  let searchQuery     = '';
  let activeCat       = 'all';
  let vehicleType     = '';

  function filterAndRender() {
    let filtered = vehicles.slice();

    if (activeCat && activeCat !== 'all') {
      filtered = filtered.filter(function (v) {
        return v.category === activeCat || v.type === activeCat;
      });
    }

    if (vehicleType) {
      filtered = filtered.filter(function (v) {
        return v.type === vehicleType;
      });
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(function (v) {
        return v.name.toLowerCase().includes(q) ||
          v.fuel.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q);
      });
    }

    if (countEl) countEl.textContent = filtered.length + ' vehicles available';

    if (!filtered.length) {
      carGrid.innerHTML = '<div class="no-results"><i class="fa-solid fa-car"></i><p>No vehicles match your search.</p></div>';
      return;
    }

    carGrid.innerHTML = '';
    filtered.forEach(function (item, idx) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = renderCarCard(item);
      const card = wrapper.firstElementChild;
      if (idx < 12) card.classList.add('stagger-' + (idx + 1));
      card.classList.add('card-animate');
      carGrid.appendChild(card);
    });
  }

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat');
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value.trim();
      filterAndRender();
    });
  }

  if (typeFilter) {
    typeFilter.addEventListener('change', function () {
      vehicleType = typeFilter.value;
      filterAndRender();
    });
  }

  filterAndRender();
}
