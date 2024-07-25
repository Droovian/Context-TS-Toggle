import Container from "./components/Container";
import Products from "./Products";
import ThemeContext from "./context/context";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleClick = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <div className='w-full h-screen flex items-center justify-center'>
          <Container title="Learning useContext practically">
            <Button>Sign up</Button>
            <Button>Sign in</Button>
          </Container>
        </div>
        <Button onClick={handleClick} className="absolute top-0 m-3">Toggle Theme</Button>
      </>

      <Products/>
    </ThemeContext.Provider>
  )
}

export default App
