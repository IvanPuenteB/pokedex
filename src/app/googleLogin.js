import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const googleButton = document.querySelector('#google-login');

googleButton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()


    try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)

    } catch (error) {
        showMessage("El usuario ya esta en uso", "error")
        console.log(error)
    }

})