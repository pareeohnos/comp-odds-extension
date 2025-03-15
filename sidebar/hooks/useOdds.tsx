import { useEffect, useState } from "react"

interface OddsMessage {
  cost: number;
  totalTickets: number;
  ticketsLeft: number;
  instantWinsLeft: number;
  maxTickets: number;
  stepSize: number;
}

export interface Odd {
  totalCost: number;
  currentChanceOfWinning: number;
  chanceOfWinning: number;
  chanceOfInstantWin: number;
}

interface Odds {
  [index: string]: Odd;
}

const calculatOdds = (numberOfTickets: number, message: OddsMessage): Odd => {
  const totalCost = message.cost * numberOfTickets;
  const chanceOfWinning = (numberOfTickets / (message.totalTickets + numberOfTickets)) * 100.0;
  const currentChanceOfWinning = (numberOfTickets / (message.totalTickets + numberOfTickets - message.ticketsLeft)) * 100.0;
  let chanceOfInstantWin = 0;
  
  if (message.instantWinsLeft > 0) {
    const chanceOfLosing = (message.ticketsLeft - numberOfTickets) / message.ticketsLeft;
    chanceOfInstantWin = (1 - Math.pow(chanceOfLosing, message.instantWinsLeft)) * 100.0;
  }

  return {
    totalCost,
    chanceOfWinning,
    currentChanceOfWinning,
    chanceOfInstantWin
  };
}

const useOdds = () => {
  const [odds, setOdds] = useState<Odds>({});
  const onMessage = (message: OddsMessage) => {
    console.log("Calculating odds", message);

    let steps = [1];
    for (let i = message.stepSize; i <= message.maxTickets; i += message.stepSize) {
      steps.push(i);
    }

    if (steps[-1] !== message.maxTickets) {
      steps.push(message.maxTickets);
    }

    const calculatedOdds = steps.reduce(
      (acc, numberOfTickets) => Object.assign(acc, { [numberOfTickets]: calculatOdds(numberOfTickets, message)}),
      {} as Odds
    );
    // const calculatedOdds = {
    //   1: calculatOdds(1, message),
    //   10: calculatOdds(10, message),
    //   20: calculatOdds(20, message),
    //   30: calculatOdds(30, message),
    //   40: calculatOdds(40, message),
    //   50: calculatOdds(50, message),
    //   100: calculatOdds(100, message),
    //   150: calculatOdds(150, message),
    //   200: calculatOdds(200, message),
    // };

    console.log("Calculated odds", calculatedOdds);

    setOdds(calculatedOdds);
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(onMessage);
    
    return () => {
      chrome.runtime.onMessage.removeListener(onMessage);
    };
  }, []);
  
  return {
    odds
  }
}

export default useOdds;