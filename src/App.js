import Topbar from "./scenes/global/Topbar";
import "./App.css"

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


// function App() {
//   const [theme, colorMode] = useMode();
 
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme }>
//         <CssBaseline />
//         <div className="app">
//           <main className="content">
//             <Topbar />
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>    
//   );
// }

import React, { useState } from "react";
import { red } from "@mui/material/colors";

function Welcome(props) {
  return <h2>Welcome, {props.name}</h2>;
}

const themes = {
  "dark": {
    "background": "red",
    "width": "400px",
    "textAlign": "center",

    
  },
  "light":{
    "background": "blue",
  }
};
const themeContext = React.createContext(themes.dark);

function MyCode(c) {
  const [code, setCode] = useState(c);
  const handle = () => {
    setCode(code.split("").reverse().join(""));
  };

  React.useEffect(()=> {
    document.title = code
  })


  return {
    value: code, 
    handle: handle
  }
}

function App() {
  const [current, setCurrent] = useState(new Date().toLocaleTimeString());
  const code = MyCode("react code")

  const theme = React.useContext(themeContext);
  
  React.useEffect(()=> {
    
    const timer = setInterval(() => {
      setCurrent(new Date().toLocaleTimeString())
    } , 1000)
    window.timer = timer
    return () => {
      window.clearInterval(timer)
    }
  })


  return (
    <div  style={theme}>
      <h1>React Tuition</h1>
      <Welcome name="pp"></Welcome>

      <button onClick={ code.handle}>
        {code.value}
        
      </button>
      <div>{current}</div>
    </div>
  );
}


export default App;
