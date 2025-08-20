function sayhi(){
    alert("Hi");
}
/*const button = document.getElementById("fix-btn");
 button.addEventListener("click", function() {
      const outputDiv = document.getElementById("output");
      outputDiv.innerText = "Hi, I am RoboFix! Let’s fix your code.";
    });
/* languge selection**/
const langselect = document.getElementById("languages");
// Step 1: Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languages");
  const codeinput = document.getElementById("tpye-code");
  const outputDiv = document.getElementById("output");
const button = document.getElementById("fix-btn");


  button.addEventListener("click",function(){
    const selectedLanguage = langselect.value;

    const usercode = codeinput.value.trim();
const outputDiv = document.getElementById("output");

//if no code write
if(usercode === ""){
    outputDiv.textContent = "please enter some code ";
    return;
}
 if (code.trim() === "") {
          output.innerText = "⚠ Please enter some code.";
          return;
        }

window.onload = function() {
  const btn = document.getElementById("fix-btn");
  btn.addEventListener("click", function() {
    alert("Button clicked!");
  });
};

console.log(selectedLanguage, usercode);





if (selectedLanguage === "java script") {
      outputDiv.innerText = "JavaScript Output:\nYou wrote JS code!";
    } else if (selectedLanguage ==="python"){
      outputDiv.textContent = "python output:\n you wrote python code !";
    } else if (selectedLanguage === "java"){
      outputDiv.textContent = "java output:\n you wrote java code!";
    }else if (selectedLanguage === "c++"){
      outputDiv.textContent = "c++ output:\n you wrote c++ code!";
    } else{
      outputDiv.textContent = "unknown language selected"
    }
  })

  // Step 2: Create a new div for language info
  const infoDiv = document.createElement("div");
  infoDiv.id = "language-info";
  infoDiv.style.marginTop = "20px";
  infoDiv.style.color = "white";
  infoDiv.style.border = "2px solid black";
  
  languageSelect.parentElement.appendChild(infoDiv);

  // Step 3: Language details
  const languageDetails = {
    "java script": "JavaScript is used for web interactivity, client-side scripting, and backend (Node.js).",
    "python": "Python is known for simplicity, used in AI, ML, data science, web dev (Django, Flask).",
    "java": "Java is object-oriented, used in Android apps, enterprise software, and backend systems.",
    "c++": "C++ is a powerful language, great for performance-critical systems and game engines."
  };

  // Step 4: On change, update the info box
  languageSelect.addEventListener("change", function () {
    const selected = languageSelect.value;
    infoDiv.textContent = languageDetails[selected] || "No information available.";
  });
});
 
