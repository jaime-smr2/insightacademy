document.addEventListener('DOMContentLoaded', function () {
    const radiosFiltro = document.getElementsByName('filtro');
    const contenedorArticulos = document.getElementById('articulos');
    
    const articulos = [
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Salud pública', imagen: '', orden: 1, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacología', imagen: '', orden: 2, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacoterapia', imagen: '', orden: 3, enlace: '#' },
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Enfermedades Infecciosas', imagen: '', orden: 4, enlace: '#' },
        { nombre: 'Medicina', categoria: 'Medicina', texto: 'Sistemas de Información en Salud', imagen: '', orden: 5, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Farmacovigilancia', imagen: '', orden: 6, enlace: '#' },
        { nombre: 'Farmacia', categoria: 'Farmacia', texto: 'Neurofarmacología', imagen: '', orden: 7, enlace: '#' },

        
        
    ];

    function mostrarArticulos(filtro) {
        contenedorArticulos.innerHTML = '';

        const articulosFiltrados = (filtro === 'todos') ? articulos : articulos.filter(articulo => articulo.categoria === filtro);

        articulosFiltrados.forEach(articulo => {
            const enlaceArticulo = document.createElement('a');
            enlaceArticulo.classList.add('articulo');
            enlaceArticulo.href = articulo.enlace; // Asignar el enlace desde el objeto articulo

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

    // Evento al cambiar el filtro
    radiosFiltro.forEach(radio => {
        radio.addEventListener('change', function () {
            const filtroSeleccionado = document.querySelector('input[name="filtro"]:checked').value;
            mostrarArticulos(filtroSeleccionado);
        });
    });

    // Mostrar todos los artículos al cargar la página
    mostrarArticulos('todos');
});
