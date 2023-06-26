function ingreseDatos() {
  //Función general.
  function nombre() {
    //Función particular.
    let nombreUsuario = prompt("Señor usuario, ingrese Luis.");
    if (nombreUsuario == "Luis" || nombreUsuario == "luis") {
      alert("El nombre ingresado es correcto.");
    } else {
      while (nombreUsuario != "Luis" || nombreUsuario != "luis") {
        alert("El dato ingresado no es correcto");
        nombreUsuario = prompt("Señor usuario, ingrese Luis o luis.");
      }
    }
  }
  nombre();
  function apellido() {
    let apellidoUsuario = prompt("Señor usuario, ingrese su Kosten.");
    if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
      alert("El apellido ingresado es correcto.");
    } else {
      while (apellidoUsuario != "Kosten" || apellidoUsuario != "kosten") {
        alert("El dato ingresado no es correcto");
        apellidoUsuario = prompt("Señor usuario, ingrese Kosten o kosten.");
      }
    }
  }
  apellido();
  function email() {
    let emailUsuario = prompt(
      "Señor usuario, ingrese su luis.kosten@gmail.com"
    );
    if (emailUsuario == "luis.kosten@gmail.com") {
      alert("El E-mail ingresado es correcto.");
    }
    while (emailUsuario != "luis.kosten@gmail.com") {
      alert("El dato ingresado no es correcto");
      emailUsuario = prompt("Señor usuario, ingrese luis.kosten@gmail.com");
    }
  }
  email();
  function contraseña() {
    let contraseñaUsuario = prompt("Señor usuario, ingrese la cotraseña: 1234.1234");
    if (contraseñaUsuario == "1234.1234") {
      alert("La contraseña ingresada es correcta.");
      alert("Binenvenido.");
    } else {
      while (contraseñaUsuario != "1234.1234") {
        alert("El dato ingresado no es correcto");
        contraseñaUsuario = prompt("Señor usuario, ingrese la cotraseña: 1234.1234");
      }
    }
  }
  contraseña();
}

ingreseDatos();




















































































/*function ingreseDatos() {
  let nombreUsuario = prompt("Señor usuario, ingrese Luis.");
  if (nombreUsuario == "Luis" || nombreUsuario == "luis") {
    alert("El nombre ingresado es correcto.");
  } else {
    do {
      prompt(
        "Señor usuario por favor vuelva a ingresar los datos porque son incorrectos"
      );
    } while (nombreUsuario == false);
  }
  let apellidoUsuario = prompt("Señor usuario, ingrese su Kosten.");
  if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
    alert("El apellido ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
  let emailUsuario = prompt("Señor usuario, ingrese su luis.kosten@gmail.com.");
  if (emailUsuario == "luis.kosten@gmail.com") {
    alert("El E-mail ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
  let contraseñaUsuario = prompt("Señor usuario, ingrese su 1234.1234.");
  if (contraseñaUsuario == "1234.1234") {
    alert("El E-mail ingresado es correcto.");
  } else {
    //vuelva a ingresar los datos, esto es con un bucle si es posible.
  }
}*/

//ingreseDatos();

// function ingreseDatos() {
// //Función general.
//   function nombre() {
//     //Función particular.
//     let nombreUsuario = prompt("Señor usuario, ingrese Luis.");
//     if (nombreUsuario == "Luis" || nombreUsuario == "luis") {
//       alert("El nombre ingresado es correcto.");
//     } else {
//       do {
//         alert("El nombre ingresado es incorrecto.")
//         nombre();
//       } while (nombreUsuario == false);
//     }
//   }
//   nombre();
//   function apellido() {
//     let apellidoUsuario = prompt("Señor usuario, ingrese su Kosten.");
//     if (apellidoUsuario == "Kosten" || apellidoUsuario == "kosten") {
//       alert("El apellido ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   apellido();
//   function email() {
//     let emailUsuario = prompt(
//       "Señor usuario, ingrese su luis.kosten@gmail.com."
//     );
//     if (emailUsuario == "luis.kosten@gmail.com") {
//       alert("El E-mail ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   email();
//   function contraseña() {
//     let contraseñaUsuario = prompt("Señor usuario, ingrese su 1234.1234.");
//     if (contraseñaUsuario == "1234.1234") {
//       alert("El E-mail ingresado es correcto.");
//     } else {
//       //vuelva a ingresar los datos, esto es con un bucle si es posible.
//     }
//   }
//   contraseña();
// }

// ingreseDatos();