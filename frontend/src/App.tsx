import { useState } from "react";
import InputForm from "./components/InputForm";
import AverageResult from "./components/AverageResult";
import EwmaResult from "./components/EwmaResult";
import type { AverageResponse, EwmaResponse } from "./types";
import { fetchAverage, fetchEWMA } from "./api/network_api";

export default function App() {
  const [average, setAverage] = useState<AverageResponse | null>(null);
  const [ewma, setEwma] = useState<EwmaResponse | null>(null);

  const handleAverage = async (values: number[]) => {
    try {
      const data = await fetchAverage(values);
      setAverage(data);
    } catch (err) {
      console.error("Failed to fetch average:", err);
    }
  };

  const handleEwma = async (values: number[]) => {
    try {
      const data = await fetchEWMA(values);
      setEwma(data);
    } catch (err) {
      console.error("Failed to fetch EWMA:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">EWMA Assignment Frontend</h1>

      <InputForm onAverage={handleAverage} onEwma={handleEwma} />

      {average && <AverageResult data={average} />}
      {ewma && <EwmaResult data={ewma} />}
    </div>
  );
}
