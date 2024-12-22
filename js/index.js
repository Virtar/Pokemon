// Seleccionar la sección donde se agregarán los personajes
const seccionPersonajes = document.querySelector('#personajes .row');

// Iterar sobre los datos del archivo `db.js`
personajes.forEach(personaje => {
    // Crear elementos para cada tarjeta
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const imgLink = document.createElement('a');
    //imgLink.href = 'pages/detail.html';
    
    const img = document.createElement('img');
    img.src = personaje.foto;
    img.alt = personaje.nombre;
    img.className = 'card-img-top';
    imgLink.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = personaje.nombre;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = personaje.caracteristicas;

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const small = document.createElement('small');
    small.className = 'text-muted';
    small.textContent = personaje.detalle;

    cardFooter.appendChild(small);

    // Combinar todos los elementos creados
    card.appendChild(imgLink);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    col.appendChild(card);
    seccionPersonajes.appendChild(col);
});
