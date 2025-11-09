// Emmanuel Giron -- 10/26/2025 
// Scipts here allow for dynamic creation of range log records and counting them


// Function to create a new log record in the range log table
function createLogRecord(date, location, firearms, ammo, weather, notes, rating, image) {
   console.log("Creating log record...");
   // Get the table section to insert the new row
   section = document.getElementsByClassName("logRow")[0];
   // Create a new table row
   let newRow = document.createElement("tr");
   // Create and append table data cells to the new row
   let dateCell = document.createElement("td");
   dateCell.textContent = date.value;
   newRow.appendChild(dateCell);
   let locationCell = document.createElement("td");
   locationCell.textContent = location.value;
   newRow.appendChild(locationCell);
   let firearmsCell = document.createElement("td");
   firearmsCell.textContent = firearms.value;
   newRow.appendChild(firearmsCell);
   let ammoCell = document.createElement("td");
   ammoCell.textContent = ammo.value;
   newRow.appendChild(ammoCell);
   let weatherCell = document.createElement("td");
   weatherCell.textContent = weather.value;
   newRow.appendChild(weatherCell);
   let notesCell = document.createElement("td");
   notesCell.textContent = notes.value;
   newRow.appendChild(notesCell);
   let ratingCell = document.createElement("td");
   ratingCell.textContent = rating.value;
   newRow.appendChild(ratingCell);
   let imageCell = document.createElement("td");
   imageCell.textContent = image.value;
   imageCell.id = "imageHide"
   newRow.appendChild(imageCell);

   section.parentNode.insertBefore(newRow, section.nextSibling);

   // Provide user feedback and update log count
   alert("Log entry added!");
   incrementLogCount();

   return;
}

// Function to count existing log records and update the display
function countLogs() {
   // Get the table and count the number of rows excluding header and newLogRecord row
   let table = document.getElementsByClassName("rangeTable")[0];
   let rowCount = table.rows.length - 2; // - 1 for header, -1 for newLogRecord (empty) row
   // Update the log count display
   count = document.getElementById("logCount");
   count.textContent = rowCount;
   return rowCount;

}
// Function to increment the log count display by 1
function incrementLogCount() {
   // Get the current count and increment it
   let count = document.getElementById("logCount");
   let currentCount = parseInt(count.textContent);
   currentCount += 1;
   // Update the display
   count.textContent = currentCount;
}

const table = document.querySelector(".rangeTable");

// Listen for row clicks
table.addEventListener('click', function (event) {
   const rowSelected = event.target.closest('tr');
   // making sure column names row isn't clicked.
   if (!rowSelected || rowSelected.classList.contains('logRow')) return;

   const items = rowSelected.querySelectorAll('td');
   const itemValues = Array.from(items).map(td => td.textContent.trim());
   const imgEl = rowSelected.querySelector('img');
   const imageSrc = imgEl ? imgEl.src : '';

   viewLogDetails(
      itemValues[0],
      itemValues[1],
      itemValues[2],
      itemValues[3],
      itemValues[4],
      itemValues[5],
      itemValues[6],
      imageSrc
   );
});


// used own previous experience / learning to do the following
function viewLogDetails(date, location, firearms, ammo, weather, notes, rating, image) {
   const existing = document.querySelector('.log-overlay');
   if (existing) existing.remove();

   const overlay = document.createElement('div');
   overlay.className = 'log-overlay';
   Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '9999'
   });

   const modal = document.createElement('div');
   Object.assign(modal.style, {
      background: '#fff',
      display: 'flex',
      flexDirection: 'row',
      width: '70%',
      maxWidth: '900px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      animation: 'fadeIn 0.25s ease'
   });

   const img = document.createElement('img');
   img.src = image;
   img.alt = `Target result for ${date}`;
   Object.assign(img.style, {
      width: '40%',
      objectFit: 'cover'
   });
   const details = document.createElement('div');
   Object.assign(details.style, {
      padding: '1.5rem',
      width: '60%',
      position: 'relative'
   });
   details.innerHTML = `
    <span style="position:absolute;top:10px;right:15px;font-size:1.5rem;cursor:pointer;">&times;</span>
    <h2>Session Overview</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Firearms Used:</strong> ${firearms}</p>
    <p><strong>Ammunition:</strong> ${ammo}</p>
    <p><strong>Weather:</strong> ${weather}</p>
    <p><strong>Notes:</strong> ${notes}</p>
    <p><strong>Rating:</strong> ${rating}/10</p>
  `;

   modal.appendChild(img);
   modal.appendChild(details);
   overlay.appendChild(modal);
   document.body.appendChild(overlay);

   const closeBtn = details.querySelector('span');
   closeBtn.addEventListener('click', () => overlay.remove());
   overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
   });
}
