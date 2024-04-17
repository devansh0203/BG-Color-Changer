import { useState } from "react"

function App() {
  const [color, setColor] = useState("")

  return (
    <>
    <h1 className=" text-center text-emerald-500 text-2xl py-3">Background Color Changer</h1>
      <div className="w-full h-screen duration-200"
      style={{background: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"red"}}>Red</button>
          <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"black"}}>Black</button>
          <button onClick={()=>{setColor("orange")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"orange"}}>Orange</button>
          <button onClick={()=>{setColor("violet")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"violet"}}>Violet</button>
          <button onClick={()=>{setColor("grey")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"grey"}}>Grey</button>
          <button onClick={()=>{setColor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"pink"}}>Pink</button>
          <button onClick={()=>{setColor("brown")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"brown"}}>Brown</button>
          <button onClick={()=>{setColor("maroon")}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{background:"maroon"}}>Maroon</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
