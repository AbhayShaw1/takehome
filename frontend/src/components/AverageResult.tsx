import type { AverageResponse } from "../types";


type AverageResultProps = {
  data: AverageResponse;
};
const AverageResult = ({data}:AverageResultProps) => {
  return (
     <div className="p-4 border rounded bg-gray-50 shadow">
      <h3 className="font-semibold mb-2">Average Result</h3>
      <p>Count: {data.count}</p>
      <p>Average: {data.average.toFixed(2)}</p>
    </div>
  )
}

export default AverageResult