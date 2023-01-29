


     //ANIMACION DE LAS TARJETAS
     //Smooth


     const tarjeta1 = document.querySelector('.ta-1');
     const tarjeta2 = document.querySelector('.ta-2');
     const tarjeta3 = document.querySelector('.ta-3');
     const tarjeta4 = document.querySelector('.ta-4');
     
     const cargarTarjetas = (entradas, observador) => {
         entradas.forEach((entrada) => {
             if(entrada.isIntersecting){
                 entrada.target.classList.add('visible');
             }
             else {
                 entrada.target.classList.remove('visible');
             }
         })
     };
     
     const opciones = {
         rootMargin: '-30px 0px 0px 0px',
         threshold: 0.4,
     }
     
     const observador = new IntersectionObserver(cargarTarjetas, opciones);
     
     observador.observe(tarjeta1);
     observador.observe(tarjeta2);
     observador.observe(tarjeta3);
     observador.observe(tarjeta4);