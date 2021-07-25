import { ThemeProvider } from "@material-ui/core"
import { theme } from "providers/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        App
      </div>
    </ThemeProvider>
  )
}

export default App
