// js/servizi-data.js
const STORAGE_KEY = 'edilpavia_services';

// Servizi di default con i nuovi campi (descrizioneEstesa, immagini, prezzo) e ID univoci
const defaultServices = [
  {
    id: '1',
    icon: 'fas fa-hard-hat',
    titolo: 'Lavori edili',
    descrizioneBreve: 'Ristrutturazioni, murature, demolizioni.',
    descrizioneEstesa: 'Eseguiamo lavori edili di ogni tipo: dalla semplice demolizione alla ristrutturazione completa di appartamenti, negozi e uffici. Utilizziamo materiali di prima qualità e tecniche all’avanguardia.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Lavori+Edili+1',
      'https://via.placeholder.com/600x400?text=Lavori+Edili+2'
    ],
    prezzo: 'da € 2.500'
  },
  {
    id: '2',
    icon: 'fas fa-th-large',
    titolo: 'Pavimentazioni interne',
    descrizioneBreve: 'Parquet, gres, ceramica, massetti.',
    descrizioneEstesa: 'Posa di pavimenti e rivestimenti interni: parquet, gres porcellanato, ceramica, marmo. Realizziamo massetti e sottofondi a regola d’arte.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Pavimenti+1',
      'https://via.placeholder.com/600x400?text=Pavimenti+2'
    ],
    prezzo: 'da € 50/mq'
  },
  {
    id: '3',
    icon: 'fas fa-faucet',
    titolo: 'Idraulica',
    descrizioneBreve: 'Riparazioni, installazione bagni, caldaie.',
    descrizioneEstesa: 'Interventi idraulici di ogni genere: riparazione perdite, installazione sanitari, manutenzione caldaie, rifacimento bagni completi.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Idraulica+1',
      'https://via.placeholder.com/600x400?text=Idraulica+2'
    ],
    prezzo: 'da € 80/ora'
  },
  {
    id: '4',
    icon: 'fas fa-bolt',
    titolo: 'Elettricista',
    descrizioneBreve: 'Impianti nuovi, messa a norma, certificazioni.',
    descrizioneEstesa: 'Progettazione e realizzazione di impianti elettrici civili e industriali. Messa a norma, certificazioni, riparazioni guasti.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Elettricista+1',
      'https://via.placeholder.com/600x400?text=Elettricista+2'
    ],
    prezzo: 'da € 70/ora'
  },
  {
    id: '5',
    icon: 'fas fa-paint-roller',
    titolo: 'Imbiancatura',
    descrizioneBreve: 'Tinteggiature, carte da parati, decorazioni.',
    descrizioneEstesa: 'Tinteggiatura di interni ed esterni, applicazione carte da parati, pitture decorative, stuccature e preparazione pareti.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Imbiancatura+1',
      'https://via.placeholder.com/600x400?text=Imbiancatura+2'
    ],
    prezzo: 'da € 15/mq'
  },
  {
    id: '6',
    icon: 'fas fa-wind',
    titolo: 'Condizionatori',
    descrizioneBreve: 'Installazione e manutenzione climatizzatori.',
    descrizioneEstesa: 'Vendita, installazione e manutenzione di condizionatori e pompe di calore. Assistenza tecnica e riparazioni.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Condizionatori+1',
      'https://via.placeholder.com/600x400?text=Condizionatori+2'
    ],
    prezzo: 'da € 600'
  },
  {
    id: '7',
    icon: 'fas fa-shield-alt',
    titolo: 'Antifurti',
    descrizioneBreve: 'Allarmi, videosorveglianza, domotica.',
    descrizioneEstesa: 'Impianti di allarme, videosorveglianza, controllo accessi, domotica per la sicurezza della casa e dell’ufficio.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Antifurti+1',
      'https://via.placeholder.com/600x400?text=Antifurti+2'
    ],
    prezzo: 'da € 800'
  },
  {
    id: '8',
    icon: 'fas fa-road',
    titolo: 'Pavimentazioni esterne',
    descrizioneBreve: 'Autobloccanti, resine, vialetti.',
    descrizioneEstesa: 'Realizzazione di pavimentazioni esterne in autobloccanti, resine, pietra, porfido. Vialetti, piazzali, aree verdi.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Esterni+1',
      'https://via.placeholder.com/600x400?text=Esterni+2'
    ],
    prezzo: 'da € 40/mq'
  },
  {
    id: '9',
    icon: 'fas fa-leaf',
    titolo: 'Giardinaggio',
    descrizioneBreve: 'Taglio erba, potature, progettazione.',
    descrizioneEstesa: 'Manutenzione del verde: taglio erba, potature, piantumazione, progettazione giardini e terrazzi.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Giardinaggio+1',
      'https://via.placeholder.com/600x400?text=Giardinaggio+2'
    ],
    prezzo: 'da € 30/ora'
  },
  {
    id: '10',
    icon: 'fas fa-toolbox',
    titolo: 'Altri lavori',
    descrizioneBreve: 'Serramenti, tetti, coibentazioni.',
    descrizioneEstesa: 'Sostituzione serramenti, riparazione tetti, coibentazioni termiche e acustiche, manutenzione generale.',
    immagini: [
      'https://via.placeholder.com/600x400?text=Altri+lavori+1',
      'https://via.placeholder.com/600x400?text=Altri+lavori+2'
    ],
    prezzo: 'da preventivo'
  }
];

/**
 * Restituisce l'array dei servizi da localStorage.
 * Se non ci sono dati, salva e restituisce i default.
 */
function getServizi() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Prima volta: salva i default
    saveServizi(defaultServices);
    return defaultServices;
  }
  return JSON.parse(data);
}

/**
 * Salva l'array dei servizi in localStorage.
 * @param {Array} servizi
 */
function saveServizi(servizi) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(servizi));
}

/**
 * Genera un ID univoco (timestamp + random)
 * @returns {string}
 */
function generaId() {
  return Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Aggiunge un nuovo servizio.
 * @param {Object} nuovoServizio (senza id)
 * @returns {string} id generato
 */
function aggiungiServizio(nuovoServizio) {
  const servizi = getServizi();
  nuovoServizio.id = generaId();
  servizi.push(nuovoServizio);
  saveServizi(servizi);
  return nuovoServizio.id;
}

/**
 * Aggiorna un servizio esistente (sostituisce l'oggetto con stesso id).
 * @param {Object} servizioAggiornato
 * @returns {boolean}
 */
function aggiornaServizio(servizioAggiornato) {
  const servizi = getServizi();
  const index = servizi.findIndex(s => s.id === servizioAggiornato.id);
  if (index !== -1) {
    servizi[index] = servizioAggiornato;
    saveServizi(servizi);
    return true;
  }
  return false;
}

/**
 * Elimina un servizio tramite id.
 * @param {string} id
 * @returns {boolean}
 */
function eliminaServizio(id) {
  const servizi = getServizi();
  const nuoviServizi = servizi.filter(s => s.id !== id);
  if (nuoviServizi.length !== servizi.length) {
    saveServizi(nuoviServizi);
    return true;
  }
  return false;
}
