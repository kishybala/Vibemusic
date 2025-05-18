// 1️⃣ Console Greeting
console.log("Welcome to Starbucks Dashboard!");

// 2️⃣ Sidebar Navigation: Active Class Toggle
const navItems = document.querySelectorAll("aside ul li");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// 3️⃣ Greeting Button Function
function greetUser() {
  alert("Hello, Jayshree! Welcome to your Starbucks-style Dashboard ☕");
}

// 4️⃣ Toggle Cards Visibility
function toggleCards() {
  const cards = document.querySelector(".cards");
  if (cards) {
    cards.style.display = cards.style.display === "none" ? "flex" : "none";
  }
}

// 5️⃣ Toast Message for Add-to-Cart
const buttons = document.querySelectorAll(".add-button");
const toast = document.getElementById("toast");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "Add Item") {
      button.textContent = "Added ✅";
      button.style.backgroundColor = "#888";
      showToast("Your item added.");
    } else {
      button.textContent = "Add Item";
      button.style.backgroundColor = "#00754a";
      showToast("Your item removed.");
    }
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// 6️⃣ Menu Card Button Alert (if any)
document.querySelectorAll('.menu-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Item added to cart! ☕");
  });
});

// 7️⃣ Login & Signup Toggle and Form Handling
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

if (showSignup && showLogin && loginForm && signupForm) {
  showSignup.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
  });

  showLogin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.emailLogin.value.trim();
    const password = loginForm.passwordLogin.value.trim();
    if (email && password) {
      alert(`Welcome back, ${email}!`);
      loginForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm.nameSignup.value.trim();
    const email = signupForm.emailSignup.value.trim();
    const password = signupForm.passwordSignup.value.trim();
    if (name && email && password) {
      alert(`Account created for ${name}! Please login now.`);
      signupForm.reset();
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    } else {
      alert("Please fill in all fields.");
    }
  });
}
