// Table-of-contents includes all filenames from entries folder. Keep track of which entry from the toc we are currently on. Start with first entry
const toc = [
  { file: 'intro.html',  title: 'Introduction' },
  { file: 'entry1.html', title: 'A Computational Logic Analogy for Regulatory Compliance' },
  { file: 'entry2.html', title: 'Assumption-Driven Design: Human-Model and Model-Model Interaction' },
  { file: 'entry3.html', title: "How to Effectively Partner with your General Counsel" },
  { file: 'entry4.html', title: "The Medical Model of Vulnerability Assessment" },
  { file: 'entry5.html', title: "Why your Bottleneck is Defining of your Entire Environment" },
  { file: 'entry6.html', title: "The Contextual Drift of Business Logic" }



];

let currentIndex = 0;

// sidebar is built out using the table of contents
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) {
    console.error("Sidebar element not found");
    return;
  }

  const ul = document.createElement('ul');

  toc.forEach(entry => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = entry.title;         
    a.href = `?entry=${entry.file}`;     
    a.dataset.entry = entry.file;        

    li.appendChild(a);
    ul.appendChild(li);
  });

  sidebar.appendChild(ul);
}

// intercept clicks
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-entry]');
  if (!link) return;

  e.preventDefault();
  const filename = link.dataset.entry;
  loadEntry(filename, true);
});

// first load
window.addEventListener('DOMContentLoaded', () => {
  buildSidebar(); 
  const filename = getEntryFromURL();
  loadEntry(filename, false);
});


// fetches files 
async function loadEntry(filename, pushHistory = false) {
  if (!filename) return;

  const res = await fetch(`entries/${filename}`);
  if (!res.ok) {
    document.getElementById('content-area').innerText = "Failed to load entry.";
    return;
  }

  const html = await res.text();
  document.getElementById('content-area').innerHTML = html;

  // Find the matching entry in toc
  const entry = toc.find(e => e.file === filename);
  //document.title = `${entry ? entry.title : filename} – Madeline Wise`;
  document.title = `Madeline Wise's Notebook`;

  currentIndex = toc.findIndex(e => e.file === filename);

  updateURL(filename, pushHistory);
}


// when user presses back/forward
window.addEventListener('popstate', () => {
  const filename = getEntryFromURL();
  loadEntry(filename, false); // just render, don’t push a new state
});

// helper to capitalize words
function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// update URL with either pushState or replaceState
function updateURL(filename, pushHistory = true) {
  const url = new URL(window.location);
  url.searchParams.set('entry', filename);

  if (pushHistory) {
    window.history.pushState({}, '', url);
  } else {
    window.history.replaceState({}, '', url);
  }
}

// Read the current page's query parameters and if entry exists return its value
function getEntryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('entry') || 'intro.html';
}
