// slider

$('.carousel').carousel({
    interval: 4000
})


// sidebar 

const burger = document.getElementById('munuToggle');
const  sidebar = document.getElementById('sidebarContainer');
const close = document.getElementById('closeBtn');

burger.addEventListener('click', function() {
    sidebar.style.display = 'block';
    document.body.style.overflow = "hidden";
});

close.addEventListener('click', function() {
    sidebar.style.display = 'none';
    document.body.style.overflow = "auto";
});

window.addEventListener('click', function(e) {
    if(e.target == sidebar) {
        sidebar.style.display = 'none';
        document.body.style.overflow = "auto";
    }
})