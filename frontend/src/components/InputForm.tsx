import { useState } from "react";

type InputFormProps = {
  onAverage: (values: number[]) => void;
  onEwma: (values: number[]) => void;
};

const InputForm = ({onAverage,onEwma}:InputFormProps) => {
 const[input,setInput]=useState("");
 const parseNumber = ():number[]|null=>{
    const numbers = input.split(",")
    .map(v=>v.trim())
    .filter(Boolean)
    .map(Number)    

    if (!numbers.length || numbers.some(isNaN)) {
      return null;
    }
    return numbers;
 }

 const handleClick = (type: "average" | "ewma") => {
  const values = parseNumber();
  if (!values) return;

  if (type === "average") {
    onAverage(values);
  } else if (type === "ewma" && onEwma) {
    onEwma(values);
  }
};
    return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="e.g. 1,2,3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="button"
        onClick={() => handleClick("average")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Get Average
      </button>

      <button
        type="button"
        onClick={() => handleClick("ewma")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Get EWMA
      </button>
    </div>
  )
}

export default InputForm