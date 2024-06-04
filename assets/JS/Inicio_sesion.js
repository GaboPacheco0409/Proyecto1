function validar(){
    let correo = (document.getElementById("correo").value);
    let contraseña = (document.getElementById("pwd1").value);
    console.log(correo +" "+contraseña);
    const correoCorrecto = "admin@gmail.com";
    const contraseñaCorrecta = "12345";

    if (correo == correoCorrecto && contraseña == contraseñaCorrecta) {
        document.getElementById('res1').innerHTML = "Inicio de sesión correcto";
        window.location.href = 'inicio.html';
        console.log("entro");
    } else {
        document.getElementById('res1').innerHTML = "Correo electrónico o contraseña incorrecta";
    }

}

