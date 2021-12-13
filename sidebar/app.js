const sidebarToggle = document.querySelector('.sidebar-toggle');
const links = document.querySelector('links');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn'); 

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});