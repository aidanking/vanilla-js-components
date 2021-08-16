const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
let isSidebarOpen = false;


function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
  if(isSidebarOpen) {
    openBtn.setAttribute('disabled', true);
    closeBtn.focus();
  } else {
    openBtn.removeAttribute('disabled');
    openBtn.focus();
  }
  sidebar.classList.toggle('sidebar--visible');
}

openBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar)