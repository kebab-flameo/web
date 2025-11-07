
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobileBtn');
  let menuDiv = null;

  const closeMenu = () => {
    if (menuDiv) {
      menuDiv.classList.add('opacity-0');
      setTimeout(() => { if (menuDiv) menuDiv.remove(); menuDiv = null; }, 200);
    }
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menuDiv) {
      closeMenu();
    } else {
      menuDiv = document.createElement('div');
      menuDiv.className = 'mobile-links fixed inset-x-0 top-16 bg-neutral-900/95 backdrop-blur-md text-center py-4 z-50 transition-opacity duration-200 opacity-100';
      menuDiv.innerHTML = `
        <a href="#home" class="block py-3 hover:text-amber-400">Home</a>
        <a href="#about" class="block py-3 hover:text-amber-400">O nás</a>
        <a href="#menu" class="block py-3 hover:text-amber-400">Menu</a>
        <a href="#contact" class="block py-3 hover:text-amber-400">Kontakt</a>`;
      document.body.appendChild(menuDiv);
    }
  });

  document.addEventListener('click', (e) => {
    if (menuDiv && !menuDiv.contains(e.target) && e.target.id !== 'mobileBtn') closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-links a')) closeMenu();
  });
});
