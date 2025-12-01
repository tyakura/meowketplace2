const cards = document.querySelectorAll(".product-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let brp = parseInt(prompt("Mau beli berapa banyak?"));
    if (!brp) return;

    let total = brp * 35;
    alert(
      `Anda telah membeli ${brp}, dengan total harga ${total}. Terima kasih telah membeli!`
    );
  });
});

function filterProducts(category) {
  const items = document.querySelectorAll(".product-card");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(
    `.tab-btn[onclick="filterProducts('${category}')"]`
  );
  if (activeBtn) activeBtn.classList.add("active");

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.filter = "blur(12px)";
    item.style.transform =
      "translateY(50px) scale(0.88) rotateX(12deg) rotateY(6deg)";
    item.style.display = "none";
  });

  const selected =
    category === "all"
      ? items
      : document.querySelectorAll(`.product-card[data-category="${category}"]`);

  selected.forEach((item, index) => {
    setTimeout(() => {
      item.style.display = "block";

      item.style.transition = `
        opacity 1.1s cubic-bezier(0.12, 0.85, 0.15, 1.2),
        filter 1s cubic-bezier(0.12, 0.85, 0.15, 1.2),
        transform 1.3s cubic-bezier(0.15, 1.4, 0.25, 1.05)
      `;

      item.style.opacity = "1";
      item.style.filter = "blur(0)";

      item.style.transform =
        "translateY(0) scale(1.05) rotateX(0deg) rotateY(0deg)";

      setTimeout(() => {
        item.style.transform =
          "translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";
      }, 350);
    }, index * 110);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".scroll-animate");
  const delay = 150;

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.filter = "blur(14px)";
    item.style.transform =
      "translateY(55px) scale(0.9) rotateX(12deg) rotateY(6deg)";
    item.style.transition = "none";
  });

  function scrollTrigger() {
    let d = 0;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (
        rect.top < window.innerHeight * 0.87 &&
        !item.classList.contains("visible")
      ) {
        item.classList.add("visible");

        setTimeout(() => {
          item.style.transition = `
            opacity 1.15s ease-out,
            filter 1s ease-out,
            transform 1.1s cubic-bezier(0.15, 1.4, 0.25, 1.05)
          `;

          item.style.opacity = "1";
          item.style.filter = "blur(0)";
          item.style.transform =
            "translateY(0) scale(1.04) rotateX(0) rotateY(0)";

          setTimeout(() => {
            item.style.transform =
              "translateY(0) scale(1) rotateX(0) rotateY(0)";
          }, 320);
        }, d);

        d += delay;
      }
    });
  }

  window.addEventListener("scroll", scrollTrigger);
  scrollTrigger();
});

const icons = document.querySelectorAll("svg, i[data-lucide]");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    alert("Maaf, fitur ini belum tersedia.");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  observer.observe(el);
});

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});