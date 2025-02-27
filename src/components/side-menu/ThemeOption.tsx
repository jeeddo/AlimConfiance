import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../utils-lib/cn";
import { ThemeOptionProps } from "./sideMenu.types";

export default function ThemeOption({title, classNameCondition, icon}: ThemeOptionProps) {
    return <li className={cn('flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500', classNameCondition)}><FontAwesomeIcon className="w-4" icon={icon} /> {title}</li>
}