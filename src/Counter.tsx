// src/Counter.tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h2 className="mb-4 font-bold text-2xl text-center">Counter Test</h2>

        <div className="text-center">
          <p className="mb-4 font-bold text-4xl">{count}</p>

          <div className="flex gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition-colors"
            >
              Decrease
            </button>

            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white transition-colors"
            >
              Increase
            </button>
          </div>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 mt-4 px-4 py-2 rounded text-white transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
