import CompCity from "./adapters/comp-city";
import BrickPrizeDraw from "./adapters/brick-prize-draw";
import ParagonCompetitions from "./adapters/paragon-competitions";
import GamingGiveaways from "./adapters/gaming-giveaways";
import WinWink from "./adapters/winwink";

export interface TicketDetails {
  cost: number;
  totalTickets: number;
  ticketsLeft: number;
  instantWinsLeft: number;
  maxTickets: number;
  stepSize: number;
}

const path = window.location.href;
let adapter;

console.log(path);
if (path.match(/compcitygiveaways/)) {
  adapter = new CompCity();
} else if (path.match(/brickprizedraws.com/)) {
  adapter = new BrickPrizeDraw();
} else if (path.match(/paragon/)) {
  adapter = new ParagonCompetitions();
} else if (path.match(/gaminggiveaways/)) {
  adapter = new GamingGiveaways();
} else if (path.match(/winwink/)) {
  adapter = new WinWink();
}

console.log(adapter);

if (adapter?.canProcess()) {
  const details = adapter.gatherDetails();
  chrome.runtime.sendMessage(details);
}