// clear form before unload 
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default anchor
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // scroll animasi, bisa dihapus jika tidak diinginkan
        block: 'center'     // menampilkan section di tengah layar
      });
    }
  });
});

window.onbeforeunload = () => {
  for (const form of document.getElementByTagName("form")) {
    form.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Fungsi untuk membuka menu
  function openMenu() {
    overlay.style.display = 'block';
    nav.classList.add('nav-active');
    burger.classList.add('toggle-burger');
  }

  // Fungsi untuk menutup menu
  function closeMenu() {
    overlay.style.display = 'none';
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle-burger');
  }

  // Event listener untuk toggle burger
  burger.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Event listener untuk klik pada overlay
  overlay.addEventListener('click', () => {
    closeMenu();
  });

  // Event listener untuk setiap link di dalam nav
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
});
