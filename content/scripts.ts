if (document.body.classList.contains("single-product")) {
  console.log("Calculating odds");
  const cost = parseFloat(document.querySelector(".woocommerce-Price-amount > span")?.nextSibling!.textContent!);
  const totalTickets = parseInt(document.querySelector(".wcl-progress-meter .max")?.textContent!);
  const ticketsLeft = parseInt(document.querySelector(".wcl-progress-meter .sold")?.textContent!.replace("Tickets available: ", "")!);
  const instantWinsTable = document.querySelector("table");
  let instantWinsLeft = 0;

  if (instantWinsTable) {
    instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.winner")).filter(el => el.textContent === "-").length;
  }

  chrome.runtime.sendMessage({ 
    cost,
    totalTickets,
    ticketsLeft,
    instantWinsLeft
  });
}