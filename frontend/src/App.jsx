import { BrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard' 
import { Signup } from './pages/Signup' 
import { Signin } from './pages/Signin' 
import { SendMoney } from './pages/SendMoney' 
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
