document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    var isValid = true;

  
    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor, ingresa tu correo electrónico.';
        isValid = false;
    } else if (!validateEmailFormat(email)) {
        document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
        isValid = false;
    }

   
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Por favor, ingresa tu contraseña.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }


    
    if (isValid) {
        window.location.href = "menu.html";
        return true;
    }
    return false
});



function validateEmailFormat(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
