document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fecha = document.getElementById('fecha').value;
    const pais = document.getElementById('pais').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const comentarios = document.getElementById('comentarios').value;

    const datosUsuario = {
        nombre,
        email,
        password,
        fecha,
        pais,
        genero,
        comentarios
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));

    window.location.href = 'resultados.html';
});
