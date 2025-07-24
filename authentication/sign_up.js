import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBJuwvkfmd5OQ87mkylVjRH8udYhlDrQEA",
      authDomain: "lmao-364ae.firebaseapp.com",
      projectId: "lmao-364ae",
      storageBucket: "lmao-364ae.firebasestorage.app",
      messagingSenderId: "1055264657386",
      appId: "1:1055264657386:web:2595cb2002e6b13d16ec93",
      measurementId: "G-9FGTBD9EW9"
    };
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

let btn = document.querySelector("#lmao")
    btn.addEventListener("click", function () {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          alert("Login successfully!" + user.displayName)
          window.location.href = "http://127.0.0.1:5500/authentication/sign_in.html"
        })
    })

document.querySelector(".sign-up_btn").addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const confirmPassword = document.getElementById("confirm-password").value.trim()

  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu")
    return
  }
  if (password.length < 6) {
    alert("Vui lòng nhập mật khẩu có ít nhất 6 kí tự")
    return
  }
  if (confirmPassword !== password) {
    alert("Mật khẩu không trùng. Vui lòng nhập lại mật khẩu đúng")
    return
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user)
      alert(`Chào mừng, ${user.user.email}`)
      window.location.href = "./authentication/sign_in.html"
    })
    .catch((error) => {
      alert("Đăng ký không thành công. Vui lòng kiểm tra lại email và mật khẩu.")
      console.error(error.message)
    })
})