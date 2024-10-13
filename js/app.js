const imagenes = document.querySelectorAll('.myImg');
const botones = document.querySelectorAll('.expanBtn');


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



// evento para recorrer todas las imagenes y botones y ampliar la imagen
botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Crear un contenedor fullscreen
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('fullscreen');
        
        // Clonar la imagen correspondiente al botón
        const clonedImage = imagenes[index].cloneNode();
        fullscreenContainer.appendChild(clonedImage);
        
        // Añadir el contenedor a la página
        document.body.appendChild(fullscreenContainer);
        
        // Usar setTimeout para permitir que la clase se aplique antes de mostrarla
        setTimeout(() => {
            fullscreenContainer.classList.add('show');
        }, 10); // Esperar un poco para permitir que la transición funcione
        
        // Al hacer clic en el contenedor, cerrarlo
        fullscreenContainer.addEventListener('click', () => {
            fullscreenContainer.classList.remove('show'); // Quitar clase 'show'
            setTimeout(() => {
                document.body.removeChild(fullscreenContainer); // Eliminar contenedor después de la transición
            }, 300); // Esperar la duración de la transición antes de eliminar
        });
    });
});

//muestra las opciones en el banner 
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('navibar__hiddenBtn')
    const nav = document.querySelector(".navibar__buttoms");

    menuBtn.addEventListener("click", function() {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open"); // Esto aplica la transformación de las líneas
    });
});