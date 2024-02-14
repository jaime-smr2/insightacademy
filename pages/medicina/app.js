document.addEventListener('DOMContentLoaded', function () {
    const radiosFiltro = document.getElementsByName('filtro');
    const contenedorArticulos = document.getElementById('articulos');
    
    const articulos = [
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Salud pública', imagen: './../src/img/medicina/salud_publica.jpg', orden: 1, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacología', imagen: './../src/img/medicina/farmacologia.jpg', orden: 2, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacoterapia', imagen: './../src/img/medicina/farmacoterapia.jpg', orden: 3, enlace: '#' },
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Enfermedades Infecciosas', imagen: './../src/img/medicina/enfermedades_infecciosas.jpg', orden: 4, enlace: '#' },
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Primeros auxilios', imagen: './../src/img/medicina/primeros_auxilios.jpg', orden: 5, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacovigilancia', imagen: './../src/img/medicina/farmacovigilancia.jpg', orden: 6, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Neurofarmacología', imagen: './../src/img/medicina/neurofarmacologia.jpg', orden: 7, enlace: '#' },

        
        
    ];

    function mostrarArticulos(filtro) {
        contenedorArticulos.innerHTML = '';

        const articulosFiltrados = (filtro === 'todos') ? articulos : articulos.filter(articulo => articulo.categoria === filtro);

        articulosFiltrados.forEach(articulo => {
            const enlaceArticulo = document.createElement('a');
            enlaceArticulo.classList.add('articulo');
            enlaceArticulo.href = articulo.enlace;

            const imagenArticulo = document.createElement('img');
            imagenArticulo.src = articulo.imagen;
            imagenArticulo.alt = articulo.nombre;
            enlaceArticulo.appendChild(imagenArticulo);

            const textoArticulo = document.createElement('p');
            textoArticulo.textContent = articulo.texto;
            enlaceArticulo.appendChild(textoArticulo);

            enlaceArticulo.style.order = articulo.orden;

            contenedorArticulos.appendChild(enlaceArticulo);
        });
    }

    
    radiosFiltro.forEach(radio => {
        radio.addEventListener('change', function () {
            const filtroSeleccionado = document.querySelector('input[name="filtro"]:checked').value;
            mostrarArticulos(filtroSeleccionado);
        });
    });

    mostrarArticulos('todos');
});
