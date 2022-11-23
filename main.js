function createGame(player1, hour, player2) {
  return ` <li>
              <img src="assets/${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="assets/${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "QUINTA",
    createGame("brasil", "16:00", "servia") +
      createGame("suica", "7:00", "camarao")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camarao", "7:00", "servia") +
      createGame("brasil", "13:00", "suica")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("camarao", "16:00", "brasil") +
      createGame("suica", "16:00", "servia")
  )
