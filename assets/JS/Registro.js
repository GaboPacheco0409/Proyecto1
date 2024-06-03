document.getElementById("formulario1").addEventListener("submit", function(event) {
    event.preventDefault();
    let correo = document.querySelector(".input-field[type='email']").value;
    let contraseña = document.querySelector(".input-field[type='password']").value;

    localStorage.setItem("correo", correo);
    localStorage.setItem("pwd1", contraseña);

    document.getElementById('res1').innerHTML = "Cuenta creada con éxito para " + correo;
    console.log("Cuenta creada con éxito para " + correo)
});