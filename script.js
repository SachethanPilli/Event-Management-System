document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();

            // Hardcoded users (Until database is connected)
            const users = [
                { username: "organizer", password: "organizer123", role: "Organizer" },
                { username: "student1", password: "student123", role: "Student" }
            ];

            let user = users.find(user => user.username === username && user.password === password);

            if (user) {
                sessionStorage.setItem("username", user.username);
                sessionStorage.setItem("role", user.role);
                window.location.href = "dashboard.html"; 
            } else {
                document.getElementById("errorMessage").innerText = "Invalid username or password!";
            }
        });
    }

    let username = sessionStorage.getItem("username") || "Guest";
    let role = sessionStorage.getItem("role") || "Student";

    let usernameDisplay = document.getElementById("usernameDisplay");
    let roleDisplay = document.getElementById("roleDisplay");
    let organizerControls = document.getElementById("organizerControls");

    if (usernameDisplay) usernameDisplay.innerText = username;
    if (roleDisplay) roleDisplay.innerText = role;
    if (organizerControls && role === "Organizer") organizerControls.style.display = "block";

    loadEvents();
});

function loadEvents() {
    let eventList = document.getElementById("eventList");
    if (!eventList) return;

    eventList.innerHTML = "";
    let events = JSON.parse(sessionStorage.getItem("events")) || [];

    events.forEach((event, index) => {
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `
            <h4>${event.name}</h4>
            <p>Date: ${event.date}</p>
            <p>Venue: ${event.venue}</p>
            <p>Estimated Cost: $${event.cost}</p>
            <button onclick="registerEvent('${event.name}')">Register</button>
            ${sessionStorage.getItem("role") === "Organizer" ? `
                <button onclick="editEvent(${index})">Edit</button>
                <button onclick="deleteEvent(${index})">Delete</button>
            ` : ""}
        `;
        eventList.appendChild(eventDiv);
    });
}

function registerEvent(eventName) {
    alert(`Successfully registered for ${eventName}!`);
}

// Organizer-only functions
function openEventForm() {
    document.getElementById("eventForm").style.display = "block";
}

function closeEventForm() {
    document.getElementById("eventForm").style.display = "none";
}

function addEvent() {
    let eventName = document.getElementById("eventName").value;
    let eventDate = document.getElementById("eventDate").value;
    let venue = document.getElementById("eventVenue").value;
    let cost = document.getElementById("eventCost").value;

    if (eventName && eventDate && venue && cost) {
        let events = JSON.parse(sessionStorage.getItem("events")) || [];
        events.push({ name: eventName, date: eventDate, venue: venue, cost: cost });
        sessionStorage.setItem("events", JSON.stringify(events));
        loadEvents();
        closeEventForm();
        alert("Event added successfully!");
    } else {
        alert("Please enter all event details.");
    }
}

function editEvent(index) {
    let events = JSON.parse(sessionStorage.getItem("events")) || [];
    let event = events[index];

    let newName = prompt("Edit Event Name:", event.name);
    let newDate = prompt("Edit Event Date:", event.date);
    let newVenue = prompt("Edit Event Venue:", event.venue);
    let newCost = prompt("Edit Estimated Cost ($):", event.cost);

    if (newName && newDate && newVenue && newCost) {
        events[index] = { name: newName, date: newDate, venue: newVenue, cost: newCost };
        sessionStorage.setItem("events", JSON.stringify(events));
        loadEvents();
        alert("Event updated successfully!");
    }
}

function deleteEvent(index) {
    let confirmation = confirm("Are you sure you want to delete this event?");
    if (confirmation) {
        let events = JSON.parse(sessionStorage.getItem("events")) || [];
        events.splice(index, 1);
        sessionStorage.setItem("events", JSON.stringify(events));
        loadEvents();
        alert("Event deleted successfully!");
    }
}

let logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        sessionStorage.clear();
        window.location.href = "login.html"; 
    });
}