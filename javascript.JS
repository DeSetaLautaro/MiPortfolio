document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});

$('.toggle-trigger').click(function() {
   // $(this).next().toggle('slow');
    $(this).toggleClass("active");
    return false;
}).next().hide();

// script.js 
   // Toggle Containers
   const triggers = document.querySelectorAll('.toggle-trigger');

   triggers.forEach(trigger => {
       trigger.addEventListener('click', function() {
           const toggleContainer = this.nextElementSibling;

           if (toggleContainer.classList.contains('show')) {
               toggleContainer.classList.remove('show');
               toggleContainer.style.maxHeight = null;
           } else {
               // Cerrar cualquier otro contenedor abierto
               document.querySelectorAll('.toggle-container.show').forEach(container => {
                   container.classList.remove('show');
                   container.style.maxHeight = null;
               });
               toggleContainer.classList.add('show');
               toggleContainer.style.maxHeight = toggleContainer.scrollHeight + "px";
           }
       });
   });

/*
document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.toggle-trigger');
    const otraSeccion = document.getElementById("cont-cv-der");
    const titulo = document.getElementById("seccionPro");
    const Boton = document.getElementById("btnCV");
    const BotonResp = document.getElementById("btnCVResponsive");
    const AccordionContainer = document.getElementById("accordion-container.active");


    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const toggleContainer = this.nextElementSibling;

            if (toggleContainer.style.display === 'block') {
                toggleContainer.style.display = 'none';
                toggleContainer.style.maxHeight = null;
                toggleContainer.style.marginBottom = null;

                // Reset the margin of the next toggle trigger if it exists
                const nextToggle = toggleContainer.parentElement.nextElementSibling;
                if (nextToggle) {
                    nextToggle.style.marginTop = null;
                }
                if (otraSeccion)
                    {
                        otraSeccion.style.marginTop = null;
                    }
            
                if (titulo)
                    {
                        titulo.style.marginTop = null;
                    }
                if(Boton)
                    {
                        Boton.style.marginTop = null;
                    } 
                if (BotonResp)
                    {
                        BotonResp.style.marginTop = null;
                    }       
                
                
                

                // Remove the active class from the current trigger
                this.classList.remove('active');
            } else {

                // Cerrar cualquier otro contenedor abierto y eliminar su clase active
                document.querySelectorAll('.toggle-container').forEach(container => {
                    container.style.display = 'none';
                    container.style.maxHeight = null;
                    container.style.marginBottom = null;

                    // Reset the margin of the next toggle trigger
                    const nextSibling = container.parentElement.nextElementSibling;
                    if (nextSibling) {
                        nextSibling.style.marginTop = null;
                    }
                   

                    // Remove the active class from any other triggers
                    const previousTrigger = container.previousElementSibling;
                    if (previousTrigger) {
                        previousTrigger.classList.remove('active');
                    }
                });

                toggleContainer.style.display = 'block';

                // Adjust the margin of the next toggle trigger if it exists
                const nextToggle = toggleContainer.parentElement.nextElementSibling;
                
                if (nextToggle) {
                    nextToggle.style.marginTop = toggleContainer.scrollHeight + "px"; // Ensure enough space
                }
                if (otraSeccion && otraSeccion.offsetWidth === otraSeccion.parentElement.offsetWidth) {
                    otraSeccion.style.marginTop = toggleContainer.scrollHeight + "px";
                    titulo.style.marginTop = "27%";
                }
                if(Boton) 
                    {
                        Boton.style.marginTop =toggleContainer.scrollHeight + "px";
                    }
                if (BotonResp)    
                    {
                        BotonResp.style.marginTop = (AccordionContainer.scrollHeight + toggleContainer.style.marginTop) + "px";
                    }

                    
                

                

                // Add the active class to the current trigger
                this.classList.add('active');
            }
        });
    });
});



$(document).ready(function () {
    $('.accordion-container').hide(); // Ocultar todos los contenedores de los acordeones
    $('.accordion-trigger:first').addClass('active').next().show(); // Mostrar el primer contenedor
    
    const botonResponsive = document.getElementById("btnCVResponsive");
    
    $('.accordion-trigger').click(function () {
        const container = $(this).next();
        
        if (container.is(':hidden')) { // Si el contenedor siguiente está oculto
            $('.accordion-trigger').removeClass('active').next().slideUp(); // Ocultar todos los contenedores
            $(this).toggleClass('active').next().slideDown({
                complete: function() {
                    container.addClass('active'); // Añadir clase active al contenedor desplegado
                        botonResponsive.style.marginTop = container.height() + "px";
                }
            }); // Mostrar el contenedor actual y ajustar el margen después de la animación
        }

        return false; // Prevenir comportamiento predeterminado del clic
    });
});

*/
document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.toggle-trigger');
    const otraSeccion = document.getElementById("cont-cv-der");
    const titulo = document.getElementById("seccionPro");
    const Boton = document.getElementById("btnCV");
    const BotonResp = document.getElementById("btnCVResponsive");

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const toggleContainer = this.nextElementSibling;


            if (toggleContainer.style.display === 'block') {
                const accordionHeight = Array.from(document.querySelectorAll('.accordion-container'))
                    .reduce((acc, container) => acc + (container.style.display === 'block' ? container.scrollHeight : 0), 0);
                console.log(accordionHeight); 
                BotonResp.style.marginTop = accordionHeight - 30 + "px";
                console.log(BotonResp.style.marginTop);
                
                toggleContainer.style.display = 'none';
                toggleContainer.style.maxHeight = null;
                toggleContainer.style.marginBottom = null;

                // Reset the margin of the next toggle trigger if it exists
                const nextToggle = toggleContainer.parentElement.nextElementSibling;
                if (nextToggle) {
                    nextToggle.style.marginTop = null;
                }
                if (otraSeccion) {
                    otraSeccion.style.marginTop = null;
                }
                if (titulo) {
                    titulo.style.marginTop = null;
                }
                if (Boton) {
                    Boton.style.marginTop = null;
                }

                // Remove the active class from the current trigger
                this.classList.remove('active');
                
            } else {
                // Cerrar cualquier otro contenedor abierto y eliminar su clase active
                document.querySelectorAll('.toggle-container').forEach(container => {
                    container.style.display = 'none';
                    container.style.maxHeight = null;
                    container.style.marginBottom = null;

                    // Reset the margin of the next toggle trigger
                    const nextSibling = container.parentElement.nextElementSibling;
                    if (nextSibling) {
                        nextSibling.style.marginTop = null;
                    }

                    // Remove the active class from any other triggers
                    const previousTrigger = container.previousElementSibling;
                    if (previousTrigger) {
                        previousTrigger.classList.remove('active');
                    }
                });

                toggleContainer.style.display = 'block';
                
                // Adjust the margin of the next toggle trigger if it exists
                const nextToggle = toggleContainer.parentElement.nextElementSibling;
                if (nextToggle) {
                    nextToggle.style.marginTop = toggleContainer.scrollHeight + "px"; // Ensure enough space
                }
                if (otraSeccion && otraSeccion.offsetWidth === otraSeccion.parentElement.offsetWidth) {
                    otraSeccion.style.marginTop = toggleContainer.scrollHeight + "px";
                    titulo.style.marginTop = "27%";
                }
                if (Boton) {
                    Boton.style.marginTop = toggleContainer.scrollHeight + "px";
                }
                
                // Calculate and set the margin-top for BotonResp
                const toggleHeight = Array.from(document.querySelectorAll('.toggle-container'))
                    .reduce((acc, container) => acc + (container.style.display === 'block' ? container.scrollHeight : 0), 0);
                const accordionHeight = Array.from(document.querySelectorAll('.accordion-container'))
                    .reduce((acc, container) => acc + (container.style.display === 'block' ? container.scrollHeight : 0), 0);
                const newMarginTop = (toggleHeight + accordionHeight - 70) + "px";

               if (BotonResp) {
                   BotonResp.style.marginTop = newMarginTop;
                }
                
                // Add the active class to the current trigger
                this.classList.add('active');
            }
        });
    });

    // jQuery for accordion functionality
    $('.accordion-container').hide(); // Ocultar todos los contenedores de los acordeones
    $('.accordion-trigger:first').addClass('active').next().show(); // Mostrar el primer contenedor

    const botonResponsive = document.getElementById("btnCVResponsive");

    $('.accordion-trigger').click(function () {
        const container = $(this).next();

        if (container.is(':hidden')) { // Si el contenedor siguiente está oculto
            $('.accordion-trigger').removeClass('active').next().slideUp(); // Ocultar todos los contenedores
            $(this).toggleClass('active').next().slideDown({
                complete: function() {
                    $(this).css('display', 'block'); // Ensure display is block at the start of slide down

                    container.addClass('active'); // Añadir clase active al contenedor desplegado

                    // Calculate and set the margin-top for botonResponsive
                    const toggleHeight = Array.from(document.querySelectorAll('.toggle-container'))
                        .reduce((acc, container) => acc + (container.style.display === 'block' ? container.scrollHeight : 0), 0);

                    botonResponsive.style.marginTop = (toggleHeight + container.height() - 80) + "px";
                }
            }); // Mostrar el contenedor actual y ajustar el margen después de la animación
        }

        return false; // Prevenir comportamiento predeterminado del clic
    });
});




