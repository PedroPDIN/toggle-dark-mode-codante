import { useEffect, useState } from "react";
import Toggles from "./components";

function App() {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme") !== "light" ? "dark" : "light");
  console.log(typeof localStorage.getItem("theme"))

  useEffect(() => { 
    const root = document.documentElement.classList;

    root.remove(theme === "light" ? "dark" : "light");
    root.add(theme as string)
    localStorage.setItem("theme", theme as string);
  }, [theme])
  

  return (
    <div className="bg-zinc-100 w-full h-full absolute flex items-center justify-center dark:bg-zinc-900 transition-colors ease-in duration-300">
      <div className="bg-zinc-300 w-[180px] h-[90px] rounded-[70px] shadow-[inset_5px_0px_15px_-3px_rgba(0,0,0,0.25)] py-[5px] px-[6px] flex cursor-pointer dark:bg-zinc-700">
        <Toggles theme={ theme } setTheme={ setTheme } />
      </div>
    </div>
  )
}

export default App;