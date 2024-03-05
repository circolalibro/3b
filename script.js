// Extended array of books with additional entries
const libri = [
    { titolo: "Il giorno della civetta", codice: "AB101" },
    { titolo: "Piccole donne", codice: "CD102" },
    { titolo: "Nel mare ci sono i coccodrilli", codice: "EF103" },
    { titolo: "La guerra dei Laik", codice: "GH104" },
    { titolo: "Piccole donne", codice: "IJ105" },
    { titolo: "L’isola del tesoro", codice: "KL106" },
    { titolo: "Sto bene, è solo la fine del mondo", codice: "MN107" },
    { titolo: "Eleanor Oliphant sta benissimo", codice: "OP108" },
    { titolo: "Eppure cadiamo felici", codice: "QR109" },
    { titolo: "Madre b", codice: "ST110" },
    { titolo: "La leggenda del santo bevitore", codice: "UV111" },
    { titolo: "Etica per un figlio", codice: "WX112" },
    { titolo: "L’appello", codice: "YZ113" },
    { titolo: "Anna", codice: "AA201" },
    { titolo: "Le regole dello shangai", codice: "BB202" },
  ];
  
  // Populates the dropdown menu with books on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    popolaMenuLibri();
    visualizzaLibri(); // Ensures both dropdown and book display are populated at load
  });
  
  function popolaMenuLibri() {
    const selectLibro = document.getElementById('libro');
    libri.forEach(libro => {
      const option = document.createElement('option');
      option.value = libro.codice;
      option.textContent = libro.titolo;
      selectLibro.appendChild(option);
    });
  }
  
  function mostraDettagliLibro(codiceLibro) {
    const dettagliLibro = document.getElementById('dettagli-libro');
    const formPrestito = document.getElementById('form-prestito');
    const nomeLibroSelezionato = document.getElementById('nome-libro-selezionato');
    
    if (!codiceLibro) {
      dettagliLibro.innerHTML = '';
      formPrestito.style.display = 'none';
      return;
    }
    
    const libro = libri.find(libro => libro.codice === codiceLibro);
    
    if (libro) {
      dettagliLibro.innerHTML = `
        <h3>"${libro.titolo}"</h3>
        <p>Codice: ${libro.codice}</p>
        <p>Stato: <span class="stato-libro disponibile">Disponibile</span></p>
      `;
      nomeLibroSelezionato.value = libro.titolo;
      formPrestito.style.display = 'block';
    }
  }
  
  function inviaRichiestaPrestito(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const libroSelezionato = document.getElementById('nome-libro-selezionato').value;
    
    console.log(`Richiesta inviata per: ${libroSelezionato} da ${nome} (${email})`);
    alert('Richiesta inviata! Riceverai una conferma via email.');
  }
  
  function visualizzaLibri() {
    const containerLibri = document.getElementById('libri-lista');
    if (!containerLibri) return;
    
    containerLibri.innerHTML = '';
    
    libri.forEach(libro => {
      const elementoLibro = document.createElement('div');
      elementoLibro.innerHTML = `
        <h3>${libro.titolo}</h3>
        <p>Codice: ${libro.codice}</p>
        <button class="btn-prestito" onclick="mostraDettagliLibro('${libro.codice}')">Richiedi Prestito</button>
      `;
      containerLibri.appendChild(elementoLibro);
    });
  }
  