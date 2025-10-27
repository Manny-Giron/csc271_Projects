// Emmanuel Giron -- 10/26/2025 
// Scipts here allow for dynamic creation of range log records and counting them


// Function to create a new log record in the range log table
function createLogRecord(date, location, firearms, ammo, weather, notes, rating) {
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