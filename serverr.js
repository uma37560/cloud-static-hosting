// Popup message
function showMessage() {
  alert("Hello! Thanks for visiting my cloud project 😊");
}

// Change Heading Text
function changeText() {
  document.getElementById("mainHeading").innerText =
    "🌩️ Cloud Project — Interactive Mode Activated!";
}

// Display current time
function showDateTime() {
  const now = new Date();
  document.getElementById("dateBox").innerText =
    "Current Time: " + now.toLocaleString();
}

// Change background color
function changeColor() {
  document.body.style.background = "#d0f0ff";
}
