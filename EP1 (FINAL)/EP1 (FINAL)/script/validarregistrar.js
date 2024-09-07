document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    
    // Limpiar los mensajes de error anteriores
    document.getElementById('usernameError').textContent = '';
    document.getElementById('rutError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('regionError').textContent = '';
    document.getElementById('comunaError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('roleError').textContent = '';
    document.getElementById('termsError').textContent = '';

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const rut = document.getElementById('rut').value;
    const email = document.getElementById('email').value;
    const region = document.getElementById('region').value;
    const comuna = document.getElementById('comuna').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Validar nombre de usuario
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'El nombre completo es obligatorio.';
        isValid = false;
    }

    // Validar RUT
    if (rut.length < 6) {
        document.getElementById('rutError').textContent = 'El RUT es obligatorio.';
        isValid = false;
    }

    // Validar correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.';
        isValid = false;
    }

    // Validar región
    if (region === '') {
        document.getElementById('regionError').textContent = 'Debe seleccionar una región.';
        isValid = false;
    }

    // Validar comuna
    if (comuna === '') {
        document.getElementById('comunaError').textContent = 'Debe seleccionar una comuna.';
        isValid = false;
    }

    // Validar contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

    // Validar confirmación de contraseña
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    // Validar selección de rol
    if (role === '') {
        document.getElementById('roleError').textContent = 'Debe seleccionar un rol.';
        isValid = false;
    }

    // Validar términos y condiciones
    if (!terms) {
        document.getElementById('termsError').textContent = 'Debe aceptar los términos y condiciones.';
        isValid = false;
    }
   
    if (isValid) {
        window.location.href = "menu.html";
        return true;
    }
    return false
});
