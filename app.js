const data = {
	"peliculas": [{
		"id": 1,
		"nombre": "Super Mario Bros: La película",
		"portada": "images/peli.jpg",
		"video": "https://www.youtube.com/embed/SvJwEiy2Wok",
		"banner": "https://i.ytimg.com/vi_webp/SvJwEiy2Wok/maxresdefault.webp",
		"minutos": "92 min",
		"synopsis": "Un fontanero llamado Mario viaja a través de un laberinto subterráneo con su hermano, Luigi, tratando de salvar a una princesa capturada.",
		"direccion": "Aaron Horvath, Michael Jelenic, Pierre Leduc",
		"guion": "Matthew Fogel",
		"reparto": "Chris Pratt, Anya Taylor-Joy, Charlie Day",
		"horario": [{
			"hora": "12:00",
			"butacas": 10
		}, {
			"hora": "16:00",
			"butacas": 10
		}, {
			"hora": "21:00",
			"butacas": 10
		}]
	}, {
		"id": 2,
		"nombre": "The Batman",
		"portada": "images/theBatman.jpg",
		"video": "https://www.youtube.com/embed/NLOp_6uPccQ",
		"banner": "https://i.ytimg.com/vi_webp/NLOp_6uPccQ/maxresdefault.webp",
		"minutos": "160 min",
		"synopsis": "Cuando Enigma, un sádico asesino en serie, comienza a asesinar a las principales figuras políticas de Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y a cuestionar la participación de su familia.",
		"direccion": "Matt Reeves",
		"guion": "Matt Reeves, Peter Craig, Bob Kane",
		"reparto": "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
		"horario": [{
			"hora": "17:30",
			"butacas": 10
		}, {
			"hora": "20:00",
			"butacas": 10
		}]
	}, {
		"id": 3,
		"nombre": "Aftersun",
		"portada": "images/aftersun.jpg",
		"video": "https://www.youtube.com/embed/oxrfvZFKoK4",
		"banner": "https://i.ytimg.com/vi_webp/oxrfvZFKoK4/maxresdefault.webp",
		"minutos": "120 min",
		"synopsis": "Sophie reflexiona sobre la alegría y melancolía de unas vacaciones que tomó con su padre veinte años antes. Los recuerdos reales o no, llenan los espacios mientras intenta reconciliar al padre que conoció con el hombre que no conocía.",
		"direccion": "Charlotte Wells",
		"guion": "Charlotte Wells",
		"reparto": "Paul Mescal, Frankie Corio, Celia Rowlson-Hall",
		"horario": [{
			"hora": "22:00",
			"butacas": 10
		}]
	}, {
		"id": 4,
		"nombre": "Parásitos",
		"portada": "images/parasite.jpg",
		"video": "https://www.youtube.com/embed/5xH0HfJHsaY",
		"banner": "https://i.ytimg.com/vi_webp/5xH0HfJHsaY/maxresdefault.webp",
		"minutos": "98 min",
		"synopsis": "La familia Ki-taek, todos desempleados, se ve envuelta en un incidente con la rica y glamurosa familia Parks.",
		"direccion": "Bong Joon Ho",
		"guion": "Bong Joon Ho, Han Jin-won",
		"reparto": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
		"horario": [{
			"hora": "16:00",
			"butacas": 10
		}]
	}, {
		"id": 5,
		"nombre": "Joker",
		"portada": "images/joker.jpg",
		"video": "https://www.youtube.com/embed/zAGVQLHvwOY",
		"banner": "https://i.ytimg.com/vi_webp/zAGVQLHvwOY/maxresdefault.webp",
		"minutos": "140 min",
		"synopsis": "En Gotham, Arthur Fleck, un comediante con problemas de salud mental, es marginado y maltratado por la sociedad. SeEn Gotham, Arthur Fleck, un comediante con problemas de salud mental, es marginado y maltratado por la sociedad. Se adentra en una espiral de crimen que resulta revolucionaria. Pronto conoce a su alter-ego, el Joker.",
		"direccion": "Todd Phillips",
		"guion": "Todd Phillips, Scott Silver, Bob Kane",
		"reparto": "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
		"horario": [{
			"hora": "12:00",
			"butacas": 10
		}, {
			"hora": "21:00",
			"butacas": 10
		}]
	}]
}





const btnMenu = document.querySelector('.menu');
const listaMenu = document.querySelector('.lista')

console.log(listaMenu);

btnMenu.addEventListener('click',()=>{
    listaMenu.classList.toggle('abrirMenu');
})



let varPeliculas = document.getElementById('contenedor_pelicula');


if (varPeliculas) {

	data.peliculas.forEach((pelicula) => {
		const peliculaHTML = `<div class="portada">
    <img src="${pelicula.portada}" alt="portada">
    <div class="name_movie">
        <h3>${pelicula.nombre}</h3>
        <button numId = ${pelicula.id} class="btn_outline btn_reservar">Reservar</button>
    </div>
  </div>`;

		varPeliculas.innerHTML += peliculaHTML;
	});

	console.log(data);
}




