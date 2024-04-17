export function showMessage(message, type, destination = "../main.html"){
    if (type === "error") {
        Toastify({
            text: message,
            duration: 3000,
            destination: false,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }

    Toastify({
      text: message,
      duration: 3000,
      destination: destination,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
      },
      onClick: function(){} // Callback after click
    }).showToast();
}
