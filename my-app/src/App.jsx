import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#e6e6e6] gap-4 ">
      <h1 className="text-4xl font-bold text-[#000a1c]">React Counter</h1>
      <div className="flex flex-col bg-white w-162.5 h-64 rounded-xl justify-center items-center gap-8">
        <span className="text-3xl">{count}</span>
        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => {
              setcount(count - 5);
            }}
            className="w-32.5 h-12.5 border rounded-xl bg-[#f2f2f2] border-[#dddddd]"
          >
            -5
          </button>

          <button
            onClick={() => {
              setcount(count - 1);
            }}
            className="w-32.5 h-12.5 border rounded-xl bg-[#f2f2f2] border-[#dddddd]"
          >
            ➖ Decrement
          </button>
          <button
            onClick={() => {
              setcount(count + 1);
            }}
            className="w-32.5 h-12.5 border rounded-xl bg-[#f2f2f2] border-[#dddddd]"
          >
            ➕ Increment
          </button>
          <button
            onClick={() => {
              setcount(count + 5);
            }}
            className="w-32.5 h-12.5 border rounded-xl bg-[#f2f2f2] border-[#dddddd]"
          >
            +5
          </button>
        </div>
        <button
          onClick={() => setcount(0)}
          className="w-32.5 h-12.5 border rounded-xl bg-[#f2f2f2] border-[#dddddd]"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default App;
