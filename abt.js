document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    let delay = 0;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.86;

      if (!el.classList.contains("active") && rect.top < triggerPoint) {
        el.style.setProperty("--delay", `${delay}ms`);
        el.classList.add("active");
        delay += 120;
      }
    });
  };

  revealOnScroll();

  window.addEventListener("scroll", revealOnScroll);
});
