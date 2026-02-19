// Gestione richieste di preventivo
const RICHIESTE_KEY = 'edilpavia_richieste';

function getRichieste() {
  const data = localStorage.getItem(RICHIESTE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveRichieste(richieste) {
  localStorage.setItem(RICHIESTE_KEY, JSON.stringify(richieste));
}

function aggiungiRichiesta(nuovaRichiesta) {
  const richieste = getRichieste();
  nuovaRichiesta.id = Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  nuovaRichiesta.data = new Date().toISOString();
  nuovaRichiesta.stato = 'Nuova';
  nuovaRichiesta.note = '';
  richieste.push(nuovaRichiesta);
  saveRichieste(richieste);
  return nuovaRichiesta.id;
}