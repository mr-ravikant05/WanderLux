/* ============================================================
   WanderLux – Booking Modal
   Open · Close · Form · Validation · Success
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const modal      = document.getElementById('bookingModal');
  const closeBtn   = document.getElementById('closeModal');
  const form       = document.getElementById('bookingForm');
  const itemNameEl = document.getElementById('bookingItemName');
  const successEl  = document.getElementById('bookingSuccess');

  if (!modal) return;

  /* ── Open modal ─────────────────────────────────────────── */
  function openBookingModal(itemName, itemType) {
    if (itemNameEl) itemNameEl.textContent = itemName || '';

    // update label based on type
    const guestsLabel = document.querySelector('label[for="bookingGuests"]');
    if (guestsLabel) {
      if (itemType === 'vehicle')     guestsLabel.textContent = 'Number of Days';
      else if (itemType === 'house')  guestsLabel.textContent = 'Number of Guests';
      else                            guestsLabel.textContent = 'Number of Persons';
    }

    // reset form & hide success
     if (form) { form.reset(); form.classList.remove('form-hidden'); }
    // if (form) form.reset();
    //     if (form) form.classList.remove('form-hidden');
    // if (successEl) successEl.classList.remove('visible');
    // if (form) form.style.display = 'flex';
        // if (form) form.classList.add('form-visible');

    // clear previous error states
    document.querySelectorAll('#bookingForm .error').forEach(function(el){
      el.classList.remove('error');
    });

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // focus first input
    setTimeout(function () {
      const first = modal.querySelector('input:not([type="hidden"])');
      if (first) first.focus();
    }, 300);
  }

  /* ── Close modal ────────────────────────────────────────── */
  function closeBookingModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  /* ── Event: close button ───────────────────────────────── */
  if (closeBtn) {
    closeBtn.addEventListener('click', closeBookingModal);
  }

  /* ── Event: overlay click ──────────────────────────────── */
//   modal.addEventListener('click', function (e) {
//     if (e.target === modal) closeBookingModal();
//   });
 /* ── Event: overlay click (backdrop only) ─────────────── */
  const backdrop = document.createElement('div');
  backdrop.classList.add('modal-backdrop');
  modal.insertBefore(backdrop, modal.firstChild);
  backdrop.addEventListener('click', closeBookingModal);

  /* ── Event: ESC key ─────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeBookingModal();
    }
  });

  /* ── Event: all "Book Now" buttons (delegation) ─────────── */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.book-now-btn');
    if (btn) {
      openBookingModal(btn.getAttribute('data-item'), btn.getAttribute('data-type'));
    }
  });

  /* ── Form submission ────────────────────────────────────── */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;

      // Validate required fields
      const required = form.querySelectorAll('[required]');
      required.forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      // Basic email validation
      const emailField = form.querySelector('#bookingEmail');
      if (emailField && emailField.value.trim()) {
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(emailField.value.trim())) {
          emailField.classList.add('error');
          valid = false;
        }
      }

      // Basic phone validation
      const phoneField = form.querySelector('#bookingPhone');
      if (phoneField && phoneField.value.trim()) {
        const phoneRe = /^[+\d][\d\s-]{8,}$/;
        if (!phoneRe.test(phoneField.value.trim())) {
          phoneField.classList.add('error');
          valid = false;
        }
      }

      if (!valid) {
        const firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Show success
    //   form.style.display = 'none';
    form.classList.add('form-hidden');
      if (successEl) successEl.classList.add('visible');
    });
  }

  /* ── Close success modal after 3s ──────────────────────── */
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', closeBookingModal);
  }

});
