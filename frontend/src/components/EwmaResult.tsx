import type { EwmaResponse } from "../types";
import Chart from "./Chart";

type EwmaResultProps = {
  data: EwmaResponse;
};


export default function EwmaResult({ data }: EwmaResultProps) {
  const { count, alpha, final } = data;

  return (
    <div className="p-4 border rounded bg-gray-50 shadow space-y-4">
      <h3 className="font-semibold">EWMA Result</h3>

      <p>Count: {count}</p>
      <p>Alpha: {alpha}</p>
      <p>Final: {final.toFixed(2)}</p>

      <div>
        <h4 className="font-medium mb-1">Series (chart)</h4>
        <Chart data={data} />
      </div>
    </div>
  );
}
