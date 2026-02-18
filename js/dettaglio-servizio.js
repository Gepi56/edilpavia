// js/dettaglio-servizio.js

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const container = document.getElementById('servizio-dettaglio');
  const campoServizio = document.getElementById('campoServizio');

  if (!id) {
    container.innerHTML = '<div class="alert alert-danger">Nessun servizio specificato.</div>';
    return;
  }

  const servizi = getServizi();
  const servizio = servizi.find(s => s.id === id);

  if (!servizio) {
    container.innerHTML = '<div class="alert alert-warning">Servizio non trovato.</div>';
    return;
  }

  // Imposta il campo nascosto del form con il titolo del servizio
  if (campoServizio) {
    campoServizio.value = servizio.titolo;
  }

  // Costruisci HTML per le immagini
  let immaginiHtml = '';
  if (servizio.immagini && servizio.immagini.length > 0) {
    immaginiHtml = '<div class="row g-3 my-4">';
    servizio.immagini.forEach(url => {
      immaginiHtml += `
        <div class="col-md-4">
          <img src="${url}" class="img-fluid rounded" alt="${servizio.titolo}" onerror="this.parentElement.style.display='none'">
        </div>
      `;
    });
    immaginiHtml += '</div>';
  }

  // Costruisci HTML completo
  container.innerHTML = `
    <h1 class="mb-3">${servizio.titolo}</h1>
    <p class="lead">${servizio.descrizioneBreve}</p>
    ${immaginiHtml}
    <div class="mt-4">
      <p>${servizio.descrizioneEstesa || 'Descrizione non disponibile.'}</p>
    </div>
    ${servizio.prezzo ? `<p class="fw-bold">Prezzo indicativo: ${servizio.prezzo}</p>` : ''}
  `;

  // Gestione invio form (opzionale, se vuoi usare Netlify Forms o altro)
  const form = document.getElementById('formPreventivoDettaglio');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Se usi Netlify, lascia fare l'azione predefinita
      // Altrimenti puoi fare una fetch o mostrare un messaggio
      // Per ora, solo un alert di esempio
      e.preventDefault();
      alert('Richiesta inviata (simulazione). Presto integreremo l\'invio reale.');
      // Qui potresti inviare i dati a un server o salvarli in localStorage per l'admin
    });
  }
});