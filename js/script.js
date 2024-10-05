document.querySelectorAll('.nav__link').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});
