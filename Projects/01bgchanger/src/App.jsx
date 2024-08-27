import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}    
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-3">
        <div className=" fixed flex flex-wrap justify-center bg-white gap-2 rounded-2xl px-3 shadow-lg py-2">
          <button onClick={() => setColor("red")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "green"}}>Greeb</button>
          <button onClick={() => setColor("white")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("blue")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("orange")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("violet")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick={() => setColor("pink")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("gray")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor("olive")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("purple")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("lavender")} className="px-2 rounded-full outline-none text-black shadow-lg py-1" style={{backgroundColor: "lavender"}}>lavender</button>
          <button onClick={() => setColor("black")} className="px-2 rounded-full outline-none text-white shadow-lg py-1" style={{backgroundColor: "black"}}>black</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
