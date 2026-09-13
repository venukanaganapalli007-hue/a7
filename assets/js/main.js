document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) { toggle.addEventListener('click', function () { links.classList.toggle('open'); }); }
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) { note.textContent = "Thanks — we've got your message and will write back soon."; note.style.color = '#8A6329'; }
      form.reset();
    });
  }
});
