document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.card');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      clearActiveStates();
      item.classList.add('card--active');
    });
  });

  function clearActiveStates() {
    galleryItems.forEach(item => item.classList.remove('card--active'));
  }
});