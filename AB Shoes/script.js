function scrollToSection2() {
  const section = document.getElementById(second - page);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToSection3() {
  const section = document.getElementById(third - page);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


