import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import type { EwmaResponse } from "../types";

type ChartProps = {
  data: EwmaResponse;
};

const Chart = ({ data }: ChartProps) => {
  const formatted = data?.ewma_series?.map((val, index) => ({
    step: index + 1,
    value: val,
  }));
  console.log(data)
  console.log(data.ewma_series)

  return (
    <LineChart width={500} height={250} data={formatted}>
      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="step" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;