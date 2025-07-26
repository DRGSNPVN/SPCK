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

    async function getProductById() {
        const params = new URLSearchParams(window.location.search)
        const productId = params.get("id")
        const productSnap = await getDoc(doc(db, "product3", productId))

        if (productSnap.exists()) {
            return { id: productSnap.id, ...productSnap.data() }
        } else {
            console.error("Không tìm thây sản phẩm!")
            return null
        }
    }

    async function displayProductDetail() {
        const product3= await getProductById()
        if (product3) {
            document.getElementById("product-detail").innerHTML = `
                <div class="container">
                    <img class="img" src="${product3.img}" alt="${product3.name}" width="200">
                    <div class="productInfo">
                        <h2 class="name">${product3.name}</h2>
                        <h4 class="price">Giá: ${product3.price} VND</h4>
                        <p class="description">${product3.description}</p>
                    </div>
                </div>`
        }
    }
    displayProductDetail()

    let user = localStorage.getItem("user")
if(user) {
    let login = document.getElementById("login")
    login.innerHTML = user
    login.addEventListener("click", () => {
        localStorage.removeItem("user")
        window.location.href = "../authentication/sign_up.html"
    })
}