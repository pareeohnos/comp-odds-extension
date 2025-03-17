import { TicketDetails } from "../scripts";

class GamingGiveaways {
  canProcess() {
    return true;
  }
  
  gatherDetails(): TicketDetails {
    const currentPriceEl = document.querySelector<HTMLElement>(".woocommerce-Price-amount.amount")!;
    const cost = parseFloat(currentPriceEl.textContent!.replace(/£/, ""));
    const ticketSales = document.querySelector<HTMLElement>(".product_meta .progress > p")?.textContent?.replaceAll(/Only| |sold|,/g, "")!.split("/")!
    const ticketsSold = parseInt(ticketSales[0]!);
    const totalTickets = parseInt(ticketSales[1]!);
    const ticketsLeft = totalTickets - ticketsSold;
    const maxTickets = parseInt(document.querySelector<HTMLInputElement>("input.qty-slider-input[name=quantity]")!.getAttribute("max")!);
    const instantWinsTable = document.querySelector("table.instant-win-table");
    let instantWinsLeft = 0;

    if (instantWinsTable) {
      instantWinsLeft = instantWinsTable.querySelectorAll("tr:not(.winner-row)").length;
    }

    return {
      cost,
      totalTickets,
      ticketsLeft,
      instantWinsLeft,
      maxTickets,
      stepSize: 5
    }
  }
}

export default GamingGiveaways;