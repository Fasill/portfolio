document.addEventListener("mousemove", function(event) {
    var dot = document.getElementById("cursor-dot");
    dot.style.top = event.clientY + window.scrollY + "px"; // Consider scroll offset
    dot.style.left = event.clientX + window.scrollX + "px"; // Consider scroll offset
  
  });
  function scrollToTop() {
    window.scrollTo({
      top :0,
      behavior: 'smooth'
    });
  }
  function scrollToAbout() {
    var aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
