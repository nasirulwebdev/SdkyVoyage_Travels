import { Sun, Moon, Monitor, Check } from "lucide-react";
import useTheme from "../../hooks/useTheme";


const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();


    const themes = [
        {
            name: "light",
            label: "Light",
            icon: Sun
        },
        {
            name: "dark",
            label: "Dark",
            icon: Moon
        },
        {
            name: "system",
            label: "System",
            icon: Monitor
        }
    ];


    return (

        <div className="dropdown dropdown-end">

            <button
                tabIndex={0}
                className="
                btn
                btn-ghost
                btn-circle
                hover:bg-base-200
                "
            >

                {
                    theme === "dark" 
                    ? <Moon size={20}/>
                    : theme === "light"
                    ? <Sun size={20}/>
                    : <Monitor size={20}/>
                }

            </button>


            <ul
                tabIndex={0}
                className="
                dropdown-content
                z-[50]
                mt-3
                p-2
                shadow
                menu
                bg-base-100
                rounded-box
                w-44
                border
                border-base-200
                "
            >

                {
                    themes.map((item)=>{

                        const Icon = item.icon;


                        return (

                            <li key={item.name}>

                                <button
                                    onClick={()=>setTheme(item.name)}
                                    className="
                                    flex
                                    items-center
                                    justify-between
                                    "
                                >

                                    <span className="flex items-center gap-3">

                                        <Icon size={18}/>

                                        {item.label}

                                    </span>


                                    {
                                        theme === item.name && (
                                            <Check 
                                                size={16}
                                            />
                                        )
                                    }

                                </button>

                            </li>

                        )

                    })
                }


            </ul>


        </div>

    );
};


export default ThemeToggle;