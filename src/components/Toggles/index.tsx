import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import sound from "../../assets/sounds/t.mp3";

interface Props { 
  theme: string | null,
  setTheme: React.Dispatch<React.SetStateAction<string | null>>
}

function Toggles({ theme, setTheme }: Props) {

  const eventClickButton = (theme: string) => {
    const audio = new Audio();
    audio.src = sound;
    audio.play();

    setTheme(theme)
  }

  return (
    <div className="bg-zinc-100 w-[80px] h-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center 
    dark:bg-zinc-800 transition translate-x-[88px] rotate-90 duration-300 absolute dark:-translate-x-0 dark:-rotate-90 dark:duration-300"
    >
      {theme === "dark"
        ? <BsFillMoonFill
          className="w-[61px] h-[61px] text-white rotate-90"
          onClick={() => eventClickButton("light")}
        />
        : <BsFillSunFill
          className="w-[61px] h-[61px] text-yellow-500 dark:invisible dark:rotate-90"
          onClick={() => eventClickButton("dark")}

        />
      }
    </div>
  );
}

export default Toggles;