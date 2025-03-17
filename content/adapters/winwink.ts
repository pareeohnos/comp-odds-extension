import { TicketDetails } from "../scripts";

class WinWink {
  canProcess() {
    return true;
  }
  
  gatherDetails(): TicketDetails {
    const currentPriceEl = document.querySelector<HTMLElement>(".tfd-price")!;
    const cost = parseFloat(currentPriceEl.textContent!.replace(/£/, ""));
    const ticketSales = document.querySelector<HTMLElement>(".qty-amounts")!
    const ticketsSold = parseInt(ticketSales.querySelector("span:first-child")!.textContent!.replace(/,/, ""));
    const totalTickets = parseInt(ticketSales.querySelector("span:last-child")!.textContent!.replace(/,/, ""));
    const ticketsLeft = totalTickets - ticketsSold;
    const maxTickets = parseInt(document.querySelector<HTMLInputElement>(".quantity input.qty[name=quantity]")!.getAttribute("max")!);
    const instantWinsGrid = document.querySelector(".prize-grid");
    let instantWinsLeft = 0;

    if (instantWinsGrid) {
      const counters = instantWinsGrid.querySelectorAll(".ticket-content .won-counter");
      counters.forEach(counter => {
        let remaining = counter.textContent!.match(/(.*) of .*/)![1].replace(/,/, "");
        instantWinsLeft += parseInt(remaining);
      });
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

export default WinWink;