document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'formularioiniciodesesion.html'; 
});

document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    window.location.href = 'menu.html'; 
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    window.location.href = 'menu.html'; 
});
