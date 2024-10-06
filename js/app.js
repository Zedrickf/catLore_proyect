document.addEventListener('DOMContentLoaded', function() {
    const slideBanner = document.querySelector('.center__slidebanner');
    const slides = slideBanner.children; // Obtener las diapositivas
    const buttons = document.querySelectorAll('.center__buttoms button');
    
    let currentIndex = 0;

    const moveSlides = (direction) => {
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 50; // Ancho de cada diapositiva más el espaciado

        // Cambiar el índice según la dirección
        if (direction === 'left') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1; // Si es 0, vuelve al último
        } else if (direction === 'right') {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0; // Si es el último, vuelve al primero
        }

        // Calcular el desplazamiento
        const offset = -currentIndex * slideWidth;
        
        // Aplicar transform a los slides directamente
        for (let slide of slides) {
            slide.style.transform = `translateX(${offset}px)`;
            slide.style.transition = 'transform 0.5s ease'; // Duración de la transición
        }
    };

    buttons[0].addEventListener('click', function() {
        moveSlides('left');
    });

    buttons[1].addEventListener('click', function() {
        moveSlides('right');
    });
});