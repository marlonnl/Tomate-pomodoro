import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'
import { ToastifyContainer } from './components/ToastifyContainer'
import { MainRouter } from './routes/MainRouter'

export function App() {
  return (
    <div className="container-fluid">
      <TaskContextProvider>
        <ToastifyContainer>
          <MainRouter />
        </ToastifyContainer>
      </TaskContextProvider>
    </div>
  )
}
