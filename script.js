const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");

const endScreen = document.createElement("div"); // Pantalla de felicitación
endScreen.id = "end-screen";
endScreen.style.display = "none";
endScreen.style.textAlign = "center";
endScreen.style.position = "absolute";
endScreen.style.top = "50%";
endScreen.style.left = "50%";
endScreen.style.transform = "translate(-50%, -50%)";
endScreen.style.backgroundColor = "#fff0f5";
endScreen.style.padding = "20px";
endScreen.style.borderRadius = "15px";
endScreen.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
document.body.appendChild(endScreen);

const endMessage = document.createElement("p");
endMessage.innerText = "¡Felicidades, mi amor! Lograste atrapar 20 corazones.";
endMessage.style.fontSize = "20px";
endMessage.style.color = "#f77fbe";
endScreen.appendChild(endMessage);

const viewMessagesButton = document.createElement("button");
viewMessagesButton.innerText = "Ver mensajes";
viewMessagesButton.style.padding = "15px 30px";
viewMessagesButton.style.fontSize = "18px";
viewMessagesButton.style.backgroundColor = "#f77fbe";
viewMessagesButton.style.color = "white";
viewMessagesButton.style.border = "none";
viewMessagesButton.style.borderRadius = "15px";
viewMessagesButton.style.cursor = "pointer";
viewMessagesButton.onclick = () => {
  window.location.href = "Mensajes.html";
};
endScreen.appendChild(viewMessagesButton);

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

// Imagen del gatito
const catImg = new Image();
catImg.src = "Gatito.png";

// Imagen del corazón
const heartImg = new Image();
heartImg.src = "Corazon.png"; // Reemplaza con tu imagen PNG de corazón

// Archivo de música
const audio = new Audio("Cancion.mp3"); // Reemplaza con tu archivo de música

// Estado del juego
let catX = canvas.width / 2 - 50;
let catY = canvas.height - 100;
let isMovingLeft = false;
let isMovingRight = false;
let hearts = [];
let score = 0;

// Variable para el mensaje temporal
let temporaryMessage = "";

// Botones de control
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

// Funciones para controlar el movimiento
function startMoveLeft() {
  isMovingLeft = true;
}

function stopMoveLeft() {
  isMovingLeft = false;
}

function startMoveRight() {
  isMovingRight = true;
}

function stopMoveRight() {
  isMovingRight = false;
}

// Asignar eventos a botones táctiles y de clic
leftBtn.addEventListener("touchstart", startMoveLeft);
leftBtn.addEventListener("mousedown", startMoveLeft);

leftBtn.addEventListener("touchend", stopMoveLeft);
leftBtn.addEventListener("mouseup", stopMoveLeft);
leftBtn.addEventListener("mouseleave", stopMoveLeft);

rightBtn.addEventListener("touchstart", startMoveRight);
rightBtn.addEventListener("mousedown", startMoveRight);

rightBtn.addEventListener("touchend", stopMoveRight);
rightBtn.addEventListener("mouseup", stopMoveRight);
rightBtn.addEventListener("mouseleave", stopMoveRight);

// Pantalla de inicio
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";
  audio.play(); // Reproducir la canción
  spawnHeart(); // Generar corazones
  updateGame();
});

// Generar corazones
function spawnHeart() {
  const x = Math.random() * (canvas.width - 50);
  hearts.push({ x, y: 0 });

  // Seguir generando corazones indefinidamente
  setTimeout(spawnHeart, 1500);
}

// Dibujar corazón
function drawHeart(x, y) {
  ctx.drawImage(heartImg, x, y, 60, 40);
}

// Función para limpiar el canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función para dibujar el texto de puntuación
function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Puntos: ${score}`, 10, 30); // Posición fija para la puntuación
}

// Función para dibujar el mensaje temporal
function drawTemporaryMessage() {
  if (temporaryMessage) {
    // Limpiar solo el área donde se dibuja el mensaje temporal
    ctx.clearRect(canvas.width / 2 - 150, canvas.height / 2 - 30, 300, 60);
    ctx.fillStyle = "#f77fbe";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(temporaryMessage, canvas.width / 2, canvas.height / 2); // Centrado
  }
}

// Actualizar el juego
function updateGame() {
  clearCanvas();

  // Mover gatito
  if (isMovingLeft && catX > 0) catX -= 5;
  if (isMovingRight && catX < canvas.width - 100) catX += 5;

  // Dibujar gatito
  ctx.drawImage(catImg, catX, catY, 100, 100);

  // Mover corazones
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].y += 3; // Velocidad de caída
    drawHeart(hearts[i].x, hearts[i].y);

    // Detectar colisión
    if (
      hearts[i].y + 40 >= catY &&
      hearts[i].x < catX + 100 &&
      hearts[i].x + 40 > catX
    ) {
      hearts.splice(i, 1);
      score++;
      i--;
    }
  }

  // Mostrar puntuación
  drawScore();

  // Verificar si mostrar mensaje temporal de 15 corazones
  if (score === 15 && temporaryMessage === "") {
    temporaryMessage = "¡Ya casii amorr!"; // Establecer mensaje temporal
    setTimeout(() => {
      temporaryMessage = ""; // Limpiar el mensaje después de 2 segundos
    }, 2000);
  }

  // Mostrar mensaje temporal
  drawTemporaryMessage();

  if (score >= 20) {
    audio.pause(); // Detener la canción
    audio.currentTime = 0; // Reiniciar la canción
    gameContainer.style.display = "none";
    endScreen.style.display = "block";
  } else {
    requestAnimationFrame(updateGame);
  }
}
