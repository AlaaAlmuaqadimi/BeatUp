document.querySelectorAll('.accordion-heading').forEach((heading) => {
  heading.addEventListener('click', () => {
    let accordion = heading.parentElement;
    accordion.classList.toggle('active');
  });
});
