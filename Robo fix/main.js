// js/nav.js
// Button response: Try Demo

  document.getElementById("btn-get-started").onclick = () => {
  alert("Robofix is loading your demo. Get ready to fix and learn!");
};

// Sign-in button interaction
document.querySelector("btn-signing").onclick = () => {
  alert("Redirecting to sign-in. Let’s get you connected!");
};

// Bonus: Make the robot greet dynamically
document.querySelector(".robot").addEventListener("mouseover", () => {
  const greeting = document.createElement("div");
  greeting.textContent = "Hey there, coder!";
  greeting.style.position = "absolute";
  greeting.style.top = "10px";
  greeting.style.left = "10px";
  greeting.style.background = "purple";
  greeting.style.color = "white";
  greeting.style.padding = "5px";
  document.body.appendChild(greeting);
  setTimeout(() => greeting.remove(), 2000);
});
