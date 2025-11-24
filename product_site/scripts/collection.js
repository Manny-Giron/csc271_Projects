// Firearm class
class Firearm {
    constructor(name, manufacturer, caliber, capacity, type) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.caliber = caliber;
        this.capacity = capacity;
        this.type = type;
    }
}

// Main Data Store
const firearmCollection = [];

// Pre-loaded Firearms
const premade = [
    new Firearm("Glock 19", "Glock", "9mm", 15, "Handgun"),
    new Firearm("AR-15", "Anderson / S&W", ".223 / 5.56", 30, "Rifle"),
    new Firearm("Remington 870", "Remington", "12GA", 5, "Shotgun"),
    new Firearm("Sig Sauer P320", "Sig Sauer", "9mm", 17, "Handgun")
];

firearmCollection.push(...premade);

const tableBody = document.getElementById("firearmTableBody");
const form = document.getElementById("firearmForm");

function displayFirearms() {
    tableBody.innerHTML = "";

    firearmCollection.forEach(firearm => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${firearm.name}</td>
            <td>${firearm.manufacturer}</td>
            <td>${firearm.caliber}</td>
            <td>${firearm.capacity}</td>
            <td>${firearm.type}</td>
        `;

        tableBody.appendChild(row);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const manufacturer = document.getElementById("manufacturer").value;
    const caliber = document.getElementById("caliber").value;
    const capacity = document.getElementById("capacity").value;
    const type = document.getElementById("type").value;

    firearmCollection.push(new Firearm(name, manufacturer, caliber, capacity, type));

    form.reset();
    displayFirearms();
});

