import { Home } from './pages/Home'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'

export function App() {
  return (
    <div className="container-fluid">
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  )
}
