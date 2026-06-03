document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const success = document.getElementById('success');
    success.style.display = 'block';
    
    // Limpiar el formulario
    this.reset();
    
    // Ocultar el mensaje después de 8 segundos
    setTimeout(() => {
        success.style.display = 'none';
    }, 8000);
});