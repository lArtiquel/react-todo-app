import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Theme from './theme'
import TaskPage from './pages/task'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TaskPage />
    </ThemeProvider>
  )
}

export default App
