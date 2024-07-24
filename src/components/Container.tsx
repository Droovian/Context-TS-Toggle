import { useContext } from "react"
import ThemeContext from "../context/context";

type ContainerProps = {
    title: string,
    children: React.ReactNode;
}

const Container = ({title, children} : ContainerProps) => {

    const theme = useContext(ThemeContext) ?? 'dark';

    const themeClass = theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-black text-gray-300';

  return (
    <section className={`border-black border-2 px-3 py-4 w-1/2 ${themeClass}`}>
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <div className="flex gap-5">
            {children}
        </div>
        
    </section>
  )
}

export default Container