import type { AverageResponse, EwmaResponse } from "../types";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function fetchAverage(values: number[]): Promise<AverageResponse> {
    const res = await fetch(`${API_BASE}/average`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
    })
    if (!res.ok) throw new Error("Average API failed")
    return res.json()
}

export async function fetchEWMA(values:number[]):Promise<EwmaResponse>{
    const res = await fetch(`${API_BASE}/ewma`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({values})
    })
    if(!res.ok) throw new Error("EWMA API failed")
    return res.json()
}