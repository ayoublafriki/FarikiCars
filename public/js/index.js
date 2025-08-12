import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyqzVyxMVLrf9mQNNOedQ7fHOpa7IA-lU",
    authDomain: "redux-products-5643e.firebaseapp.com",
    databaseURL: "https://redux-products-5643e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redux-products-5643e",
    storageBucket: "redux-products-5643e.firebasestorage.app",
    messagingSenderId: "426452358596",
    appId: "1:426452358596:web:084cf4db8cefb4b6e40091",
    measurementId: "G-LBRKH7J8C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ------------------------------

const signInBtn = document.getElementById('sign-in-button');
const signUpBtn = document.getElementById('sign-up-button');
const authFormOverlay = document.getElementById('auth-form-overlay');
const authForm = document.getElementById('auth-form');
const userInfo = document.getElementById('user-info');

signUpBtn.addEventListener('click', () => {
    authFormOverlay.classList.toggle('hidden');
});

signInBtn.addEventListener('click', () => {
    authFormOverlay.classList.toggle('hidden');
});

authFormOverlay.addEventListener('click', (e) => {
    if (e.target === authFormOverlay) {
        authFormOverlay.classList.add('hidden');
    }
});
