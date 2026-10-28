document.addEventListener('DOMContentLoaded', () => {
  const toast = document.querySelector('.toast');

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  };

  document.querySelector('.primary-button')?.addEventListener('click', () => {
    showToast('Welcome! Your journey is ready.');
  });

  document.querySelector('.secondary-button')?.addEventListener('click', () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelector('.social-btn.google')?.addEventListener('click', () => {
    // Replace this with your real Google OAuth endpoint.
    // Example: window.location.href = '/auth/google';
    showToast('Google sign-in is ready to connect to your OAuth flow.');
  });

  document.querySelector('.social-btn.apple')?.addEventListener('click', () => {
    // Replace this with your real Apple OAuth endpoint.
    // Example: window.location.href = '/auth/apple';
    showToast('Apple sign-in is ready to connect to your OAuth flow.');
  });

  document.querySelector('.primary-button.small')?.addEventListener('click', () => {
    showToast('Let’s begin your calm space.');
  });
});
