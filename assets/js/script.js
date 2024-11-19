document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("view-counter");
  let views = localStorage.getItem("views") || 0;
  views++;
  localStorage.setItem("views", views);
  counter.textContent = `Views: ${views}`;
});
