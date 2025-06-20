import "./App.css";
import { useState } from "react";

function App() {

  const[count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count - 1);
  }
  function incerHandler(){
    setCount(count + 1);
  }

  function resetHalder(){
    setCount(0);
  }


  return (
    <div className="w-[100vw] h-[100vh] flex  justify-center flex-col items-center bg-[#64748B] gap-10">
      <div className="text-[#0EA5E9] font-medium text-2xl">Increment & Decrement</div>
      <div className="flex flex-row justify-center gap-12 bg-white py-3 rounded-sm text-[25px] text-[#344151] ">
        <div>
          <button onClick={decreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbbf] text-5xl ">
            -
          </button>
        </div>

        <div className="font-bold gap-12 text-5xl ">
          {count}
        </div>

        <div>
          <button onClick={incerHandler} className=" border-l-2 text-center w-20 border-[#bfbfbbf] text-5xl">
            +
          </button>
        </div>

      </div>
      
      <div>
        <button onClick={resetHalder} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
