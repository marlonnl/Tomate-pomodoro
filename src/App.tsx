import { Home } from './pages/Home'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'
import { ToastifyContainer } from './components/ToastifyContainer'

export function App() {
  return (
    <div className="container-fluid">
      <TaskContextProvider>
        <ToastifyContainer>
          <Home />
        </ToastifyContainer>
      </TaskContextProvider>
    </div>
  )
}
