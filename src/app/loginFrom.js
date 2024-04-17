import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from "../app/firebase.js"
import {showMessage} from "../app/showMessage.js"
// import './googleLogin.js'

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email  = loginForm['login-email'].value
    const password  = loginForm['login-password'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(credentials)
        showMessage("Bienvenido denuevo crack", "success");

    } catch (error) {
        if(error.code === "auth/wrong-password"){
            showMessage("Wrong password", "error")
        }else if(error.code === "auth/invalid-credential"){
            showMessage('user not found', 'error')
        }
        console.log(error)        
    }
})
