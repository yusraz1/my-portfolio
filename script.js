function showSkill(skillName) {
  alert("You clicked on: " + skillName);
}

// Smooth scrolling for navbar links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});