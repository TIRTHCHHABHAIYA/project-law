var navItems = document.querySelectorAll('nav ul li a');
function homepagetosearchpage() {
  window.location.href = "dashboard.html";
}



navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});

