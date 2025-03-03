import { TicketDetails } from "../scripts";

class BrickPrizeDraw {
  canProcess() {
    return true;
  }
  
  gatherDetails(): TicketDetails {
    const currentPriceEl = document.querySelector<HTMLElement>(".price__current")!;
    const cost = parseFloat(currentPriceEl.textContent!.replace(/£|per|entry| |\n/g, "")!);
    const totalTickets = parseInt(currentPriceEl.dataset!.totalEntries!);
    const ticketsLeft = parseInt(document.querySelector<HTMLElement>("product-inventory")!.dataset!.inventoryQuantity!);
    const maxTickets = parseInt(currentPriceEl.dataset!.maxEntries!);
    // const instantWinsTable = document.querySelector("table");
    let instantWinsLeft = 0;

    // if (instantWinsTable) {
    //   instantWinsLeft = Array.from(instantWinsTable.querySelectorAll("tr td.winner")).filter(el => el.textContent === "-").length;
    // }

    return {
      cost,
      totalTickets,
      ticketsLeft,
      instantWinsLeft,
      maxTickets,
      stepSize: 2
    }
  }
}

export default BrickPrizeDraw;