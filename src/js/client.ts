const clientButton = document.querySelector(".boton__mandar") as HTMLButtonElement;
let id_arg = window.location.search.substring(1);
var formulario = document.querySelector(".formulario")!;
let socketClient = io.connect(window.location.host,{'forceNew':true})
console.log("okey")

//este codigo manda la calificacion al socket
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let calificationInput = document.querySelector(".calificacion") as HTMLInputElement;
    let calification_dat = calificationInput.value;
    socketClient.emit("setcalification",{
        id:id_arg,
        calification:calification_dat
    })
})

