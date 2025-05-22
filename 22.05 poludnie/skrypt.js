const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 150); // opóźnienie 150ms dla każdej kolejnej sekcji
      observer.unobserve(entry.target); // zapobiega ponownemu wywołaniu
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
  