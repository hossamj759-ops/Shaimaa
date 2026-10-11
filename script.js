
// ظهور العناصر أثناء التمرير
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .left, .right, .contact")
  .forEach((el) => observer.observe(el));


// تأثير نبض لزراير الاتصال
setInterval(() => {
  document.querySelectorAll(".call").forEach((btn) => {
    btn.animate([
      { transform: "scale(1)" },
      { transform: "scale(1.08)" },
      { transform: "scale(1)" }
    ], {
      duration: 1000
    });
  });
}, 2500);


// تحريك الخلفية مع الماوس
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / 40;
  const y = e.clientY / 40;

  const blur1 = document.querySelector(".blur1");
  const blur2 = document.querySelector(".blur2");
  const blur3 = document.querySelector(".blur3");

  if (blur1) blur1.style.transform = `translate(${x}px, ${y}px)`;
  if (blur2) blur2.style.transform = `translate(${-x}px, ${-y}px)`;
  if (blur3) blur3.style.transform = `translate(${x / 2}px, ${-y}px)`;
});


// ظهور تدريجي للكروت
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});


// تأثير دوران بسيط للصورة
const img = document.querySelector(".image-box");
if (img) {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "rotate(-2deg) scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotate(0deg) scale(1)";
  });
}
