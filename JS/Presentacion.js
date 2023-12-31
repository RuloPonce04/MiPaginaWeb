//Cmbiar el color del encabezado cuando bajamos con el scroll

/* 
var header = document.getElementById('Header');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    // Si el desplazamiento es mayor a 10, cambia el color de fondo a '#121212', de lo contrario, a 'black'
    if (scroll > 10) {
        header.style.backgroundColor = '#121212';
    } else {
        header.style.backgroundColor = 'black';
    }
}); */

//---------------------------------------------------------------------------------------

// Mostrar y ocultar detalles de proyectos
function toggleDetails(projectNumber) {
    var detailsElement = document.getElementById("det" + projectNumber);

    // Si los detalles están visibles, los oculta; de lo contrario, los muestra
    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}

//---------------------------------------------------------------------------------------

// Ocultar detalles de proyectos
function cerrarToggleDetails(projectNumber) {
    var detailsElement = document.getElementById("det" + projectNumber);
    detailsElement.style.display = "none";
}

//---------------------------------------------------------------------------------------

// Desplazamiento suave al hacer clic en enlaces del menú
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces del menú
    var menuLinks = document.querySelectorAll(".menu a");

    // Agrega un evento de clic a cada enlace del menú
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtiene el destino del enlace (el ID de la sección)
            var targetId = link.getAttribute("href").substring(1); // Elimina el "#" del href

            // Encuentra la sección correspondiente por su ID
            var targetSection = document.getElementById(targetId);

            // Comprueba si la sección existe
            if (targetSection) {
                // Obtiene la altura del encabezado
                var headerHeight = document.getElementById("Header").offsetHeight;

                // Obtiene la posición actual de desplazamiento
                var currentScrollPosition = window.pageYOffset;

                // Obtiene la posición de destino restando la altura del encabezado
                var targetPosition = targetSection.offsetTop - headerHeight;

                // Calcula la cantidad de desplazamiento necesario
                var scrollAmount = targetPosition - currentScrollPosition;

                // Realiza el desplazamiento suave
                window.scrollBy({
                    top: scrollAmount,
                    behavior: "smooth"
                });
            }
        });
    });
});