const btnEnviarDatosMensa = document.getElementById('btnEnviarMensaje')



if (btnEnviarDatosMensa) {
	

	btnEnviarDatosMensa.addEventListener('click', (e) => {
		e.preventDefault();
		
	 	
		var mensajeNombreMen = document.getElementById('nombresMen').value;
		var mensajeEmailMen = document.getElementById('emailMen').value;
		var mensajeTextoMen = document.getElementById('textoMen').value;
		var numeroTelefono = "+51921324118";


		var mensaje = "Hola Chris Movie!, mi nombre es " + mensajeNombreMen + ", mi correo Es " + mensajeEmailMen + " y mi mensaje : " + mensajeTextoMen;

		console.log(mensaje);
		var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=" + encodeURIComponent(mensaje);

	 	window.open(url);
		console.log('Enviado')
	})
}





const botonesReserva = document.querySelectorAll('.btn_reservar');

// Asociar un evento de clic a cada botón
botonesReserva.forEach((boton) => {
	boton.addEventListener('click', (event) => {
		const idPelicula = event.target.getAttribute("numId");
		console.log(idPelicula);

		//Guardar el nombre de la película seleccionada en localStorage
		localStorage.setItem('peliculaSeleccionada', idPelicula);
		// Abrir una nueva ventana o pestaña con la información de la película
		window.open('detalles.html', '_blank');
	});
});




// Obtener la película seleccionada de localStorage
const dataPelicula = localStorage.getItem('peliculaSeleccionada');

// Buscar la película en los datos
const peliculaSeleccionada = data.peliculas.find((pelicula) => pelicula.id == dataPelicula);



// Mostrar la información de la película
const detallePelicula = document.getElementById("contenedor");
let bgBanner = document.getElementById("banner-detalle");



if (peliculaSeleccionada) {

	let btnVideo = document.getElementById("btnVideo");
	if (peliculaSeleccionada){
		btnVideo.setAttribute('href', `${peliculaSeleccionada.video}`);
	}

	var horarios = peliculaSeleccionada.horario;
	console.log(peliculaSeleccionada.horario);
	bgBanner.style.backgroundImage = `url('${peliculaSeleccionada.banner}')`;
	detallePelicula.innerHTML = `<div class="imangen_compra">
  <img src="${peliculaSeleccionada.portada}" alt="portada">
</div>
<div class="formulario">
  <div>
      <h4>${peliculaSeleccionada.nombre}</h4>
      <p class="minutos">${peliculaSeleccionada.minutos}</p>
      <p class="synopsis">${peliculaSeleccionada.synopsis}</p>
      <p class="datos"><span>Direccion</span>${peliculaSeleccionada.direccion}</p>
      <p class="datos"><span>Guion</span> : ${peliculaSeleccionada.guion}</p>
      <p class="datos"><span>Reparto Principal</span> : ${peliculaSeleccionada.reparto}</p>
      <h5 class="titulo-Reserva">Datos para la reserva</h5>
  </div>
  <form action="">
                    <input type="text" id="nombres" placeholder="nombre completo" required>
                    <input type="mail" id ="email" placeholder="correo electronico" required>
                    <input type="number" id ="cel" placeholder="numero de celular" required>
                    <select name="miCombo" id="miCombo"></select>    
                    <button class="btn btn_prin" id="btnEnviar">Enviar</button>
                </form>
            </div>
    `;

} else {
	detallePelicula.innerHTML = "<p>No se encontró información de la película seleccionada.</p>";
}

const combo = document.getElementById('miCombo');
console.log(horarios)
console.log(combo);
horarios.forEach((horario, index) => {
	const comboHTML = `<option id="comboValue" value="${index}">${horario.hora}</option>`;

	combo.innerHTML += comboHTML;
});


const btnEnviarDatos = document.getElementById('btnEnviar')

if (btnEnviarDatos) {

	btnEnviarDatos.addEventListener('click', (e) => {
		e.preventDefault();
		var mensajeNombre = document.getElementById('nombres').value;
		var mensajeEmail = document.getElementById('email').value;
		var mensajeCel = document.getElementById('cel').value;
		var mensajeHora = document.getElementById('comboValue').textContent;

		var numeroTelefono = "+51921324118";

		console.log(mensajeHora);

		var mensaje = "Hola Chris Movie!, mi nombre es " + mensajeNombre + ", quiero ver la pelicula " + peliculaSeleccionada.nombre + " en el horario de " + mensajeHora + ", mi correo es : " + mensajeEmail + " y mi celular es : " + mensajeCel + " . Muchas gracias!!";
		var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=" + encodeURIComponent(mensaje);

		window.open(url);
		console.log('Enviado')
	})
}
