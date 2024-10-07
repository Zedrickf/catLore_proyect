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
            currentIndex = (currentIndex < totalSlides - 4) ? currentIndex + 1 : 0; // Si es el último, vuelve al primero
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


// Obtener todos los botones y agregar un EventListener
const buttons = document.querySelectorAll('.carousel__dt');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));

        // Obtener el ID del input de destino desde el atributo data-target
        const radioId = button.getAttribute('data-target');
        const radioInput = document.getElementById(radioId);

        // Cambiar el radio-button correspondiente y añadir la clase 'active' al botón
        if (radioInput) {
            radioInput.checked = true;
            button.classList.add('active'); // Marcar el botón como activo
        }
    });
});