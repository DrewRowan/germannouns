import data from '../json/pronouns.json' assert { type: 'json' };
        
const table = document.createElement("table");

// Create the table headers
const headers = document.createElement("tr");
for (const [caseName, values] of Object.entries(data)) {
  const header = document.createElement("th");
  header.textContent = caseName;
  headers.appendChild(header);
}
table.appendChild(headers);

// Create the table rows
const rows = document.createElement("tr");
for (const [key, values] of Object.entries(data)) {
  const row = document.createElement("tr");
  for (const [_, value] of Object.entries(values)) {
    const cell = document.createElement("td");
    cell.textContent = key;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// Add the table to the document
document.body.appendChild(table);