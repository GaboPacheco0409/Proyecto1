function registro(){
A = document.getElementById("Usuario")





B = document.getElementById("correo")

    

C = document.getElementById("pwd")
return localStorage.setItem("a1", A),
localStorage.setItem("b1", B),
localStorage.setItem("c1", C)

}
function inicio(){
var datoGuardado1 = localStorage.getItem("a1")
var datoGuardado2 = localStorage.getItem("b1")
var datoGuardado3 = localStorage.getItem("c1")
if (datoGuardado1 === document.getElementById("Usuario1").value || datoGuardado2 === document.getElementById("Usuario1").value) {
    if (datoGuardado2 == datoGuardado2){
            console.log("INICIASTE SESION CON EXITO")
    }
    } else {
        console.log("INICIASTE SESION CON EXITO")
    }
}