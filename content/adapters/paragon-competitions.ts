import { TicketDetails } from "../scripts";

class ParagonCompetitions {
  canProcess() {
    return true;
  }
  
  gatherDetails(): TicketDetails {
    const cost = parseFloat(document.querySelector<HTMLElement>(".cart .atct-price")!.dataset!.price!);
    const totalTickets = parseInt(document.querySelector(".wcl-progress-meter .max")?.textContent!);
    const ticketsLeft = parseInt(document.querySelector(".wcl-progress-meter .sold")?.textContent!.replace("Tickets Left:  ", "")!);
    const instantWinsTable = document.querySelector("table.instant-win-shortcode-table");
    const maxTickets = parseInt(document.querySelector("input[name=quantity]")?.getAttribute("max")!);
    let instantWinsLeft = 0;

    if (instantWinsTable) {
      instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.instant-win-ticket-winner")).filter(el => el.textContent === "").length;
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

export default ParagonCompetitions;