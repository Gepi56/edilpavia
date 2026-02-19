// Gestione contenuti statici
const CONTENUTI_KEY = 'edilpavia_contenuti';

const defaultContenuti = {
  homeTitolo: 'EdilPavia - Costruzioni e Ristrutturazioni',
  homeSottotitolo: 'Da oltre 20 anni al servizio della provincia di Pavia',
  homeTesto: 'EdilPavia è un\'impresa edile specializzata in ristrutturazioni, nuove costruzioni e manutenzioni. Operiamo con professionalità e trasparenza.',
  contattiTelefono: '0382 123456',
  contattiEmail: 'info@edilpavia.it',
  contattiIndirizzo: 'Via Roma 1, 27100 Pavia',
  scontoRegistrati: 10
};

function getContenuti() {
  let data = localStorage.getItem(CONTENUTI_KEY);
  if (!data) {
    saveContenuti(defaultContenuti);
    return defaultContenuti;
  }
  return JSON.parse(data);
}

function saveContenuti(contenuti) {
  localStorage.setItem(CONTENUTI_KEY, JSON.stringify(contenuti));
}