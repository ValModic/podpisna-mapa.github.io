
const documents = [
  { id: 1, name: "Odpustno pismo", status: "Nepodpisan" },
  { id: 2, name: "Izvid laboratorija", status: "Podpisan" },
  { id: 3, name: "Napotek", status: "Zavrnjen" }
];

function showMain() {
  document.getElementById('main-view').style.display = 'block';
  document.getElementById('help-view').style.display = 'none';
}

function showHelp() {
  document.getElementById('main-view').style.display = 'none';
  document.getElementById('help-view').style.display = 'block';
}

function renderDocuments() {
  const container = document.getElementById('document-list');
  container.innerHTML = '';
  documents.forEach(doc => {
    const div = document.createElement('div');
    div.textContent = `${doc.name} - ${doc.status}`;
    div.onclick = () => showDetails(doc);
    container.appendChild(div);
  });
}

function showDetails(doc) {
  document.getElementById('document-details').style.display = 'block';
  document.getElementById('doc-name').textContent = `Ime: ${doc.name}`;
  document.getElementById('doc-status').textContent = `Status: ${doc.status}`;
}

function signDocument() {
  alert('Dokument je podpisan.');
}

function rejectDocument() {
  const reason = prompt('Vpišite razlog za zavrnitev:');
  if (reason) {
    alert('Dokument zavrnjen z razlogom: ' + reason);
  }
}

window.onload = renderDocuments;
