const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
    document.getElementById('toggleBtn').style.visibility="hidden";
  });
  
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
    
        document.getElementById('toggleBtn').style.visibility="visible";
    
        
  });
