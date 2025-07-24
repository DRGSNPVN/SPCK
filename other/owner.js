import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBJuwvkfmd5OQ87mkylVjRH8udYhlDrQEA",
    authDomain: "lmao-364ae.firebaseapp.com",
    projectId: "lmao-364ae",
    storageBucket: "lmao-364ae.firebasestorage.app",
    messagingSenderId: "1055264657386",
    appId: "1:1055264657386:web:2595cb2002e6b13d16ec93",
    measurementId: "G-9FGTBD9EW9"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function saveProduct() {
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const img = document.getElementById("img").value
    const description = document.getElementById("description").value

    const docRef = await addDoc(collection(db, "product"), {
        name: name,
        price: price,
        img: img,
        description: description
    })
    alert("Product added successfully with ID: "+docRef.id)
    window.location.reload()
}
document.getElementById("save-product").addEventListener('click', saveProduct)