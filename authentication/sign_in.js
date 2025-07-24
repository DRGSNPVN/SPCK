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
          localStorage.setItem("user", user.displayName)
          window.location.href = "http://127.0.0.1:5500/homepage/homepage.html"
        })
    })

document.querySelector(".sign-in_btn").addEventListener("click", () => {
  const email = document.querySelector("input[type='email']").value.trim()
  const password = document.querySelector("input[type='password").value.trim()
  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu")
    return
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user)
      alert(`Chào mừng, ${user.user.email}`)
      localStorage.setItem("user", user.user.email)
      window.location.href = "../homepage/homepage.html"
    })
    .catch((error) => {
      alert("Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu.")
      console.error(error.message)
    })
})