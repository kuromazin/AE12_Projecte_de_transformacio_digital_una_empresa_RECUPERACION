document.addEventListener("DOMContentLoaded", function() {
    // Animació d'entrada per a totes les seccions amb la classe fade-in
    document.querySelectorAll('.fade-in').forEach(function(el) {
        el.classList.add('show');
    });
});