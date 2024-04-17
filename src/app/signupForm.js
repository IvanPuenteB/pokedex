import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    const confirmPass = signupForm['confirm-password'].value

    console.log(email, password, confirmPass)

    if(!validateEmail(email)) return showMessage("Email Invalido", "error");

    if(password.length < 6) return showMessage("La contraseña debe ser mayor a 6 caracteres", "error");

    if(password !== confirmPass) return showMessage("Contraseñas no coinciden", "error")

      try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    
        showMessage("Bienvenido Crack " + userCredentials.user.email , "success")
        
      } catch (error){
    
        if(error.code === 'auth/email-already-in-use'){
            showMessage("El usuario ya esta en uso", "error")
        }
        else if(error.code === 'auth/invalid-email'){
            showMessage("Email invalido crack", "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage("Contraseña Incorrecta", "error")
    
        } else if (error.code){
            showMessage("Algo ocurrio :(", "error")
    
        }
      }
  
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}