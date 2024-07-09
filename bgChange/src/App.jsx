import { useState } from "react"


function App() {
  const[color,setcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-xl bg-white px-2 py-3 rounded-3xl">
          <button
          onClick={()=>setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={()=>setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button
          onClick={()=>setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
          onClick={()=>setcolor("Olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"olive"}}
          >Olive</button>
          <button
          onClick={()=>setcolor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button
          onClick={()=>setcolor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"purple"}}
          >Purple</button>
          <button
          onClick={()=>setcolor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"lavender"}}
          >Lavender</button>
          <button
          onClick={()=>setcolor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"gray"}}
          >Gray</button>
          </div>
      </div>
    </div>
  )
}

export default App