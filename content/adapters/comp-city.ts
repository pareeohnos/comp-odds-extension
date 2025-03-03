import { TicketDetails } from "../scripts";

class CompCity {
  canProcess() {
    return document.body.classList.contains("single-product");
  }
  
  gatherDetails(): TicketDetails {
    const cost = parseFloat(document.querySelector(".woocommerce-Price-amount > span")?.nextSibling!.textContent!);
    const totalTickets = parseInt(document.querySelector(".wcl-progress-meter .max")?.textContent!);
    const ticketsLeft = parseInt(document.querySelector(".wcl-progress-meter .sold")?.textContent!.replace("Tickets available: ", "")!);
    const instantWinsTable = document.querySelector("table");
    const maxTickets = parseInt(document.querySelector("input[name=quantity]")?.getAttribute("max")!);
    let instantWinsLeft = 0;

    if (instantWinsTable) {
      instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.winner")).filter(el => el.textContent === "-").length;
    }

    return { 
      cost,
      totalTickets,
      ticketsLeft,
      instantWinsLeft,
      maxTickets,
      stepSize: 10
    }
  }
}

export default CompCity;