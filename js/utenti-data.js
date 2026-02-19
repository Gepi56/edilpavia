// Gestione utenti e sessione
const UTENTI_KEY = 'edilpavia_utenti';
const SESSION_KEY = 'edilpavia_session';

const defaultUtenti = [
  { id: 'u1', email: 'mario.rossi@example.com', nome: 'Mario Rossi', dataReg: '2025-01-15', attivo: true, password: 'password' },
  { id: 'u2', email: 'luca.bianchi@example.com', nome: 'Luca Bianchi', dataReg: '2025-02-20', attivo: true, password: 'password' },
  { id: 'u3', email: 'giulia.verdi@example.com', nome: 'Giulia Verdi', dataReg: '2025-03-10', attivo: false, password: 'password' }
];

function getUtenti() {
  let data = localStorage.getItem(UTENTI_KEY);
  if (!data) {
    saveUtenti(defaultUtenti);
    return defaultUtenti;
  }
  return JSON.parse(data);
}

function saveUtenti(utenti) {
  localStorage.setItem(UTENTI_KEY, JSON.stringify(utenti));
}

function registraUtente(email, nome, password) {
  const utenti = getUtenti();
  if (utenti.find(u => u.email === email)) return false;
  const nuovo = {
    id: Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    email,
    nome,
    password, // in produzione andrebbe hashata
    dataReg: new Date().toISOString().split('T')[0],
    attivo: true
  };
  utenti.push(nuovo);
  saveUtenti(utenti);
  return true;
}

function loginUtente(email, password) {
  const utenti = getUtenti();
  const utente = utenti.find(u => u.email === email && u.password === password && u.attivo);
  if (utente) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: utente.id, email: utente.email, nome: utente.nome }));
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

function getUtenteCorrente() {
  const data = sessionStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}