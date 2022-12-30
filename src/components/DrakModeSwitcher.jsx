import useDarkMode from "../hooks/useDarkMode";  
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitcher = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const toggleDarkMode = (e) => {
        setTheme(colorTheme);
        e.target.classList.toggle("mode-spin");
    };
  
    return (
        <div onClick={toggleDarkMode} className="fixed bottom-0 text-[1.75rem] right-0 mb-5 shadow-md hover:shadow-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 mr-5 bg-zinc-200 dark:bg-zinc-700 text-white transition-all cursor-pointer rounded-full p-2 frcc">
            { colorTheme === "dark" ? <BsFillSunFill className="text-yellow-500" /> : <BsFillMoonFill className="text-white" /> }
        </div>
    );
}

export default DarkModeSwitcher