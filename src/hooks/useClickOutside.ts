import { useEffect } from "react";

export default function useClickOutside(ref: React.MutableRefObject<HTMLElement | null>, action: () => void, overlay: boolean = false, dependency: boolean = true) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedElement = e.target as Node;
      if (overlay && ref.current === clickedElement) action()
      else if (!overlay && dependency && !ref.current?.contains(clickedElement)) action()
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
 
  }, [ref, action, overlay, dependency]); 
}
