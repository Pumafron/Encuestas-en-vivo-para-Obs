const clientButton = document.querySelector(".boton__mandar");
let id_arg = window.location.search.substring(1);
var formulario = document.querySelector(".formulario");
let socketClient = io.connect(window.location.hostname + ":8080", { 'forceNew': true });
console.log("okey");
//este codigo manda la calificacion al socket
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let calificationInput = document.querySelector(".calificacion");
    let calification_dat = calificationInput.value;
    socketClient.emit("setcalification", {
        id: id_arg,
        calification: parseInt(calification_dat)
    });
});
