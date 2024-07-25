import { useContext } from "react"
import ThemeContext from "../context/context"

type CustomButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({ children, onClick, className }: CustomButtonProps) => {

    const theme = useContext(ThemeContext) ?? 'dark';

    const ButtonThemeClass = theme === 'light' ? 'bg-black text-white' : 'bg-white text-black';
  return (
    <button 
    onClick={onClick}
    className={`px-3 py-2 rounded-md ${className} ${ButtonThemeClass}`}>
        {children}
    </button>
  )
}

export default Button