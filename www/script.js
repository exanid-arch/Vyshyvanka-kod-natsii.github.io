// Показ кнопки "вгору"
    const topBtn = document.getElementById("topBtn");
    window.addEventListener("scroll", () => {
      topBtn.style.display = window.scrollY > 400 ? "block" : "none";
      document.body.style.backgroundPositionY = `${window.scrollY * 0.2}px`; // Паралакс рух фону
    });
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Анімація появи секцій при прокручуванні
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(sec => observer.observe(sec));