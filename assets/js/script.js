document.addEventListener("DOMContentLoaded", () => {
  // Existing view counter code
  const counter = document.getElementById("view-counter");
  let views = localStorage.getItem("views") || 0;
  views++;
  localStorage.setItem("views", views);
  counter.textContent = `Views: ${views}`;

  // PDF Handout Links
  const handouts = {
      'lecture1': 'handouts/lecture1.pdf',
      'lecture2': 'handouts/lecture2.pdf',
      'lecture3': 'handouts/lecture3.pdf'
  };

  // Function to handle PDF opening
  function loadHandout(lectureName) {
      const pdfPath = handouts[lectureName];
      if (pdfPath) {
          window.open(pdfPath, '_blank');
      } else {
          alert('Handout not found');
      }
  }

  // Add event listeners for each handout button
  Object.keys(handouts).forEach(lecture => {
      const button = document.getElementById(`${lecture}-link`);
      if (button) {
          button.addEventListener('click', () => loadHandout(lecture));
      }
  });
});