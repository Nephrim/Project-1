/* adding the API to pull up recipes when serached for*/
const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID ='ee14a26f';
const APP_key = '4af60a2f68718399d317eed561ce2675';


searchForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI (){
  const baseURL= `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=4`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);

}
function generateHTML(results){
  let generatedHTML = '';
  results.map(result => {
    generatedHTML +=
      `
            <div class="item">
          <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
              <h1 class="title">${result.recipe.label}</h1>
              <a class="view-button" href="${result.recipe.url}">View recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet label: ${result.recipe.dietLabels}</p>
            <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
    `
  })
  searchResultDiv.innerHTML = generatedHTML;
}

const myInitCallback = function() {
  if (document.readyState == 'complete') {
    google.search.cse.element.render(
        {
          div: "test",
          tag: 'search'
         });
  } else {
    google.setOnLoadCallback(function() {
        google.search.cse.element.render(
            {
              div: "test",
              tag: 'search'
            });
    }, true);
  }
};
window.__gcse = {
  parsetags: 'explicit',
  initializationCallback: myInitCallback
};

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
msgDiv.textContent = message;
msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

if (!email || !password) {
  return;
}

userEmailSpan.textContent = email;
userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
event.preventDefault();

var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

if (email === "") {
  displayMessage("error", "Email cannot be blank");
} else if (password === "") {
  displayMessage("error", "Password cannot be blank");
} else {
  displayMessage("success", "Registered successfully");

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  renderLastRegistered();
}

});

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
msgDiv.textContent = message;
msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

if (!email || !password) {
  return;
}

userEmailSpan.textContent = email;
userPasswordSpan.textContent = password;
}


var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

if (email === "") {
  displayMessage("error", "Email cannot be blank");
} else if (password === "") {
  displayMessage("error", "Password cannot be blank");
} else {
  displayMessage("success", "Registered successfully");

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  renderLastRegistered();
}
;