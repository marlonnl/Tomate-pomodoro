import { Bounce, ToastContainer } from 'react-toastify'

import { Home } from './pages/Home'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'

export function App() {
  return (
    <div className="container-fluid">
      <TaskContextProvider>
        <Home />

        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </TaskContextProvider>
    </div>
  )
}
