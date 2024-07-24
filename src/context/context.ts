import { createContext } from "react";

type Theme = 'light' | 'dark' | '';

const ThemeContext = createContext<Theme | undefined>(undefined);

export default ThemeContext;