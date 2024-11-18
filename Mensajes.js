const messages = [
  "Hola mi amorcitoo, que tal estas mi amor?",
  "Amor te hice esto, espero en verdad te guste",
  "Te estoy haciendo ver las estrellas amor🤤",
  "Jijij, es broma mi amor, se me ocurrio hacerlo asi",
  "Amor como estas?",
  "Sabes, cada vez que te hago algo asi, es para recordarte algunas cositas",
  "Porque me encanta recordarte quee......",
  "Estas muy bonita mi amor, estas muy hermosa, me gustas mucho, me encantas enserio",
  "Me encanta recordarte que eres muy especial para mi, que eres unica mi amor",
  "Y tambien me encanta recordarte lo mucho que ti amuuu🥺",
  "Ten presente siempre eso amor, siii?",
  "Te lo pido super enserio, por favor no lo olvides amor",
  "Pero para ayudarte a que no lo olvides, me encanta recordartelo cada que puedo🥺",
  "Y pues ahora como ya sali de estudiar, pues tengo mas tiempo para hacerte lindos detalles mi amor",
  "Te sere sincero mi amor, la verdad ya me aburri jijijij",
  "Porque pues no salgo a ningun lado, paso solo en la casa y cuando salgo es solo a la iglesia",
  "Tambien porque en el dia paso mas que todo solo y pues no se amor, me aburro ",
  "Pero por otro lado, paso extrañandote demasiado, paso practicamente todo el dia pensando en ti",
  "Solo imaginate, si antes de que saliera de la U, pasaba pensando en tiii",
  "No digamos ahora que no tengo mas cosas que hacer amor jijiji",
  "Sinceramente si te paso extrañando demasiado amor, mucho muchooo🥺🥺🥺",
  "Y pues no se amor, solo espero que no te aburras cuando te digo que te extraño🥺",
  "Tambien espero que no te aburras de leer lo que te envio, porque la verdad te lo hago con mucho amorr",
  "Aunque se que es bastante texto amor, peyo pues por eso te lo envio el domingo, osea hoy por la tarde amor",
  "Porque se que tienes el tiempo talvez para leerlo, ya que hoy llegaras temprano a tu casita",
  "Entonces asi lo ves tranquila mi amor",
  "Bueno mi amor, de manera resumida queria recordarte que ti amu mucho, que te extraño demasiado",
  "Y queria recordarte lo importante que eres para mi y lo especial queres para mi, que nunca dudes eso",
  "Creo que quedo claro verdad mi amorcito?, me das un bechito?🥺",
  "Yo queyo que me des un bechito mi amor poy favoy🥺",
  "Eso por una parte mi amor, ahora quiero hablar otra cosita contigoo",
  "Pues porque no se si tendras tiempo en la tarde mi amorcito, asi me cuentas tu semana",
  "Y me cuentas, como estas amor? como se sientesss?",
  "Creeme que a mi me encanta mucho cuando me cuentas tu semana, y cuando me dices como estas",
  "Me encanta demasiado mi amor",
  "Y pues no se amor, creeme que me encantaria saberlo",
  "Yo ya te pedi que pues tengamos un dia para hablar amor, asi como la semana pasada",
  "Me encanto ese audio que me enviastes mi amor, encheriooooo, tu voz es muy lindaa",
  "Y me encanta cuando me cuentas sobre ti mi amorrrr",
  "Entonces pues, me encantaria que los domingos siempre me cuentes tu semana mi amorrr",
  "Siempre paso pensando en ti princesa, la verdad vives en mi mente🙈",
  "Romanticamente hablando y tambien de manera pervertida🙈",
  "Pero ayyy, yo si empiezo a pensar en ti de manera pervertida me emociono🙈",
  "Asi que mejor le digo lo que le quiero decir mi amor🤭",
  "Sabes amor, me encanta que me cuentes tu semana, no solo porque si",
  "Aparte de que me interesa saber de ti, me interesa saber como estas",
  "Pues de esa manera, me doy cuenta de como te sientes",
  "De como estas, no quiero redundar mucho amor, pero en en pocas palabras",
  "Yo se lo mucho que extrañas a tu hermanito",
  "Se como te puedes sentir amor, me lo imagino enserio amor",
  "Y pues yo jamas te voy a decir, mira ya superalo ya paso",
  "Al contrario, yo siempre trato de demostrarte que estoy contigo",
  "Siempre trato de demostrarte lo mucho que ti amuuu",
  "Y creeme que quiero dejarte muy pero muy claro, que me importas mucho mi amor",
  "Que ti amuuu muchooo mi amor, que eres especial para mi",
  "Y que cuando no te sientas bien, podamos hablarlo amor",
  "Porque no me gustaria que te sientas mal y yo sin saberloo",
  "Por favor ehhh amorcitoo",
  "Siempre recuerdalo por favor mi amoyy",
  "Recuerda que como te dije la vez pasada, que en persona te tengo que decir algo mi amor🙈",
  "Que no se le olvide mi amorcito, que cuando nos veamos le tengo que decir algo jijiji",
  "Y pues en general eso mi amorcito, que estas muy delichocha tambien🙈",
  "Y te confesare algoo mi amor, la verda tuve un sueño humedo contigoo un dia de estos🙈",
  "Siempre me despierto con mi pilin paradito, pero ese dia exagere mi amor🙈",
  "La verdad el sueño fue super rico🤤",
  "Me encanto tantooo que todavia lo recuerdo muyyy pero muy bien🙈",
  "La verdad estas bien deliciosa mi amor, para chuparse los dedos🙈",
  "Eso es todo mi amorcito, Tiii amu mucho muchoo, eres super linda, me encantas demasiado mi amor🙈",
  "Eso es todo princesa hermosa❤️"
];

const sea = document.getElementById('sea');
const messageContainer = document.getElementById('message-box');
const startScreen = document.getElementById('start-screen');
let starIndex = 0;



// Función para crear las estrellas
function createStar(message) {
  const star = document.createElement('div');
  star.className = 'star'; // Clase para estrella
  star.dataset.message = message; // Almacenar mensaje en data-message
  sea.appendChild(star);

  // Posicionar la estrella aleatoriamente
  const leftPosition = Math.random() * 80 + 10; // Entre 10% y 90%
  star.style.left = `${leftPosition}%`;

  // Evento de click en la estrella
  star.addEventListener('click', function () {
    showMessage(this.dataset.message);
    star.remove(); // Eliminar la estrella al hacer clic
  });
}

// Función para mostrar el mensaje
function showMessage(message) {
  const messageText = document.getElementById('message-content');
  messageText.textContent = message;
  messageContainer.style.display = 'flex'; // Mostrar el mensaje
}

// Botón de cierre del mensaje
document.getElementById('close-message').addEventListener('click', () => {
  messageContainer.style.display = 'none'; // Ocultar el mensaje
  createStar(messages[starIndex]); // Crear nueva estrella
  starIndex = (starIndex + 1) % messages.length; // Ciclar mensajes
});

// Iniciar el juego
document.getElementById('start-button').addEventListener('click', () => {
  startScreen.style.display = 'none'; // Ocultar la pantalla de inicio
  createStar(messages[starIndex]); // Crear la primera estrella
  starIndex++;
});
