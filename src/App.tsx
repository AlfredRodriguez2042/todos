import { Provider } from 'react-redux'
import { store } from './redux'
import AppRouter from './routes'
import ThemeProvider from './theme/ThemeProvider'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
