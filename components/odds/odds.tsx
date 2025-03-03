import { Odd } from "@/sidebar/hooks/useOdds";

interface OddsParams {
  odd: Odd;
}

const StatBox = ({ label, value }: { label: string, value: string }) => {
  return (
    <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-lg font-bold leading-none sm:text-3xl">{value}</span>
    </div>
  );
}

const Odds: React.FC<OddsParams> = ({ odd }) => {
  const formatPercentage = (percentage: number): string => {
    return `${percentage.toFixed(4)}%`;
  }

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2">
        <StatBox label="Total Cost" value={`£${odd.totalCost}`} />
      </div>

      <div className="col-span-2">
        <StatBox label="Current chance of winning" value={formatPercentage(odd.currentChanceOfWinning)} />
      </div>

      <div className="col-span-2">
        <StatBox label="Fully sold chance of winning" value={formatPercentage(odd.chanceOfWinning)} />
      </div>

      <div className="col-span-2">
        <StatBox label="Chance of instant win" value={formatPercentage(odd.chanceOfInstantWin)} />
      </div>
    </div>
  )
}

export default Odds;