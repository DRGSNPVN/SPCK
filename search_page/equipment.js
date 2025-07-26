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

async function getProduct() {
const result = await getDocs(collection(db, "product2"))
const products = []
console.log(result)
result.forEach((doc)=>{
    products.push({ id: doc.id, ...doc.data()})
})
return products

}
async function displayProduct() {
const productList = document.getElementById("productDiv")

const products = await getProduct()
products.forEach((product) =>{
    const productDiv = document.createElement("div")
    productDiv.classList.add("item")
    productDiv.innerHTML = `
    <div class="product-item">
        <img class="img" src="${product.img}">
        <h2 class="name" >${product.name}</h2>
        <p class="price" ><strong>Giá:</strong> ${product.price} VND</p>
    </div>`

    productDiv.addEventListener("click", function() {
        window.location.href = `../detail/detail2.html?id=${product.id}`
    })

    // const deleteButton = productDiv.querySelector(".delete")
    // deleteButton.addEventListener("click", function() {
    //     const productId = deleteButton.getAttribute("data-id")
    //     deleteProduct(productId)
    // })
    productList.appendChild(productDiv)
})
}

async function deleteProduct(productId) {
    await deleteDoc(doc(db, "product", productId))
    alert("Product deleted successfully")
    window.location.reload()
}
displayProduct()

let user = localStorage.getItem("user")
if(user) {
    let login = document.getElementById("login")
    login.innerHTML = user
    login.addEventListener("click", () => {
        localStorage.removeItem("user")
        window.location.href = "../authentication/sign_up.html"
    })
}